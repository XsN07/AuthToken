import { StyleSheet, Text, View,Pressable} from 'react-native'
import React from 'react'

export default function ButtonWhite({children,onPress}) {
    return (
        <Pressable style={({pressed})=> [styles.button,pressed && styles.pressed]} onPress={onPress}>
          <View>
           <Text style={styles.text}>{children}</Text>
          </View>
        </Pressable>
      )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical:12,
        borderRadius:18,
        marginTop:15,
        
    },
    pressed:{
        opacity:0.6,
        
    },
    text:{
        textAlign:"center",
        color:"white",
        fontWeight:"bold",
    },
})