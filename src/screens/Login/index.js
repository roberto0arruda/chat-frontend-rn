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
        setLoading(true)

        try {
            if (!email || !password) {
                return Alert.alert('Anteção', 'Informe os campos obrigatórios!')
            }


            Alert.alert('Atenção', 'E-mail ou senha invalida!')
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
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
                        title="ENDEREÇO E-MAIL"
                        value={email}
                        onChangeText={setEmail}
                        IconRigth={MaterialIcons}
                        iconRightName="email"
                        onIconRigthPress={() => console.log('OLA')}
                    />
                    <Input
                        title="SENHA"
                        value={password}
                        onChangeText={setPassword}
                        IconRigth={Octicons}
                        iconRightName={showPassword ? "eye-closed" : "eye"}
                        onIconRigthPress={() => setShowPassword(!showPassword)}
                        secureTextEntry={true}
                        multiline={false}
                    />
                </View>
                <View style={styles.boxBottom}>
                    <Button text="ENTRAR" loading={loading} onPress={() => getLogin()} />
                </View>
                <Text style={styles.textBottom}>Não tem conta? <Text style={styles.textBottomCreate}>Crie agora</Text></Text>
            </View >
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
    boxInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 40,
        borderColor: themes.Colors.lightGray,
        backgroundColor: themes.Colors.bgScreen,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30
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
    input: {
        height: '100%',
        width: '100%',
        borderRadius: 40,
    },
    boxIcon: {
        width: 50,
        height: 50,
        backgroundColor: 'red'
    },
    titleInput: {
        marginLeft: 5,
        color: themes.Colors.gray,
        marginTop: 20
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