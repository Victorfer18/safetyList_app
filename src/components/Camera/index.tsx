import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const CameraComponent = ({ onClose, onSave }) => {
    let cameraRef = useRef();
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [photo, setPhoto] = useState(null);

    useEffect(() => {
        (async () => {
            const cameraPermission = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraPermission.status === 'granted');
        })();
    }, []);

    if (hasCameraPermission === null) {
        return <Text>Requesting permissions...</Text>;
    }

    if (!hasCameraPermission) {
        return <Text>No access to camera</Text>;
    }

    const takePicture = async () => {
        if (!cameraRef.current) return;
        const options = { quality: 0.5, base64: true, exif: false };
        let newPhoto = await cameraRef.current.takePictureAsync(options);
        setPhoto(newPhoto);
    };

    const savePhoto = () => {
        if (photo) {
            MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
                onSave(photo.uri);
                setPhoto(null);
            });
        }
    };

    return (
        <View style={styles.container}>
            {photo ? (
                <View style={styles.previewContainer}>
                    <Image style={styles.preview} source={{ uri: photo.uri }} />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={savePhoto} style={styles.button}>
                            <Ionicons name="save" size={40} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setPhoto(null)} style={styles.button}>
                            <Ionicons name="trash-bin" size={40} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <Camera style={styles.camera} ref={cameraRef}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={takePicture}>
                            <FontAwesome name="camera" size={40} color="white" />
                        </TouchableOpacity>
                    </View>
                </Camera>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    previewContainer: {
        flex: 1,
    },
    preview: {
        flex: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
    },
    button: {
        margin: 10,
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 20,
    },
});

export default CameraComponent;
