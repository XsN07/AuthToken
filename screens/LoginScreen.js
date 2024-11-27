import { StyleSheet, Text, View,Alert } from 'react-native';
import React,{useState,useContext} from 'react'
import AuthContent from '../components/AuthContent'
import Loading from '../components/Loading';
import { login} from '../util/auth';
import { AuthContext } from '../store/authcontext';


export default function LoginScreen() {
  
const [isAuthanticate, setIsAuthanticate] = useState(false);
const authContext=useContext(AuthContext);

    
async function loginHandler({email,password}) {
    setIsAuthanticate(true)
    try {
      const token=await login(email,password);
      authContext.authenticate(token);
    } catch (error) {
      Alert.alert("Giriş Yapılamadı!","Lütfen Bilgilerinizi Kontrol Ediniz")
    }
   
    setIsAuthanticate(false)
}
if(isAuthanticate){
    return<Loading message="Kullanıcı Giriş Yapıyor"/>
}
   
  
  return (
    <AuthContent isLogin  onAuthenticate={loginHandler}/>
  )
}

const styles = StyleSheet.create({})