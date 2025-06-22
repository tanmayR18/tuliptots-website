import React, { useRef, useState } from "react";
import Navbar from "../components/common/Navbar";
import image1 from "../assets/admissionForm.jpg";
import image from "../assets/admission/admission.png";
import hero from "../assets/admission/admissionHeroChild.png";
import hero1 from "../assets/admission/admissionHeroChild1.png";
// import hero2 from "../assets/admission/admissionHeroChild2.png";
import child1 from "../assets/admission/child1.png";
import child2 from "../assets/admission/child2.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
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
    <div className=" bg-[#FFE6CC] font-fredoka">
      <div className=" relative pb-20 pt-44 px-4  flex flex-col justify-center items-center">
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
        <p className=" text-black font-chewy tracking-[3px] text-3xl text-center lg:text-5xl z-10">
          Admissions
        </p>
        <p className=" text-gray-600 font-semibold text-lg text-center lg:text-2xl z-10 mt-4 lg:mt-7 lg:w-[60%]">
          Admissions are open throughout the year for families who resonate with
          our joyful, child-led approach to early learning.
        </p>
      </div>
      <div className="  bg-white pt-14 pb-32 lg:pb-44 md:pt-20  rounded-t-[32px] lg:rounded-t-[64px]  relative">
        <img
          className=" absolute -top-[85px] lg:-top-[150px]  left-5 lg:left-10 w-[100px] h-[100px] lg:w-[200px] lg:h-[170px]"
          src={child1}
        />
        {/* <img
          className=" absolute -top-[85px] lg:-top-[180px]  left-5 lg:left-10 w-[100px] h-[100px] lg:w-[200px] lg:h-[200px]"
          src={hero}
        /> */}
        {/* <img
          className=" absolute -top-[85px] lg:-top-[170px]  right-10 w-[100px] h-[100px] lg:w-[200px] lg:h-[200px]"
          src={hero1}
        /> */}
        <img
          className=" absolute -top-[85px] lg:-top-[140px]  right-10 w-[100px] h-[100px] -rotate-3 lg:w-[250px] lg:h-[170px]"
          src={child2}
        />
        <div className="  md:w-[80%] mx-auto">
          <div className=" flex flex-col md:flex-row-reverse md:justify-evenly justify-center items-center gap-5">
            <div className=" md:w-1/2 text-base lg:text-xl flex flex-col px-5 md:px-0 gap-3  md:gap-6">
              <p className=" text-2xl md:text-4xl font-semibold tracking-wide font-patrickHand md:mb-7">
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
            <div className=" mt-5 md:mt-0 md:w-1/2 flex justify-center md:justify-start">
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
        
        {/* Enquiry Section */}
        <div className="mt-16 md:mt-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50  rounded-3xl p-8 md:p-12 shadow-xl  border border-purple-100">
              <div className="text-center mb-8">
                {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
                  <svg 
                    className="w-8 h-8 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                </div> */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Have Questions?
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  We're here to help! Get in touch with us to learn more about our programs, 
                  schedule a visit, or discuss your child's educational journey.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/enquiry"
                  className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
                >
                  <span className="relative z-10">Enquiry Now</span>
                  <svg 
                    className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13 7l5 5m0 0l-5 5m5-5H6" 
                    />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
                
                {/* <div className="flex items-center gap-2 text-gray-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">Response within 24 hours</span>
                </div> */}
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">Visit Our Campus</h3>
                  <p className="text-sm text-gray-600">Schedule a guided tour</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">Ask Questions</h3>
                  <p className="text-sm text-gray-600">Get detailed answers</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">Begin Journey</h3>
                  <p className="text-sm text-gray-600">Start admission process</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
