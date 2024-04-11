import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';
import auth from '../Services/FireBaseAuth';
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
const { width, height } = Dimensions.get('window');


export default function LoginScreen({ navigation }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")

    const checkIfLoggedin = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigation.navigate("Dashboard")
            }
        })
    }

    useEffect(() => {
        checkIfLoggedin()
    }, [])
    const handleLogin = () => {
        setError('')
        signInWithEmailAndPassword(auth, email, password)
            .then((userDetail) => {
                const user = userDetail.user;
                navigation.navigate("Dashboard")
               
               
            })
            .catch((error) => {
                setError(error.message)
            })
            
    }

    const hadleGotoRegister = () => {
        navigation.navigate("Register")
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder='Email'
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder='Password'
                secureTextEntry
                onChangeText={setPassword}
            />
            <Button title='Login' onPress={handleLogin} />
            {error && <Text style={{ color: "red", marginVertical: 10 }}>Error:{error}</Text>}
            <Text style={styles.loginText} onPress={hadleGotoRegister}>Create an Account? Register here</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    loginText: {
        marginVertical: 10,
        color: 'blue',
    },
});
