import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ChatRequest = ({onPress}) => {
    return (
        <View style={styles.centered}>
            <View style={styles.container}>
                <View style={styles.input}>
                    <TextInput placeholder='Email' style={styles.textInput} />
                    <TextInput placeholder='Message' style={styles.textInput} />
                </View>
                <TouchableOpacity style={styles.button} onPress={()=> onPress()}>
                    <Text style={styles.buttonText}>Send Request</Text>
                </TouchableOpacity>
            </View>

        </View>

    )
}

export default ChatRequest

const styles = StyleSheet.create({
    centered:{
       justifyContent: 'center',
       alignItems: 'center',
       flex: 1,
       width: '100%'
    },
    container: {
        width: 320,
        height: 220,
        backgroundColor: "#FFF",
        borderRadius: 25,
        padding: 20,

    },
    input: {
        height: 105,
        justifyContent: 'space-between'
    },
    textInput: {
        height: 46,
        width: 280,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#1EA0E5',
        padding: 10

    },
    button: {
        marginTop: 30,
        backgroundColor: '#1EA0E5',
        justifyContent: 'center',
        alignItems: 'center',
        height: 46,
        borderRadius: 15
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold'

    }


})