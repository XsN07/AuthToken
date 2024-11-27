import { StyleSheet, Text, View,Alert } from 'react-native'
import React ,{useState,useContext} from 'react'
import AuthContent from '../components/AuthContent'
import { createUser } from '../util/auth'
import Loading from '../components/Loading';
import { AuthContext } from '../store/authcontext';


async function signUpHandler({email,password}) {
    await createUser(email,password);
}

export default function SignupScreen() {
  
 const [isAuthanticate, setIsAuthanticate] = useState(false);
 const authContext=useContext(AuthContext);

    
async function signUpHandler({email,password}) {
    setIsAuthanticate(true)
    try {
      const token= await createUser(email,password);
      authContext.authenticate(token);
    } 
    catch (error) {
        Alert.alert("Kayıt Olunamadı!","Lütfen Bilgilerinizi Kontrol Ediniz")
    }
    
    setIsAuthanticate(false)
}
if(isAuthanticate){
    return<Loading message="Kullanıcı Oluşturuluyor..."/>
}


    return (
          <AuthContent onAuthenticate={signUpHandler}/>
  )
}

const styles = StyleSheet.create({})