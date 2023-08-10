import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'

export default function ChatComponent() {
    const userID = 'bongza1234';

    const renderItem=(par)=>{
       console.log(par);
    }

    const texts =[
        {
        text : 'Hi there' , userID: userID
        },
        {
        text : 'Hello Buddy , How  are you?' , userID: 'asdfg321654'
        },
        {
        text : 'Good and yourself?, why were you absent today?' , userID: userID
        },
        {
        text : 'Ke Xap , i was sick today' , userID: 'asdfg321654'
        },
        {
        text : 'Hi there' , userID: userID
        }
        ]
  return (
    <View style={styles.container}>
      <FlatList
      data={texts}
      renderItem={renderItem}/>
    </View>
  )
}

const styles = StyleSheet.create({})