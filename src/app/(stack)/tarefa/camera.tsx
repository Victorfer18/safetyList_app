import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router";

export default function camera() {
  const local = useLocalSearchParams();
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>;
  } else if (!hasCameraPermission) {
    return (
      <Text>
        Permissão para câmera não concedida. Por favor, altere isso nas
        configurações.
      </Text>
    );
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
        router.replace({ pathname: '/(stack)/tarefa/', params: { photoUri: photo.uri, system_type_id: local.system_type_id, client_id: local.client_id, client_parent: local.client_parent, user_id: local.user_id, select_id: local.select_id, system_id: local.system_id } });
=======
<<<<<<< HEAD
>>>>>>> 84ffa23dd4d5ecbfe712e859f5daa734521eadd1
        router.replace({
          pathname: "/(stack)/tarefa/",
          params: {
            photoUri: photo.uri,
            system_type_id: local.system_type_id,
            client_id: local.client_id,
            client_parent: local.client_parent,
            user_id: local.user_id,
          },
        });
<<<<<<< HEAD
=======
=======
        router.replace({ pathname: '/(stack)/tarefa/', params: { photoUri: photo.uri, system_type_id: local.system_type_id, client_id: local.client_id, client_parent: local.client_parent, user_id: local.user_id, select_id: local.select_id } });
>>>>>>> 03489f0e0a8a789cc2a3fc55de5ccf9ec87f86df
>>>>>>> 05d4b8b61afb22e8880c7bc37c7de2cee1257d3a
>>>>>>> 84ffa23dd4d5ecbfe712e859f5daa734521eadd1
        //router.replace('/(stack)/tarefa/', { photoUri: photo.uri });
        setPhoto(undefined);
      });
    };

    return (
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.preview}
          source={{ uri: "data:image/jpg;base64," + photo.base64 }}
        />

        <Button title="Discard" onPress={() => setPhoto(undefined)} />
        <Button title="Save" onPress={savePhoto} />
    {/* {hasMediaLibraryPermission ? (
        ) : undefined} */}
<<<<<<< HEAD
      </SafeAreaView>
=======
=======
        <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
        <View style={styles.buttonContainer}>
          {hasMediaLibraryPermission && (
            <TouchableOpacity onPress={savePhoto} style={styles.buttonSave}>
              <Ionicons name="save" size={40} color="white" />
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => setPhoto(undefined)} style={styles.buttonDiscard}>
            <Ionicons name="trash-bin" size={40} color="white" />
            <Text style={styles.buttonText}>Descartar</Text>
          </TouchableOpacity>
        </View>
>>>>>>> 03489f0e0a8a789cc2a3fc55de5ccf9ec87f86df
      </SafeAreaView >
>>>>>>> 84ffa23dd4d5ecbfe712e859f5daa734521eadd1
    );
  }

  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View>
        <TouchableOpacity onPress={takePic}>
          <FontAwesome name="camera" size={40} color="white" />
        </TouchableOpacity>
      </View>
      <StatusBar style="dark" />
    </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#fff",
    alignSelf: "flex-end",
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
});
