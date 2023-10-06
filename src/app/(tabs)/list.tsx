import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { ButtonGroup } from 'react-native-elements';

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = [
    require('assets/images/unidades/1.png'),
    require('assets/images/unidades/2.png'),
    // ... adicione mais imagens conforme necessário
  ];

  const buttons = ['Imagem 1', 'Imagem 2']; // ... adicione mais labels conforme necessário

  return (
    <View style={styles.container}>
      <Image source={images[selectedIndex]} style={styles.image} />

      <ButtonGroup
        onPress={setSelectedIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={styles.buttonGroup}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  buttonGroup: {
    height: 50,
  },
});
