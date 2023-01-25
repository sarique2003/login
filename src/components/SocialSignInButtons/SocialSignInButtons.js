import React, { useState } from 'react'
import app from'../../firebasesetup.js'
import * as Facebook from 'expo-facebook'
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../CustomButton/CustomButton'


function SocialSignInButtons() {
 const [isLoggedin , setLoggedinStatus] = useState(false);
 const [userData, setUserData] = useState(null);
 const [isImageLoading , setImageLoadStatus] = useState(false)
  const navigation = useNavigation();
    const onSignInGoogle =()=>{
        console.warn('SignIn')
        navigation.navigate("Home")
      }
      const onSignInFacebook = async()=>{
        navigation.navigate("Home")
            const { type, token } = await Facebook.logInWithReadPermissionsAsync('684720909965998', {
              permissions: ['public_profile'],
            });
          if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(
              `https://graph.facebook.com/me?access_token=${token}`);
              console.log("hi");
              console.log(token);
              console.log("hi");
              console.log("hello");
              console.log(response);
              console.log("hello");
      }
    }

      const onSignInContact =()=>{
        navigation.navigate("Home")
      }

  return (
    <>
         <CustomButton 
       text="Sign In With Facebook" 
       onPress={onSignInFacebook} 
       bgColor = {"#776FEE"}
       fgColor= {"4765A9"}/>
   
    <CustomButton  
       text="Sign In With Google" 
       onPress={onSignInGoogle} 
       bgColor = {"#D06161"}
       fgColor= {"black"}/>
    
    <CustomButton  
      text="Sign In With Contact" 
      onPress={onSignInContact} 
      bgColor ="green"
      fgColor= {"black"}/>
    </>
  )
}

export default SocialSignInButtons