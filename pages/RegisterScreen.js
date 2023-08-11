import React from 'react'
import { View, StyleSheet, Text ,TextInput ,Pressable } from 'react-native'


export default function RegisterScreen({navigation}) {
  
  return (
    <View>
      <View style={registerStyles.container}>
      <View style={registerStyles.topContainer}>
        <Text style={registerStyles.appName}>Chatta</Text>
      </View>
      <View style={registerStyles.bottomContainer}>
        <View style={registerStyles.innerContainer}>
          <View style={registerStyles.inputContainer}>
            <TextInput style={registerStyles.textInput} placeholder='Name' />
            <TextInput style={registerStyles.textInput} placeholder='Email' />
            <TextInput style={registerStyles.textInput} placeholder='Password' secureTextEntry />
            <TextInput style={registerStyles.textInput} placeholder='Confirm Password' secureTextEntry  />
          </View>
          <View style={registerStyles.actionContainer}>
            <Pressable style={registerStyles.actionButton} >
              <Text style={registerStyles.signUp}>Sign Up</Text>
            </Pressable>
            <View style={registerStyles.registeredSection}>
              <Text style={registerStyles.registeredText}>Registered?</Text>
              <Text style={registerStyles.signInText} onPress={()=> navigation.navigate('Login')}>Sign In</Text>

            </View>
          </View>
        </View>


      </View>
    </View>
    </View>

  )
}


const registerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26394D',
    width: '100%',
    paddingVertical: 80,
    alignItems: 'center'
  },
  topContainer: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center'
  }
  ,
  bottomContainer: {
    flex: 2.8,
    justifyContent: 'center',
    minHeight: 420
  },
  innerContainer:{
    padding: 20,
    height: 420,
    width: 320,
    backgroundColor: '#FFF',
    borderRadius: 25, 
    
  },
  appName: {
    fontSize: 54,
    fontWeight: 'bold',
    color: '#FFF',
    fontFamily: 'barkshire'
  },
  inputContainer: {
    flex: 3,
    

  },
  textInput: {
    height: 46,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#1EA0E5',
    padding: 10,
    marginVertical: 10

  },
  actionContainer: {
    flex: 1
  },
  actionButton: {
    backgroundColor: '#1EA0E5',
    height: 46,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'

  },
  signUp: {
    color: '#FFF',
    backgroundColor: '#1EA0E5',
    fontSize: 17,
    fontWeight: 'bold'

  },
  registeredSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'

  },
  registeredText: {
    fontSize: 16,

  },
  signInText: {
    color: '#1EA0E5',
    fontWeight: 'bold',
    fontSize: 16,
    padding: 10
  }

})

