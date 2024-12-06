import React from "react";
import { TouchableOpacity, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { themes } from "../../global/themes";

export function Button({ ...rest }) {
    return (
        <TouchableOpacity {...rest}
            style={styles.button}
            activeOpacity={0.6}
        >
            {rest.loading ? <ActivityIndicator color={'#FFF'} /> : <Text style={[styles.textButton]}>{rest.text}</Text>}
        </TouchableOpacity>
    );
}

export const styles = StyleSheet.create({
    button: {
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.Colors.primary,
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    textButton: {
        fontSize: 16,
        color: '#FFFF',
        fontWeight: 'bold'
    },
})