import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegisterScreen from './pages/RegisterScreen';
import LoginScreen from './pages/LoginScreen';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackNav from './components/HomeStackNav';
import ChatScreen from './pages/ChatScreen';
export default function App() {
   
   const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      
       <Stack.Navigator
       initialRouteName='HomeStackNav'
       >
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
        <Stack.Screen
          name='HomeStackNav'
          options={{headerShown: false}}>
          {(props) => <HomeStackNav {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name='Chat'
          options={{headerShown: false}}>
          {(props) => <ChatScreen {...props} />}
        </Stack.Screen>

      </Stack.Navigator> 
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
