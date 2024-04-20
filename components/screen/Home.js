import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, View, TextInput } from 'react-native';



export default function Home({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleButton = () => {
        if(!email || !password || email.length < 3 || password.length < 3 ) return alert("Required data is missing or not should be less then 3 characters");
        if(email == 'sourabhk@gmail.com' || password == '12344321'){
            setEmail('');
            setPassword('');
            navigation.navigate('Profile', {email})
        }
       return alert('You are not eligible to use this APP!')
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.heading}>
                <Text> Email </Text>
                <TextInput textContentType='emailAddress' value={email} onChangeText={(e) => setEmail(e)} style={styles.textInput} placeholder='Enter Your Email.' />
                <Text> Password </Text>
                <TextInput textContentType='password' secureTextEntry={true} value={password} onChangeText={(e) => setPassword(e)} style={styles.textInput} placeholder='Enter Your Password.' />
                <TouchableOpacity style={[styles.button, { backgroundColor: '#90EE90' }]} onPress={handleButton}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: "black",
        fontSize: 16,
        textAlign: "center",
        fontWeight:"bold",
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 12,
        marginVertical: 7,
        width: 200
    }
});
