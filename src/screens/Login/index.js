import React, { useState } from 'react'
import { Alert, Dimensions, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';

import Logo from '../../assets/logo.png'
import { Input } from "../../components/Input";
import { Button } from '../../components/Button';
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import { themes } from '../../global/themes';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [loading, setLoading] = useState(false);

    async function getLogin() {
        setLoading(true);

        try {
            if (!email || !password) {
                return Alert.alert('Atenção', 'Informe os campos obrigatórios!');
            }


            Alert.alert('Atenção', 'E-mail ou senha invalida!');
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={styles.inner}>
                <View style={styles.boxTop}>
                    <Image source={Logo} style={styles.logo} resizeMode="contain" />
                    <Text style={styles.text}>Bem vindo de volta!</Text>
                </View>
                <View style={styles.boxMid}>
                    <Input
                        title="E-MAIL"
                        value={email}
                        onChangeText={setEmail}
                        IconRight={MaterialIcons}
                        iconRightName="email"
                        onIconRightPress={() => console.log('OLA')}
                    />
                    <Input
                        title="SENHA"
                        value={password}
                        onChangeText={setPassword}
                        IconRight={Octicons}
                        iconRightName={showPassword ? "eye-closed" : "eye"}
                        onIconRightPress={() => setShowPassword(!showPassword)}
                        secureTextEntry={showPassword}
                        multiline={false}
                    />
                </View>
                <View style={styles.boxBottom}>
                    <Button text="ENTRAR" loading={loading} onPress={() => getLogin()} />
                </View>
                <Text style={styles.textBottom}>
                    Não tem conta? <Text style={styles.textBottomCreate}>Crie agora</Text>
                </Text>
            </View>
        </KeyboardAvoidingView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    boxTop: {
        height: Dimensions.get('window').height / 3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 80,
        height: 80,
        marginTop: 40
    },
    text: {
        marginTop: 35,
        fontSize: 18,
        fontWeight: 'bold'
    },
    boxMid: {
        height: Dimensions.get('window').height / 4,
        width: '100%',
        paddingHorizontal: 37,
    },
    boxBottom: {
        height: Dimensions.get('window').height / 3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    textBottom: {
        fontSize: 16,
        color: themes.Colors.gray
    },
    textBottomCreate: {
        fontSize: 16,
        color: themes.Colors.primary
    }
});
