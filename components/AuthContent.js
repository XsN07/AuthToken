import { StyleSheet, Text, View,Alert} from 'react-native'
import React,{useState} from 'react'
import AuthForm from './AuthForm'
import ButtonWhite from './ButtonWhite'
import { useNavigation } from '@react-navigation/native'


export default function AuthContent({isLogin,onAuthenticate}) {
    
     const navigation=useNavigation();
     const [credentialsInvalid, setCredentialsInvalid] = useState({
        email:false,
        password:false,
        confirmPassword:false,
        confirmEmail:false,
    });

     function submitHandler(credentials) {
        console.log(credentials);
        let{confirmEmail,confirmPassword,email,password}=credentials;
         

        email=email.trim();
        password=password.trim();

        const emailIsValid=email.includes('@');
        const passwordIsValid=password.length>=6;
        const emailsAreEqual = email === confirmEmail;
        const passwordsAreEqual = password === confirmPassword;


        if(!emailIsValid || !passwordIsValid || (!isLogin && (!emailsAreEqual || !passwordsAreEqual)))
        {
           Alert.alert("Lütfen girdiğiniz değerleri konrtol edin!")
           setCredentialsInvalid({
            email:!emailIsValid,
            confirmEmail:!emailIsValid || !emailsAreEqual,
            password:!passwordIsValid,
            confirmPassword:!passwordIsValid || !passwordsAreEqual,
           })
           return;
        }
        onAuthenticate({email,password})
        
     }
    function switchScreen(){
     if(isLogin){
        navigation.navigate('Signup')
     }else{
        navigation.navigate('Login')
     }
    }

  return (
    <View style={styles.container}>
     <AuthForm credentialsInvalid={credentialsInvalid} isLogin={isLogin} onSubmit={submitHandler}/>
     <View>
        <ButtonWhite onPress={switchScreen}>
            {isLogin ? "Yeni Kullanıcı Oluştur":"Giriş Yap"}
        </ButtonWhite>
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
       backgroundColor:"#19a2c6",
       marginTop:50,
       marginHorizontal:35,
       padding:15,
       borderRadius:20,
       elevation:4,
       shadowColor:"black",
       shadowOffset:{width:1,height:2},
       shadowOpacity:0.6,
       shadowRadius:4,
    },
})