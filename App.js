import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import HomeScreen from './pages/HomeScreen';
import RegisterScreen from './pages/RegisterScreen';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import LoginScreen from './pages/LoginScreen';
import ProfileScreen from './pages/ProfileScreen';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
export default function App() {
   const Tab = createBottomTabNavigator();
   const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
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
      {/* <Stack.Navigator>
        <Stack.Screen
          name='Login'
          options={{headerShown: false}}>
          {(props) => <LoginScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name='Register'
          options={{headerShown: false}}>
          {(props) => <RegisterScreen {...props} />}
        </Stack.Screen>

      </Stack.Navigator> */}
    </NavigationContainer>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
