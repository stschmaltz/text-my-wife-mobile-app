import React, { useState } from "react";
import AWS from "aws-sdk";
import { StyleSheet, View } from "react-native";
import TextEditor from "./Components/TextEditor/TextEditor";
import UploadButton from "./Components/Button/Button";
import { format, formatDistance, formatRelative, subDays } from "date-fns";
import { S3_SECRET_KEY, S3_ACCESS_KEY } from "react-native-dotenv";
import Toast from "react-native-simple-toast";

const s3 = new AWS.S3({
  accessKeyId: S3_ACCESS_KEY,
  secretAccessKey: S3_SECRET_KEY,
  region: "us-west-2"
});

const uploadToS3 = fileContent => async () => {
  const newFileName = `${format(new Date(), "yyyy-MM-dd")}.txt`;
  console.log(`Uploading ${newFileName}`);
  await s3
    .putObject({
      Body: fileContent,
      Bucket: "rachels-love-bucket",
      Key: newFileName
    })
    .promise();

  Toast.show(`Successfully uploaded ${newFileName}`, 500);
};

export default function App() {
  const [fileContent, setFileContent] = useState("");

  return (
    <View style={styles.container}>
      <TextEditor onChange={setFileContent} />
      <UploadButton onPressFn={uploadToS3(fileContent)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    position: "relative",
    marginTop: 25,
    justifyContent: "flex-start",
    backgroundColor: "#ddd",
    height: "100%"
  }
});
