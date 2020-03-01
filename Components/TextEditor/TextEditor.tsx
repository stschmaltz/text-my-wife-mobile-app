import React from "react";
import { WebViewQuillJS } from "react-native-webview-quilljs";
import { View, StyleSheet } from "react-native";

const onMessageReceived = onChange => message => {
  onChange(message?.payload?.text);
};
const defaultContent = "hey rachel";

const TextEditor = ({ onChange }) => (
  <View style={styles.button}>
    <WebViewQuillJS
      defaultContent={defaultContent}
      backgroundColor={"#FAEBD7"}
      onMessageReceived={onMessageReceived(onChange)}
    />
  </View>
);

const styles = StyleSheet.create({
  button: {
    height: 500,
    flex: 1,
    width: "100%"
  }
});

export default TextEditor;
