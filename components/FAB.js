import {  StyleSheet, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'

export default function FAB() {
  return (
    <View style={styles.fabContainer}>
      <Entypo name='plus' size={24} color={'#FFF'}/>
    </View>
  )
}

const styles = StyleSheet.create({
  fabContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width: 45,
        borderRadius: 22.5,
        backgroundColor: '#1EA0E5',
        position: 'absolute',
        right: 20,
        bottom: 20


    }
})