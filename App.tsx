import React, { useState } from 'react';
import AWS from 'aws-sdk';
import { StyleSheet, View } from 'react-native';
import { format } from 'date-fns';
import {
    AWS_SECRET_KEY,
    AWS_ACCESS_KEY,
    S3_BUCKET_NAME
} from 'react-native-dotenv';
import Toast from 'react-native-simple-toast';

import TextEditor from './Components/TextEditor/TextEditor';
import UploadButton from './Components/Button/Button';

const logger = console;

const s3 = new AWS.S3({
    accessKeyId: AWS_ACCESS_KEY as string,
    secretAccessKey: AWS_SECRET_KEY as string,
    region: 'us-west-2'
});

const uploadToS3 = (fileContent: string) => async (): Promise<void> => {
    const newFileName = `${format(new Date(), 'yyyy-MM-dd')}.txt`;
    logger.log(`Uploading ${newFileName}`);

    await s3
        .putObject({
            Body: fileContent,
            Bucket: S3_BUCKET_NAME as string,
            Key: newFileName
        })
        .promise();

    Toast.show(`Successfully uploaded ${newFileName}`, 500);
};

export default function App() {
    const [fileContent, setFileContent] = useState('');

    return (
        <View style={styles.container}>
            <TextEditor onChange={setFileContent} />
            <UploadButton onPressFn={uploadToS3(fileContent)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        position: 'relative',
        marginTop: 25,
        justifyContent: 'flex-start',
        backgroundColor: '#ddd',
        height: '100%'
    }
});
