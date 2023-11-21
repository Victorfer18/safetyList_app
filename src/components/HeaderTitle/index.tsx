import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HeaderProps {
    name: string;
}

const HeaderTitle: React.FC<HeaderProps> = ({ name }) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        backgroundColor: 'rgba(68, 68, 68, 0.5)', // Fundo um pouco transparente
        padding: 10,
        alignItems: 'center',
    },
    headerText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default HeaderTitle;
