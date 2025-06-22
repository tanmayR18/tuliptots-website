import React, { useRef, useState } from "react";
import Navbar from "../components/common/Navbar";
import image1 from "../assets/admissionForm.jpg";
import image from "../assets/admission/admission.png";
import hero from "../assets/admission/admissionHeroChild.png";
import hero1 from "../assets/admission/admissionHeroChild1.png";
import { useForm } from "react-hook-form";
import {
  Document,
  Image,
  Page,
  PDFDownloadLink,
  PDFViewer,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import axios from "axios";

const Admission = () => {
  const date = new Date();
  const fileRef = useRef(null);

  const childBirthRef = useRef(null);
  const ChildAadhaarRef = useRef(null);
  const childPhotoRef = useRef(null);
  const parentPhotoRef = useRef(null);
  const parentAadhaarRef = useRef(null);
  const residenceProofRef = useRef(null);
  const medicalCertificateRef = useRef(null);

  //   const [showDocument, setshowDocument] = useState(false);
  //   const [admissionData, setAdmissionData] = useState({});

  const [status, setStatus] = useState("");

  const {
    register,
    handleSubmit,
    getValues,
    // watch,
    formState: { errors },
  } = useForm({
    // child details
    defaultValues: {
      childName: "",
      nickName: "",
      dob: "",
      age: "",
      gender: "",
      nationality: "",
      motherTongue: "",
      homeLanguage: "",
      currentAddress: "",
      permanentAddress: "",
      course: "",
      // child development, preference, comfort needs
      isPottyTrained: "",
      isSelfFeeding: "",
      sleepRoutine: "",
      napDuringDay: "",
      napTiming: "",
      napDuration: "",
      useAnyPacifier: "",
      pacifierDetails: "",
      foodPreference: "",
      favouriteSnacks: "",
      feedingRoutine: "",
      thingsToClamWhenUpset: "",
      specificWordsUsed: "",
      seperationAnxiety: "",
      easeTransitionForSeperationAnxiety: "",
      distressTiggers: "",
      ritualsToComfort: "",
      interest: "",
      hobbies: "",
      howFreeTimeSpent: "",
      dislikes: "",
      comfortObject: "",
      socialStyle: "",
      screenTimePerDay: "",
      typeOfContent: "",
      favouriteCharacterSongShow: "",
      otherNotes: "",
      //Parent/Guardian details
      motherName: "",
      motherDob: "",
      motherOccupation: "",
      motherNumber: "",
      motherEmail: "",
      motherAadharNumber: "",
      fatherName: "",
      fatherDob: "",
      fatherOccupation: "",
      fatherNumber: "",
      fatherEmail: "",
      fatherAadharNumber: "",
      guardianName: "",
      guardianDob: "",
      guardianOccupation: "",
      guardianNumber: "",
      guardianEmail: "",
      guardianAadharNumber: "",
      // Emergency contact detail
      emergencyName: "",
      emergencyRelation: "",
      emergencyNumber: "",
      emergencyEmail: "",
      emergencyAlternateNumber: "",
      //   documents
      childBirthDoc: "",
      childAadhaar: "",
      childPhoto: "",
      parentPhoto: "",
      parentAadhaar: "",
      residenceProof: "",
      medicalCertificate: "",
    },
  });
  const onSubmit = async (data) => {
    // console.log(data);
    const file = fileRef.current?.files?.[0];
    console.log("file", file);
    const childBirthDoc = getValues("childBirthDoc")[0];
    const childAadhaar = getValues("childAadhaar")[0];
    const childPhoto = getValues("childPhoto")[0];
    const parentPhoto = getValues("parentPhoto")[0];
    const parentAadhaar = getValues("parentAadhaar")[0];
    const residenceProof = getValues("residenceProof")[0];
    const medicalCertificate = getValues("medicalCertificate")[0];

    const documentsKeys = [
      "childBirthDoc",
      "childAadhaar",
      "childPhoto",
      "parentPhoto",
      "parentAadhaar",
      "residenceProof",
      "medicalCertificate",
    ];

    // const childAadhaar = ChildAadhaarRef.current?.files?.[0];
    // const childPhoto = childPhotoRef.current?.files?.[0];
    // const parentPhoto = parentPhotoRef.current?.files?.[0];
    // const parentAadhaar = parentAadhaarRef.current?.files?.[0];
    // const residenceProof = residenceProofRef.current?.files?.[0];
    // const medicalCertificate = medicalCertificateRef.current?.files?.[0];

    const keys = Object.keys(data);
    const result = keys.filter((item) => !documentsKeys.includes(item));
    // console.log(result);

    try {
      const formData = new FormData();
      formData.append("to", "tanmayrane51@gmail.com");
      formData.append("subject", "Admission FormF");
      formData.append("file", childBirthDoc);
      formData.append("file", childPhoto);
      formData.append("file", parentPhoto);
      formData.append("file", parentAadhaar);
      formData.append("file", childAadhaar);
      formData.append("file", residenceProof);
      formData.append("file", medicalCertificate);

      for (const key of result) {
        formData.append(key, data[key]);
      }

      setStatus("loading");
      const url = import.meta.env.VITE_BACKEND_URL;

      const response = await axios.post(`${url}/email`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("response", response);
      if (response.status === 200) {
        setStatus("success");
        // navigate to the pdf page
      }
    } catch (error) {
      console.log("error", error);
      setStatus("error");
    }
  };

  //   const getFiles = (event) => {
  //     const storedFiles = event.target.files[0];
  //     console.log("stored files", storedFiles);
  //   };
  {
    /* <input onChange={getFiles} type="file" /> */
  }

  return (
    <div className=" bg-[#f7eee9]">
      <div className=" relative pb-20 pt-44 px-4 bg-[#f7eee9] flex flex-col justify-center items-center">
        {/* <div className=" absolute top-0 bottom-0 left-0 right-0 ">
          <img
            className=" w-full h-full"
            src="https://www.humanium.org/en/wp-content/uploads/2020/02/pic5-830x554.jpg"
          />
        </div>
        <div className=" absolute top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.75)]" />
        <div className=" absolute top-0 right-0 left-0 bottom-0">
          <Navbar />
        </div> */}
        <p className=" text-black font-bold text-3xl text-center lg:text-5xl z-10">
          Admissions
        </p>
        <p className=" text-gray-600 font-semibold text-lg text-center lg:text-2xl z-10 mt-4 lg:mt-7 lg:w-[60%]">
          Admissions are open throughout the year for families who resonate with
          our joyful, child-led approach to early learning.
        </p>
      </div>
      <div className="  bg-white pt-14 md:pt-20  rounded-t-[32px] lg:rounded-t-[64px] pb-8 relative">
        <img
          className=" absolute -top-[85px] lg:-top-[180px]  left-5 lg:left-10 w-[100px] h-[100px] lg:w-[200px] lg:h-[200px]"
          src={hero}
        />
        <img
          className=" absolute -top-[85px] lg:-top-[170px]  right-10 w-[100px] h-[100px] lg:w-[200px] lg:h-[200px]"
          src={hero1}
        />
        <div className="  md:w-[80%] mx-auto">
          <div className=" flex flex-col md:flex-row justify-center items-center gap-5">
            <div className=" md:w-1/2 text-base lg:text-xl flex flex-col px-5 md:px-0 gap-3  md:gap-6">
              <p className=" text-2xl md:text-4xl font-semibold md:mb-7">
                Here's how to begin:
              </p>
              <p>
                ✻ Reach out to <strong>schedule a meeting</strong> with our team
              </p>
              <p>
                ✻ Explore our unique educational philosophy and thoughtfully
                designed curriculum
              </p>
              <p>
                ✻ Fill in the admission form if it feels like the right fit for
                your family
              </p>
              <p>✻ Join us for an interaction session</p>
              <p>✻ Receive an update on available spots and next steps</p>
            </div>
            <div className=" mt-5 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
              <img className=" w-[70%] aspect-[9/12] rounded-3xl" src={image} />
            </div>
          </div>
          {/* <div className=" flex flex-row-reverse justify-center gap-5 items-center mt-12">
          <div className=" w-1/2 flex flex-col  gap-4">
            <p className=" text-3xl font-semibold mb-7">
              The Settling-In Process at Tulip Tots International
            </p>
            <p>
              We understand that a child's first school experience can feel
              overwhelming for both little ones and their parents. At Tulip
              Tots, we approach this delicate phase with deep sensitivity,
              patience, and trust-building at the heart of it all.
            </p>
            <p className=" -mt-5">Our <strong> settling-in program </strong> is thoughtfully designed to support emotional security through:</p>
            <p>
              ✻ Reach out to <strong>schedule a meeting</strong> with our team
            </p>
            <p>
              ✻  <strong>Gradual, child-led transitions</strong> that allow each child to settle at their own pace
            </p>
            <p>
              ✻ Fill in the admission form if it feels like the right fit for
              your family
            </p>
            <p>✻ Join us for an interaction session</p>
            <p>✻ Receive an update on available spots and next steps</p>
          </div>
          <div className=" w-1/2">
            <img className=" w-full h-full" src={image1} />
          </div>
        </div> */}
        </div>

        <div className=" mt-12 w-[95%] md:w-[80%] mx-auto h-0.5 bg-slate-400" />
      </div>
    </div>
  );
};

// const MyDocument = () => (
//   <Document style={{}}>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.section}>
//         <Text>Tanmay #1</Text>
//       </View>
//       <View style={styles.section}>
//         <Text>Rane #2</Text>
//       </View>
//       <Image
//         src={
//           "https://static-00.iconduck.com/assets.00/checkbox-icon-512x512-kv3qo5ui.png"
//         }
//         style={{
//           height: 15,
//           width: 15,
//         }}
//       />
//     </Page>
//   </Document>
// );

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export default Admission;
