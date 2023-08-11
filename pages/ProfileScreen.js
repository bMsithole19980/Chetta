import React from 'react'
import { View, StyleSheet,Text, Image, Pressable ,TextInput } from 'react-native'
import CameraIcon from '../assets/camera-solid.svg'
import profilePicture from '/bongza.jpg'

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.imageBox}>
          <Image style={styles.imgContainer} source={{ uri: profilePicture }} />
          <View style={styles.camContainer}>
            <Image style={styles.camIcon} source={{ uri: CameraIcon }} />
          </View>
        </View>

      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder="Email"/>
            <TextInput style={styles.textInput} placeholder="Name"/>
            <TextInput style={styles.textInput} placeholder="Password" secureTextEntry />
            <TextInput style={styles.textInput} placeholder="Status"/>
          </View>
          <View style={styles.actionContainer}>
            <Pressable style={styles.actionButton}>
              <Text style={styles.saveText}>Save</Text>
            </Pressable>

          </View>

        </View>


      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingVertical: 80,
    alignItems: 'center',
    backgroundColor: '#26394D'
  },
  topContainer: {
    height: 280,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageBox: {

    width: 200,
    height: 200
  },
  imgContainer: {
    height: 200,
    width: 200,
    borderRadius: 100
  },
  Image: {
    width: 200,
    height: 200,
    borderRadius: 100
  },
  camContainer: {
    height: 42,
    width: 42,
    backgroundColor: '#1EA0E5',
    position: 'absolute',
    borderRadius: 21,
    top: 146,
    left: 146,
    justifyContent: 'center',
    alignItems: 'center'
  },
  camIcon: {
    width: 24,
    height: 20
  },
  bottomContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  innerContainer: {
    height:380,
    backgroundColor: '#FFF',
    borderRadius: 25 ,
    padding: 20,
    width:320

  },
  
  inputContainer:{

  },
  textInput:{
    borderRadius: 15,
    borderColor: '#1EA0E5',
    borderWidth: 1,
    padding: 10,
    height: 46 ,
    marginVertical: 10

  },
  actionContainer: {
    height: 60,
    marginTop : 10,
    justifyContent: 'center'
  },
  actionButton:{
   backgroundColor:'#1EA0E5',
   borderRadius:15,
   justifyContent: 'center',
   alignItems: 'center',
   height:46,
   width:280
  },
  saveText:{
   color: '#FFF',
   fontSize:17,
   fontWeight: 'bold'
  }
})