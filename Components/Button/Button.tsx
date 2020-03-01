import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const UploadButton = ({ onPressFn }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPressFn}>
            <Text style={styles.text}>Upload To S3</Text>
        </TouchableOpacity>
    );
};

UploadButton.propTypes = {
    onPressFn: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: '100%',
        backgroundColor: '#1464db'
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 30
    }
});

export default UploadButton;
