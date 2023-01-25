import React,{useState} from 'react'
import { View,Text,Image,StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form'

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const SignUpScreen =() =>{
  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('');
  const navigation = useNavigation();
 
  const onRegisterPressed =()=>{
    navigation.navigate('ConfirmEMail')
  }
  const onSignInPressed=()=>{
     navigation.navigate('SignIn')
  }
  const onSignUpPressed =()=>{
    console.warn('thnx for signinup')
    navigation.navigate('SignUp')
  }
  const onTermsOfUsePressed =()=>{
    console.warn('Our rules are strict')
  }

  return (
  <ScrollView>
    <View styles ={styles.root}>
     
     <Text style={styles.title}>Create an account</Text>
        <CustomInput  
        name= "username"  
        control={control} 
        placeholder= "Username" 
        rules={{required:'Username is required', 
        minLength: {value:3,message: "password should be minimum 3 words"},
        maxLength: {value:3,message: "password should be maximum 20 words"}}}/>

        <CustomInput 
        name= "email"
        control={control}
        placeholder= "Email" 
        rules={{pattern:  EMAIL_REGEX, message:'Email is invalid'}}
       />

        <CustomInput 
        name= "password"
        control={control}
        placeholder= "Password" 
        rules={{
          required: 'Password is required',
          minLength:{
            value: 5,
            message: 'Passowrd should be atleast 5 characters long'
          }
        }}
        secureTextEntry/>
    
      <CustomInput 
        name= "confirm password"
        control={control}
        placeholder= "Confirm password" 
        rules ={{
           validate: value => value.length < 5 ?true: "password not matched"
        }}
        secureTextEntry/>

    <CustomButton  text="Register" onPress={handleSubmit(onRegisterPressed)}/>
    <Text style={styles.text}> By regsitring you accept to our 
      <Text style={styles.link} onPress={onTermsOfUsePressed}>T&C</Text>
    </Text>

    <CustomButton  
       text="Sign In" 
       onPress={onSignInPressed}
       type ="PRIMARY"/>
    <SocialSignInButtons />
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
export default SignUpScreen