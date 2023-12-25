import React, { useState } from 'react';
import { Modal, View, Text, Button, Animated, StyleSheet } from 'react-native';
import { Checkbox } from 'expo-checkbox';

const ConfirmationModal = ({ visible, onConfirm, onCancel, title, message, confirmText, cancelText }) => {
    const [isChecked, setIsChecked] = useState(false);
    const shakeAnimation = new Animated.Value(0);

    const handleConfirm = () => {
        if (!isChecked) {
            Animated.sequence([
                Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
                Animated.timing(shakeAnimation, { toValue: -10, duration: 100, useNativeDriver: true }),
                Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
                Animated.timing(shakeAnimation, { toValue: 0, duration: 100, useNativeDriver: true })
            ]).start();
            return;
        }
        onConfirm();
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onCancel}
        >
            <View style={styles.modalView}>
                <Animated.View style={{ ...styles.modalContent, transform: [{ translateX: shakeAnimation }] }}>
                    {title && <Text style={styles.modalTitle}>{title}</Text>}
                    {message && <Text style={styles.modalMessage}>{message}</Text>}
                    <Checkbox value={isChecked} onValueChange={setIsChecked} />
                    <Button title={cancelText || "Cancelar"} onPress={onCancel} />
                    <Button title={confirmText || "Confirmar"} onPress={handleConfirm} />
                </Animated.View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});

export default ConfirmationModal;
