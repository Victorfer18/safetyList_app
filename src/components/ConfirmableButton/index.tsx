import React, { useState, forwardRef } from 'react';
import { View } from 'react-native';
import Button from '@/components/Button';
import ConfirmationModal from '@/components/ConfirmationModal';

type ConfirmableButtonProps = {
    buttonText: string;
    onConfirm: () => void;
};

const ConfirmableButton = forwardRef(({
    buttonText,
    onConfirm,
    modalProps,
    ...buttonProps
}: ConfirmableButtonProps, ref) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleButtonPress = () => {
        setModalVisible(true);
    };

    const handleConfirm = () => {
        setModalVisible(false);
        onConfirm();
    };

    return (
        <View>
            <Button
                ref={ref}
                texto={buttonText}
                onPress={handleButtonPress}
                {...buttonProps}
            />
            <ConfirmationModal
                visible={modalVisible}
                onConfirm={handleConfirm}
                onCancel={() => setModalVisible(false)}
                {...modalProps}
            />
        </View>
    );
});

export default ConfirmableButton;
