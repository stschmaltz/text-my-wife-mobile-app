import React from 'react';
import {
    WebViewQuillJS,
    WebviewQuillJSMessage
} from 'react-native-webview-quilljs';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const onMessageReceived = onChange => (
    message: WebviewQuillJSMessage
): void => {
    onChange(message?.payload?.text);
};

const TextEditor = ({ onChange }) => (
    <View style={styles.button}>
        <WebViewQuillJS
            backgroundColor="#FAEBD7"
            onMessageReceived={onMessageReceived(onChange)}
        />
    </View>
);

TextEditor.propTypes = {
    onChange: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    button: {
        height: 500,
        flex: 1,
        width: '100%'
    }
});

export default TextEditor;
