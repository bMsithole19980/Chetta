import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Pressable, Dimensions } from 'react-native'
import ChatComponent from '../components/ChatComponent'
import ChatInputComponent from '../components/ChatInputComponent'
import KeyboardComponent from '../components/KeyboardComponent'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'
import MediaPicker from '../components/MediaPicker'
import { Audio } from 'expo-av'

let audioRecording

function ChatScreen() {

  const [showEmoGifBoard, setShowEmoGifBoard] = useState(false);
  const [message, setMessage] = useState('');
  const [showMediaPicker, setShowMediaPicker] = useState(false);
  const [recording, setRecording] = useState();
  const [isPaused, setIsPaused] = useState(false);
  const [recordingTime, setRecordingTime] =useState({hours: 0, minutes: 0, seconds: 0})

  const handleEmoji = (emo) => {
    console.log(emo.emoji);
    setMessage(message => {
      return message += emo.emoji
    })

  }
  const sendMessage = () => {

  }

  const updateTime=(mils)=>{
    console.log(mils);
    const time={
      hours:  Math.floor(mils.durationMillis/ (1000 * 60 * 60)),
      minutes: Math.floor( mils.durationMillis/ (100 * 60)) % 60,
      seconds: Math.floor(mils.durationMillis /100) %60

    }
    setRecordingTime(time);
    console.log(time);
  }

  const pauseRecording=async()=>{
     await audioRecording.pauseAsync();
     setIsPaused(true);
  }
  const stopRecording= async()=>{
    await audioRecording.stopAndUnloadAsync();
    const uri = audioRecording.getURI();
    audioRecording= null
    console.log(uri);
    setIsPaused(false);
    setRecording(false);

  }
  const deleteRecording=async()=>{
    await audioRecording.stopAndUnloadAsync();
    setRecording(false);
    setIsPaused(false);

  }

  const recordAudio = async() => {
    try {
      if (!isPaused) {
        Audio.requestPermissionsAsync()
        const rec = new Audio.Recording();
        await rec.prepareToRecordAsync();
        rec.setOnRecordingStatusUpdate(updateTime)
        // setRecording(rec);
        //setRecording(true);
        audioRecording = rec
        
      }
      await audioRecording.startAsync()
      setIsPaused(false);
      setRecording(true);
    } catch (error) {
      console.log(error);
    }


  }


  useEffect(() => {
    console.log(message);
  }, [message])
  const handleGif = (url) => {
    console.log(url);

  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ChatComponent />
       <MediaPicker isVisible={showMediaPicker}/>


        <View style={styles.input}>
          <ChatInputComponent
            messageText={message}
            setMessageText={(text) => setMessage(text)}
            showEmoGifBoard={(bln) => setShowEmoGifBoard(bln)}
            isBoardVisible={showEmoGifBoard}
            sendMessage={() => sendMessage()}
            recordAudio={() => recordAudio()}
            showMediaPicker={() => setShowMediaPicker(!showMediaPicker)}
            recording={recording}
            recordingPaused={isPaused}
            isPaused={isPaused}
            pauseRecording= {()=>pauseRecording()}
            stopRecording={()=> stopRecording()}
            deleteRecording={()=> deleteRecording()}
            recordingTime={recordingTime}

          />
        </View>

      </View>

      <KeyboardComponent
        isBoardVisible={showEmoGifBoard}
        handleEmoji={(emo) => handleEmoji(emo)}
        handleGif={(url) => handleGif(url)} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#26394D',
    flex: 1,
    overflow: 'hidden',
    paddingBottom: 60

  },
  content: {
    flex: 1,
    paddingBottom: 60,

  },
  input: {
    position: 'absolute',
    bottom: 0,
    width: '100',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  }

})
export default ChatScreen