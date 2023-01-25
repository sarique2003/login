import React,{useState} from 'react'
import { View,Text,Image,StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const ConfirmEmailScreen =() =>{
  const {control, handleSubmit} = useForm();

  const navigation = useNavigation();
 
  const onConfirmPressed =(data)=>{
    console.warn(data)
    navigation.navigate('Home')
  }
  const onResendPressed =()=>{
    console.warn('new code')
  }
  const SignInPress =()=>{
    console.warn('New signin')
  }

  return (
  <ScrollView>
    <View styles ={styles.root}>
     
     <Text style={styles.title}>Confirm your email</Text>
        <CustomInput 
         name="code"
         control ={control}
         placeholder= "Enter confirmation code" 
         rules={{
            required: 'Confirmation code is required'
         }}
        />


    <CustomButton  text="Confirm" onPress={handleSubmit(onConfirmPressed)}/>
    
    <CustomButton  
        text="Resend Code" 
        onPress={onResendPressed} 
        type="SECONDARY"/>

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
export default ConfirmEmailScreen