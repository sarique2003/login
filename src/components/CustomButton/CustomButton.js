import React from 'react'
import { View,Text,StyleSheet, Pressable } from 'react-native'

const CustomButton = ({onPress, text,type="PRIMARY", bgColor,fgColor}) =>{
  return (
    <Pressable onPress={onPress} 
      style ={[
        styles.container, 
        styles[`container_${type}`],
        bgColor ?{backgroundColor: bgColor} :{}
        ]}>
    <Text 
       style={[
         styles.text, 
         styles[`text_${type}`],
         fgColor ? {color: fgColor}: {}
         ]}>
        {text}
    </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    textAlign: 'center',
    borderRadius: 5,
    height: 35,
    marginLeft:35,
    marginRight:35,
  },
 
  container_PRIMARY :{
    backgroundColor: '#3B71F3',
  },

  container_TERTIARY:{
    backgroundColor: 'gray',
  },

  container_SECONDARY:{
    borderColor: '#3B71F3',
    borderWidth: 2,
  },

  text: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    paddingTop: 5,
  },

  text_TERTIARY :{
    color: 'white',
    fontWeight: 'bold'
  },

  text_SECONDARY :{
    color: '#3B71F3',
    fontWeight: 'bold'
  }

})
export default CustomButton