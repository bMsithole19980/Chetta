import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import {  EvilIcons, Feather, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
const ChatInputComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftView}>
        <MaterialIcons name='emoji-emotions'  size={24} style={styles.emoji}/>
        <TextInput 
        style={styles.textInput}
        placeholder='Type a message'></TextInput>
        <MaterialIcons name='camera-alt' size={24} style={styles.camera}/>
        <FontAwesome name='paperclip'  size={22} color={'#272727'} style={styles.clip}/>
       

      </View>
      <View style={styles.micConatiner}>
      <FontAwesome name='microphone'  size={24} />
      </View>
    </View>
  )
}

export default ChatInputComponent

const styles = StyleSheet.create({
  container:{
    padding: 10,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  leftView:{
    flex: 1,
    height: 42,
    flex:1,
    borderRadius: 21,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    padding: 7,
    paddingHorizontal: 10,
    justifyContent: 'center'

  },
  emoji:{
     color: '#272727',
     marginRight: 10

  },
  textInput:{
    fontSize: 15,
    color: '#4F4F4F',
    flex: 1

  },
  camera:{
    height: 21,
    width: 21,
    marginHorizontal: 10

  },
  clip:{
    height: 21,
    width: 21,
    justifyContent: 'center',
    alignItems: 'center'
  },
  micConatiner:{
    height: 42,
    width: 42,
    borderRadius: 21,
    backgroundColor: '#FFF',
    marginLeft: 10, 
    justifyContent: 'center',
    alignItems: 'center',
       
  },
 
})