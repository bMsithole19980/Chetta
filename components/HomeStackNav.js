import { StyleSheet,  View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import ProfileScreen from '../pages/ProfileScreen';
import HomeScreen from '../pages/HomeScreen';

const Tab = createBottomTabNavigator();
const HomeStackNav = () => {
  return (
    
        <Tab.Navigator
    screenOptions={{
     tabBarActiveTintColor: '#FFF',
     tabBarStyle:{
       backgroundColor: '#26394D',
       borderTopColor: '#BABABA'
     }
    }}
     tabBarOption={{
       showLabel: false
     }}>
     <Tab.Screen
     name='Profile'
     component={(props)=> <ProfileScreen  {...props}/>}
     options={{
       tabBarIcon: ({color}) => (
         <Ionicons name='person' size={24} color={color}/>
       )
     }}>
      
     </Tab.Screen>
     <Tab.Screen
     name='Home'
     component={(props)=> <HomeScreen  {...props}/>}
     options={{
       tabBarIcon: ({color}) => (
         <Ionicons name='chatbox' size={24} color={color}/>
       )
     }}>
     </Tab.Screen>
     <Tab.Screen
     name='Favorites'
     component={(props)=> <HomeScreen  {...props}/>}
     options={{
       tabBarIcon: ({color}) => (
         <MaterialIcons name='favorite' size={24} color={color}/>
       )
     }}>
     </Tab.Screen>
   </Tab.Navigator>
   
    
  )
}
const styles= StyleSheet.create({
  container:{
    
  }
})
export default HomeStackNav