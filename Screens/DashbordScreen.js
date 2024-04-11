import { signOut } from 'firebase/auth'
import React from 'react'
import { Button, Text, View, Dimensions,StyleSheet } from 'react-native'
import auth from '../Services/FireBaseAuth'

const { width, height } = Dimensions.get('window');

export default function DashbordScreen({ navigation }) {

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                navigation.navigate("Login")
            })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>DashbordScreen</Text>
            <Button onPress={handleLogout} title='Logout' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
});
