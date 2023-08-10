import React from 'react'
import {useState} from 'react'
import { View, Text, StyleSheet,Modal, Dimensions, ScrollView, Pressable } from 'react-native'
import ChatListItem from '../components/ChatListItem'
import HomeSearchComponent from '../components/HomeSearchComponent'
import ChatInputComponent from '../components/ChatInputComponent'
import ChatRequest from '../components/ChatRequest'
import FAB from '../components/FAB'
import ChatComponent from '../components/ChatComponent'

export default function () {
    const [isModalVisible, setIsModalVisible]= useState(false)
    return (

        <View style={styles.container}>
             {/*
              <ScrollView
                scrollEnabled={true}
            >
                <ChatListItem />
                <ChatInputComponent />
                <Modal 
                transparent={true}
                visible={isModalVisible}>
                    <ChatRequest onPress={()=>setIsModalVisible(false)} />
                </Modal>
                

            </ScrollView>
            <Pressable onPress={()=>setIsModalVisible(true)}>
                    <FAB/>
                </Pressable>
             */}
             <ChatComponent/>
           

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#26394D',
        flex: 1,
        width: Dimensions.get('window').width

    }

})