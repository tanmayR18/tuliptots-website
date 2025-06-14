import { createContext, useEffect, useState, useContext } from "react";
import { supabase } from "@/supabaseClient";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [session, setSession] = useState(undefined);

  // Sign up
  const signUpNewUser = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      console.error("there was a problem signing up:", error);
      return { success: false, error };
    }

    const user = data.user;

    if (user) {
      // Insert into the admins table with is_admin defaulting to false
      const { error: insertError } = await supabase.from("admins").insert({
        id: user.id,
        email: user.email,
        // is_admin will default to false, so you can omit this field
      });

      if (insertError) {
        console.error("Error inserting into admins table:", insertError);
        return { success: false, error: insertError };
      }
    }

    return { success: true, data };
  };

  // Sign Up
  const signInUser = async (email, password) => {
    console.log("email and password", email, password);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        console.error("sign in error occurred", error);
        return { success: false, error: error.message };
      }

      console.log("sign-in success:", data);
      return { success: true, data };
    } catch (error) {
      console.error("an error occurred:", error);
    }
  };

  // Sign out
  const signOut = () => {
    const { error } = supabase.auth.signOut();
    setSession(undefined);
    if (error) {
      console.error("there was an error", error);
    }
  };

  // check if user is admin
  const checkIsAdmin = async () => {
    const user = session.user;

    if (!user) {
      return false;
    }

    const { data: adminData, error: adminError } = await supabase
      .from("admins")
      .select("is_admin")
      .eq("id", user.id)
      .single();

    if (adminError) {
      console.error("Error fetching admin record:", adminError);
      return false;
    }

    return adminData.is_admin;
  };

  // upload images to supabase
  const uploadImages = async (file) => {
    try {
      const userId = session?.user?.id;

      if (!file) {
        console.error("No file provided");
        return;
      }

      const fileExt = file.name.split(".").pop();
      const filePath = `${Date.now()}.${fileExt}`;

      const { error } = await supabase.storage
        .from("gallery")
        .upload(filePath, file, {
          contentType: file.type,
          upsert: true,
        });

      if (error) {
        console.error("Upload error:", error.message);
      }

      return filePath;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        session,
        signUpNewUser,
        signInUser,
        signOut,
        checkIsAdmin,
        uploadImages,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
