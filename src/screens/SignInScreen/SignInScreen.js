import React, { useState } from 'react'
import { View, TextInput, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import logo from "../../../assets/images/logo.jpeg"
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSignInPressed = (data) => {
    console.log(data)
    //validate user
    navigation.navigate('Home');
  }

  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  }
  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  }

  return (
    <ScrollView>
      <View styles={styles.root}>
        <Image source={logo} style={[styles.logo, { height: height * 0.24 }]}
          resizeMode="contain" />

        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{ required: 'Username is required', minLength: 3 }} />

        <CustomInput
          name="password"
          placeholder="Password"
          secureTextEntry
          control={control}
          rules={{ required: 'Password is required', minLength: { value: 3, message: "password should be minimum 3 words" } }} />

        <CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)} />

        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY" />
        <SocialSignInButtons />
        <CustomButton
          text="Dont have an account,Sign Up"
          onPress={onSignUpPressed}
          bgColor={"#e3e3e3"}
          fgColor={"#363636"} />

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    marginTop: 50,
    marginBottom: 10,
    marginLeft: 40,
    width: '70%',
    maxWidth: 500,
    height: 50,
    maxHeight: 200,
  },
})
export default SignInScreen