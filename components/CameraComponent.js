import { Dimensions, Pressable, StyleSheet, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Camera } from 'expo-camera'
import { EvilIcons, MaterialIcons } from '@expo/vector-icons';
const CameraComponent = () => {

  const camera = useRef({closeCam});
  // const [hasPermission, setHasPermission] = useState(false);
  const [picture, setPicture]= useState('');

  useEffect(()=>{
    // (async() =>{
    //   const {status} = await Camera.getCameraPermissionsAsync();
    
    //   setHasPermission(status ==='granted' ? true : false )
    // })
  },[])

  const takePicture =async()=>{
    const options={
      base64: true,
      exif: false,
      quality: 1
    }
    const pic = await camera.current.takePictureAsync(options);
    setPic(pic)
  }
  const sendPicture =()=>{

  }


  if(picture){
    return(
      <View style={styles.imgContainer}>
        <Image 
        source={{uri: "data:image/jpg;base64,"+ picture.base64}}
        style={styles.image}
        />
        <View style={styles.sendCont}>
          <Pressable onPress={() => sendPicture()}>
            <MaterialIcons name='send' size={40} color={'#272727'} style={styles.sendIcon}/>
          </Pressable>
        </View>
      </View>
    )
  }


  return (
    <View style={styles.container}>
      <Camera
        type="back"
        ref={camera}
        style={styles.camera}>
        <Pressable onPress={()=> closeCam()}>
          <EvilIcons 
          name='close' 
          size={24} 
          color='rgb(230, 230, 230' 
          style={styles.closeIcon} />
        </Pressable>

        <View style={styles.bottom}>
          <Pressable onPress={() => takePicture}>
            <View style={styles.capture}>

            </View>
          </Pressable>
          
        </View>

      </Camera>
    </View>
  )
}

export default CameraComponent

const styles = StyleSheet.create({
  container: {
    flex: 1

  },
  camera: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between'
  },
  closeIcon:{
    padding: 10,
  },
  bottom:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100
  },
  capture:{
    borderColor: '#FFF',
    borderWidth: 3,
    width: 60,
    height: 60,
    borderRadius: 30
  },
  imgContainer:{
    flex: 1,
    width: '100%'
  },
  image:{ 
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  sendCont:{
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#FFF',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sendIcon:{
    color: '#272727',
    marginLeft: 5,
  }
})