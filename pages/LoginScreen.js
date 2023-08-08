import React from 'react'
import { useState } from 'react'
import { View, StyleSheet, Text, TextInput, Pressable ,Alert } from 'react-native'
import * as yup from 'yup'

export default function LoginScreen() {
     const [email, setEmail]=useState('');
     const [password, setPassword]= useState('');


    const handleSubmit = () => {
        //validating the input
        const schema = yup.object().shape({
            email: yup.string().email().required(),
            password: yup.string().required().min(8).max(10)
        })
    // 
    schema.isValid({
        email:email,
        password:password
    }).then(valid =>{
        if(!valid){
           Alert.alert('Form error', 'Form has invalid credentials',[{
            text: 'Ok', onPress:()=> console.log('Ok Pressed')
           }])
        }else{
            Alert.alert('')
        }
    })
     }
    

    return (
        <View style={loginStyle.container}>
            <View style={loginStyle.topContainer}>
                <Text style={loginStyle.appName}>Chetta</Text>

            </View>
            <View style={loginStyle.bottomContainer}>
                <View style={loginStyle.innerContainer}>
                    <View style={loginStyle.inputContainer}>
                        <TextInput 
                        style={loginStyle.textInput}
                        onChangeText={(text)=>setEmail(text)} 
                        placeholder='Email' />
                        <TextInput 
                        style={loginStyle.textInput} 
                        onChangeText={(text)=>setPassword(text)}
                        placeholder='Password' secureTextEntry  />
                    </View>
                    <View style={loginStyle.actionContainer}>
                        <Pressable
                        onPress={()=>handleSubmit()} 
                        style={loginStyle.actionButton}>
                            <Text style={loginStyle.Login}>Sign In</Text>
                        </Pressable>
                        <View style={loginStyle.registerSection}>
                            <Text style={loginStyle.registerText}>No account?</Text>
                            <Text style={loginStyle.SignUpText}>Sign Up</Text>

                        </View>
                        <View style={loginStyle.passwordForg}>
                            <Text style={loginStyle.passwordReserText}>Forgot Password</Text>
                        </View>

                    </View>
                </View>

            </View>
        </View>
    )
}

const loginStyle = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingVertical: 80,
        alignItems: 'center',
        backgroundColor: '#26394D'

    },
    topContainer: {
        flex: 1.2,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'

    },
    appName: {
        fontSize: 54,
        fontWeight: 'bold',
        color: '#FFF',
        fontFamily: 'barkshire'
    },
    bottomContainer: {
        flex: 2.8,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerContainer: {
        height: 320,
        backgroundColor: '#FFF',
        borderRadius: 25,
        width: 320,
        padding: 20
    },
    inputContainer: {
        height: 120,
    },
    textInput: {
        height: 46,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#1EA0E5',
        padding: 10,
        marginTop: 10
    },
    actionContainer: {
        height: 140,
        top: 10
    },
    actionButton: {
        backgroundColor: '#1EA0E5',
        height: 46,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    registerSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    registerText: {
        fontSize: 16,
    },
    SignUpText: {
        color: '#1EA0E5',
        fontWeight: 'bold',
        fontSize: 16,
        padding: 10
    },
    passwordForg:{
        alignItems: 'center'
    },
    passwordReserText: {
        color: '#1EA0E5',
        fontSize: 16,
        fontWeight:
            'bold'
    },
    Login: {
        color: '#FFF',
        backgroundColor: '#1EA0E5',
        fontSize: 17,
        fontWeight: 'bold',


    }

})