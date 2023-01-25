import React,{useState} from 'react'
import { View,Text,Image,StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form'
const ForgotPasswordScreen =() =>{
   const {control, handleSubmit} = useForm()
  const navigation = useNavigation();
 
  const onSendPressed =(data)=>{
    console.warn(data)
    navigation.navigate('NewPassword')
  }
  const SignInPress =()=>{
    navigation.navigate('SignIn')
  }

  return (
  <ScrollView>
    <View styles ={styles.root}>
     <Text style={styles.title}>Reset you password</Text>
        <CustomInput 
          name="username"
          control ={control}
         placeholder= "Username" 
         rules={{
          required: 'Username is required'
       }}
         />


    <CustomButton  text="Send" onPress={handleSubmit(onSendPressed)}/>
    
    <CustomButton  
        text="Back to Signin" 
        onPress={ SignInPress} 
        type="TERTIARY"
        />

    </View>
  </ScrollView>
  )
}

const styles = StyleSheet.create({
  root:{
      alignItems: 'center',
      padding: 10,
  },
  title:{
    fontSize:24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
    marginTop:70,
    textAlign: 'center',
    marginBottom:20,
  },
  text:{
    color:'gray',
    marginVertical:10,
    fontSize: 12,
    marginTop: -18,
    textAlign: 'center',
  },
  link:{
    color: '#FDB075',
    fontSize:12,
  }
})
export default ForgotPasswordScreen