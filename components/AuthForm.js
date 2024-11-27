import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import Input from './Input'
import Button from './Button'

export default function AuthForm({isLogin,onSubmit,credentialsInvalid}) {

     const [enteredEmail, setEnteredEmail] = useState("")
     const [enteredConfrimEmail, setEnteredConfrimEmail] = useState("")
     const [enteredPassword, setEnteredPassword] = useState("")
     const [enteredConfrimPassword, setEnteredConfrimPassword] = useState("")
     
     const {
       email:emailIsValid,
       confirmEmail:emailsDontMatch,
       password:passwordIsValid,
       confirmPassword:passwordDontMatch,
     }=credentialsInvalid;
     console.log(emailIsValid,emailsDontMatch,passwordIsValid,passwordDontMatch);

    function submithandler(){
        onSubmit({
           email:enteredEmail,
           confirmEmail:enteredConfrimEmail,
           password:enteredPassword,
           confirmPassword:enteredConfrimPassword,
        });
    }
    function updateInput(inputType,enteredValue) {
        switch(inputType)
        {
            case 'email':
                setEnteredEmail(enteredValue);
                break;
            case "password":    
                 setEnteredPassword(enteredValue)
                 break;
            case "confrimEmail":    
                 setEnteredConfrimEmail(enteredValue)
                 break;
            case "confrimPassword":    
                 setEnteredConfrimPassword(enteredValue)
                 break;     
        }
    }
  return (
    <View>
      <Input 
      label="Email" 
      keyboardType="email-adress" 
      onUpdateValue={updateInput.bind(this,"email")} 
      value={enteredEmail}
      isInvalid={emailIsValid}
      />
      {!isLogin && (
        <Input 
        label="Email Doğrulama" 
        keyboardType="email-adress" 
        onUpdateValue={updateInput.bind(this,"confrimEmail")} 
        value={enteredConfrimEmail}
        isInvalid={emailsDontMatch}
        />
      )}
       <Input 
      label="Şifre" 
      secure 
      onUpdateValue={updateInput.bind(this,"password")} 
      value={enteredPassword}
      isInvalid={passwordIsValid}
      />
      {!isLogin && (
        <Input 
        label="Şifre Doğrulama" 
        secure
        onUpdateValue={updateInput.bind(this,"confrimPassword")} 
        value={enteredConfrimPassword}
        isInvalid={passwordDontMatch}
        />
      )}
      <View style={styles.buttons}>
        <Button onPress={submithandler}>
            {isLogin ? "Giriş Yap": "Kaydol"}
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    buttons:{
        marginTop:18,
    },
})