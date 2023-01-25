import React from 'react'
import { View ,Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignInScreen from '../screens/SignInScreen/SignInScreen.js'
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen.js'
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen/ConfirmEmailScreen.js'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen.js'
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen.js'
import newindex from '../screens/HomeScreen'

const Stack = createNativeStackNavigator();

const Navigation =() =>{
  return (
   <NavigationContainer>
        <Stack.Navigator screenOptions={{headderShown: false}}>
            <Stack.Screen name="SignIn"  component={SignInScreen}  />
            <Stack.Screen name="SignUp"  component={SignUpScreen}  />
            <Stack.Screen name="ConfirmEMail"  component={ConfirmEmailScreen}  />
            <Stack.Screen name="ForgotPassword"  component={ForgotPasswordScreen}  />
            <Stack.Screen name="NewPassword"  component={NewPasswordScreen}  />
            <Stack.Screen name="Home"  component={newindex}  />
        </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Navigation