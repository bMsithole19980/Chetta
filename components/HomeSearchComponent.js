import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

const HomeSearchComponent = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchInput} placeholder=' Search'></TextInput>
    </View>
  )
}

export default HomeSearchComponent

const styles = StyleSheet.create({
    container:{
        height:42,
        width: 276,
        backgroundColor: "#FFF",
        borderRadius: 21,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchInput:{
        fontSize:15,
        width: '80%'

    }

})