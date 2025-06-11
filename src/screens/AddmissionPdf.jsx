import React from "react";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";

const MyDocument = () => (
  <Document>
    <Page style={styles.page}>
      {/* Main Heading */}
      <Text style={styles.heading}>
        Tulip Tots International – Admission Form
      </Text>

      {/* Divider */}
      <View style={styles.divider} />

      <View style={{ height: 20 }} />

      {/* 1. Child’s Details */}
      <Text style={styles.sectionHeading}>1. Child’s Details</Text>

      {/* Full Name */}
      <View style={styles.item}>
        <Text style={styles.label}>• Full Name:</Text>
        <View>
          <Text style={styles.value}>Naruto</Text>
          {/* <View style={styles.underline} /> */}
        </View>
      </View>
      {/* Nickname */}
      <View style={styles.item}>
        <Text style={styles.label}>• Nickname (if any):</Text>
        <View>
          <Text style={styles.value}>nick name example</Text>
          {/* <View style={styles.underline} /> */}
        </View>
      </View>
      {/* Age */}
      <View style={styles.item}>
        <Text style={styles.label}>• Age (at time of admission):</Text>
        <View>
          <Text style={styles.value}>99</Text>
          {/* <View style={styles.underline} /> */}
        </View>
      </View>
      {/* Gender */}
      <View style={styles.item2}>
        <Text style={styles.label}>• Gender:</Text>
        <View style={styles.checkBoxMainContainer}>
          <View style={styles.value2}>
            <Image
              style={styles.checkBox}
              src={
                "https://amrzbohhxaqtdpalmvoo.supabase.co/storage/v1/object/sign/assets/admissionPdf/checkedBox.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOTQwM2I4My0wMjE0LTRmZWQtOWY5NC04Y2M4NDlmNGIyYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvYWRtaXNzaW9uUGRmL2NoZWNrZWRCb3gucG5nIiwiaWF0IjoxNzQ5NjM1OTk5LCJleHAiOjIwNjQ5OTU5OTl9.zNIu27ip74l_dx07C-aPh8Q4zuUiD8kZQlY8d3e5mdI"
              }
            />
            <Text>Male</Text>
          </View>
          <View style={styles.value2}>
            <Image
              style={styles.checkBox}
              src={
                "https://amrzbohhxaqtdpalmvoo.supabase.co/storage/v1/object/sign/assets/admissionPdf/uncheckBox.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOTQwM2I4My0wMjE0LTRmZWQtOWY5NC04Y2M4NDlmNGIyYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvYWRtaXNzaW9uUGRmL3VuY2hlY2tCb3gucG5nIiwiaWF0IjoxNzQ5NjM2NTE3LCJleHAiOjIwNjQ5OTY1MTd9.4qbS36ym1iTRDeffXXJSmdurVsgoxJG9WMtTV2sRjUA"
              }
            />
            <Text>Female</Text>
          </View>
          <View style={styles.value2}>
            <Image
              style={styles.checkBox}
              src={
                "https://amrzbohhxaqtdpalmvoo.supabase.co/storage/v1/object/sign/assets/admissionPdf/uncheckBox.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOTQwM2I4My0wMjE0LTRmZWQtOWY5NC04Y2M4NDlmNGIyYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvYWRtaXNzaW9uUGRmL3VuY2hlY2tCb3gucG5nIiwiaWF0IjoxNzQ5NjM2NTE3LCJleHAiOjIwNjQ5OTY1MTd9.4qbS36ym1iTRDeffXXJSmdurVsgoxJG9WMtTV2sRjUA"
              }
            />
            <Text>Other</Text>
          </View>
        </View>
      </View>
      {/* Nationality */}
      <View style={styles.item}>
        <Text style={styles.label}>• Nationality:</Text>
        <View>
          <Text style={styles.value}>India</Text>
          {/* <View style={styles.underline} /> */}
        </View>
      </View>
      {/* Mother tongue */}
      <View style={styles.item}>
        <Text style={styles.label}>• Mother Tongue:</Text>
        <View>
          <Text style={styles.value}>Marathi</Text>
          {/* <View style={styles.underline} /> */}
        </View>
      </View>
      {/* Home Language(s) Spoken */}
      <View style={styles.item}>
        <Text style={styles.label}>• Home Language(s) Spoken:</Text>
        <View>
          <Text style={styles.value}>Marathi</Text>
          {/* <View style={styles.underline} /> */}
        </View>
      </View>
      {/* Mother tongue */}
      <View style={styles.item1}>
        <Text style={styles.label}>• Current Address:</Text>
        <View>
          <Text style={styles.value}>
            slks sss dwdwdwdwd dwdwdwdwd wdwdwdwd wdwdwd qsww xwxwxwdwdsxsxs
            dwdwxsxswd wsaxazxawxwcwcw axsxw{" "}
          </Text>
          {/* <View style={styles.underline} /> */}
        </View>
      </View>
    </Page>
  </Document>
);

const AddmissionPdf = () => {
  return (
    <div className=" py-32 lg:pt-44 px-4 bg-[#f7eee9]">
      <p className=" text-black font-bold text-center text-xl md:text-2xl lg:text-3xl tracking-wide">
        Admission Form
      </p>

      <p className=" lg:w-10/12 mx-auto mt-5 lg:mt-8 text-base lg:text-lg text-slate-700 font-semibold text-center">
        Download & print this pdf and bring during the first visit. The
        documents/attachments that are required to while submitting form are
        photographs of child (3 hardcopies), Passport-size photographs of
        parents/guardian (2 hardcopies each),
      </p>

      <div className=" w-10/12 mx-auto">
        <PDFViewer style={{ width: "100%", aspectRatio: 9/10 }}>
          <MyDocument />
        </PDFViewer>
      </div>
    </div>
  );
};

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  //   for tuliptots
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  //   as an hr tag
  divider: {
    height: 1,
    backgroundColor: "#000",
    marginBottom: 15,
  },
  //   numbering subheading
  sectionHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  // container of questions and ans (text)
  item: {
    marginBottom: 6,
    marginLeft: 16,
    flexDirection: "row",
  },
  item1: {
    marginBottom: 6,
    marginLeft: 16,
    flexDirection: "column",
    gap:2,
  },
  label: {
    fontWeight: "bold",
  },
  value: {
    marginBottom: 1,
    marginLeft: 3,
  },

  // container for select options
  item2: {
    marginBottom: 6,
    marginLeft: 16,
    flexDirection: "column",
  },
  checkBox: {
    height: 14,
    width: 14,
  },
  value2: {
    flexDirection: "row",
    gap: 3,
  },
  checkBoxMainContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 2,
  },

  // underline view
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    borderBottomStyle: "solid",
    width: "100%",
    marginBottom: 12,
  },
});

export default AddmissionPdf;
