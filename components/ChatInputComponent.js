import { Pressable, StyleSheet, TextInput, View, Text, Keyboard } from 'react-native'
import React, { useRef, useState } from 'react'
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { Modal } from 'react-native';
import CameraComponent from './CameraComponent';
import { Camera } from 'expo-camera';

const ChatInputComponent = ({
  showEmoGifBoard, isBoardVisible, messageText ,recordingTime, setMessageText, stopRecording,sendMessage, recordAudio, showMediaPicker, recording, pauseRecording, deleteRecording, isPaused
}) => {

  const inputRef = useRef();
  const [isCamVisible, setIsCamVisisble] = useState(false);
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState(0);
  const { seconds, setSeconds } = useState(5);
  // const [isPaused, setIsPaused] = useState(false);

  const checkCameraPermission = async () => {
    try {
      let status
      status = ((await Camera.getCameraPermissionsAsync())).status
      if (status !== 'granted') {
        status = (await Camera.requestCameraPermissionsAsync()).status
      }
      if (status == 'granted') {
        setIsCamVisisble(true);
      }
    } catch (error) {
      console.error(error);
    }

  }


  return (
    <View style={styles.container}>
      <Modal
        animationType='slide'
        visible={isCamVisible}
      >
        <CameraComponent closeCam={() => setIsCamVisisble(false)} />

      </Modal>

      <View style={styles.leftView}>
        {
          !recording ? (
            <>
              {
                isBoardVisible ? (
                  <Pressable onPress={() => { showEmoGifBoard(false); inputRef.current.focus() }}>
                    <MaterialIcons name='keyboard' size={24} style={styles.emoji} />
                  </Pressable>

                ) : (
                  <Pressable onPress={() => { showEmoGifBoard(true); Keyboard.dismiss() }}>
                    <MaterialIcons name='emoji-emotions' size={24} style={styles.emoji} />
                  </Pressable>
                )
              }



              <TextInput
                ref={inputRef}
                style={styles.textInput}
                placeholder='Type a message'
                onChangeText={(text) => setMessageText(text)}
                value={messageText}
              />
              <Pressable onPress={() => checkCameraPermission()}>
                <MaterialIcons name='camera-alt' size={24} style={styles.camera} />
              </Pressable>
              <Pressable onPress={() => showMediaPicker()}>
                <FontAwesome name='paperclip' size={22} color={'#272727'} style={styles.clip} />
              </Pressable>
            </>

          ) : (
            <View style={styles.recordingCont}>
              {
                isPaused ? (
                    <Pressable onPress={() => recordAudio()}>
                      <MaterialIcons name="fiber-manual-record" size={32 } color="rgb(200, 80, 80)" style={[styles.pauseIcon, {top: -3 }]} />
                    </Pressable>
                  ) : (
                    <Pressable onPress={()=> pauseRecording()}>
                      <Ionicons name='pause' size={24} color={'black'} style={styles.pauseIcon} />
                    </Pressable>
                )
              }
              
              <Text style={styles.text}>{ isPaused ? "Paused" :" Recording......"}</Text>
              <View style={styles.recordingTime}>
                {hours && <Text style={styles.text}>{hours + ':'}</Text>}
                <Text style={styles.text}>{minutes + ':'}</Text>
                <Text style={styles.text}>{seconds}</Text>
              </View>
                <Pressable onPress={()=> stopRecording()}>
                  <Ionicons name="stop" size={24} color="rgb(200, 80, 80)" style={styles.stopIcon} />
                </Pressable>
            
              
              <Pressable onPress={()=> deleteRecording()}>
                <MaterialIcons name="delete" size={24} color="rgb(200, 80, 80)" style={styles.deleteIcon} />
              </Pressable>

            </View>

          )
        }


      </View
      >
      <View style={styles.micConatiner}>
        {
          recording || messageText ? (
            <Pressable onPress={() => sendMessage()}>
              <MaterialIcons name='send' size={24} color={'black'} style={styles.mic} />
            </Pressable>

          ) : (
            <Pressable onPress={() => recordAudio()}>
              <FontAwesome name='microphone' size={24} style={styles.mic} />
            </Pressable>

          )
        }


      </View>
    </View>
  )
}

export default ChatInputComponent

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%'
  },
  leftView: {
    flex: 1,
    height: 42,
    flex: 1,
    borderRadius: 21,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    padding: 7,
    paddingHorizontal: 10,
    justifyContent: 'center'

  },
  emoji: {
    color: '#272727',
    marginRight: 10
  },
  textInput: {
    fontSize: 15,
    color: '#4F4F4F',
    flex: 1
  },
  camera: {
    height: 21,
    width: 21,
    marginLeft: 10,
    marginRight: 20
  },
  clip: {
    height: 21,
    width: 21,
    justifyContent: 'center',
    alignItems: 'center'
  },
  micConatiner: {
    height: 42,
    width: 42,
    borderRadius: 21,
    backgroundColor: '#FFF',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mic: {
    color: '#272727'
  },
  recordingCont: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pauseIcon: {
    marginRight: 10,
    marginLeft: 5
  },
  recordingTime: {
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 5,
  },
  text: {
    color: '#4F4F4F',
  },
  deleteIcon: {
    marginLeft: 5,
    marginRight: 5
  },
  stopIcon:{
    marginLeft: 5,
    // marginRight: 5

  }

})