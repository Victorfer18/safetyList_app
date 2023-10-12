import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import Button from 'components/Button'
import { Link } from "expo-router";


const App = () => {
    const [selectedRadio, setSelectedRadio] = useState(1)
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');

    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={() => setSelectedRadio(1)}>
                <View style={styles.wrapper}>
                    <View style={styles.radio}>
                        {selectedRadio == 1 ? <View style={styles.radioBg}></View> : null}
                    </View>
                    <Text style={styles.radioText}>Consistente</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedRadio(2)}>
                <View style={styles.wrapper}>
                    <View style={styles.radio}>
                        {selectedRadio == 2 ? <View style={styles.radioBg}></View> : null}
                    </View>
                    <Text style={styles.radioText}>Inconsistente</Text>
                </View>
            </TouchableOpacity>
            
            <View style={styles.boxSpace}>
                <Button texto='Tirar Foto' cor='#16be2e' line={20}>
                    <AntDesign name="camerao" size={24} color="white" />
                </Button>
            </View>

            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Observações"
                    value={inputValue1}
                    onChangeText={(text) => setInputValue1(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Ações a serem tomadas"
                    value={inputValue2}
                    onChangeText={(text) => setInputValue2(text)}
                />
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        height: 500,
        flexDirection: "column",
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        margin: 16,
    },

    radioText: {
        fontSize: 16,
        color: 'black',
    },
    radio: {
        width: 24,
        height: 24,
        borderColor: 'black',
        borderRadius: 24,
        borderWidth: 3,
        margin: 8
    },
    wrapper: {
        flexDirection: 'column',
        alignItems: "center",
    },
    radioBg: {
        backgroundColor: 'black',
        height: 12,
        width: 12,
        margin: 3,
        borderRadius: 24,
    },
    boxSpace: {
        margin: 18,
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingLeft: 8,
    },

});

export default App;
