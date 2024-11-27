import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import AuthContextProvider, { AuthContext } from './store/authcontext';
import HomeScreen from './screens/HomeScreen';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useContext } from 'react';


const Stack = createNativeStackNavigator();


function NormalStack(){
  return(
    <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:"#19a2c6"},headerTintColor:"white",contentStyle:{backgroundColor:"white"}}}>
    <Stack.Screen name="Login" component={LoginScreen} options={{headerTitle:'Kullanıcı Giriş'}} />
    <Stack.Screen name="Signup" component={SignupScreen} options={{headerTitle:'Kullanıcı Kayıt'}} />
    </Stack.Navigator>  
  )
}

function AfterAuthanticatedStack(){
  const authContext=useContext(AuthContext)
  return(
    <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:"#19a2c6"},headerTintColor:"white",contentStyle:{backgroundColor:"white"}}}>
    <Stack.Screen name="Home" component={HomeScreen} 
    options={{headerTitle:'Kullanıcı Kayıt',
    headerRight:()=>(<Pressable style={({pressed})=> pressed && styles.pressed}  onPress={() => {
      console.log("Logout basıldı");
      authContext.logout(); // Logout fonksiyonu çağrılıyor
    }} >
     <MaterialIcons name="logout" size={28} color="white" /></Pressable>)}} />
    </Stack.Navigator>  
  )
}

function Navigation(){

 const authContext=useContext(AuthContext)
  return(
    <NavigationContainer>
      {!authContext.isAuthenticated && <NormalStack/>}
      {authContext.isAuthenticated && <AfterAuthanticatedStack/>}
   </NavigationContainer>
  );
}


export default function App() {
  return (
   <AuthContextProvider>
    <Navigation/>
   </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  pressed:{
    opacity:0.5,
  }
});
