import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

export default function Input({label,keyboardType,onUpdateValue,value,secure,isInvalid}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label,isInvalid && styles.labelInvalid]}>{label}</Text>
      <TextInput style={[styles.input,isInvalid && styles.inputInvalid]} autoCapitalize='none' keyboardType={keyboardType}
       onChangeText={onUpdateValue} value={value}  secureTextEntry={secure}/>    
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer:{
        marginVertical:12,
    },
    label:{
        color:"white",
        marginBottom:5,
    },
    labelInvalid:{
      color:"red",
    },
    input:{
        backgroundColor:"#b1d7df",
        padding:15,
        paddingHorizontal:12,
        borderRadius:20,
        fontSizeİ:16,
    },
    inputInvalid:{
      backgroundColor:"#ff5f55",
    },
})