import React from 'react'
import { Controller } from 'react-hook-form'
import { View,Text,TextInput ,StyleSheet} from 'react-native'

const CustomInput =({control,name,rules={},placeholder,secureTextEntry}) =>{
  return (
      <Controller
        control={control}
        name={name}
        rules={{required:true}}
        render={({field:{ value, onChange, onBlur}, fieldState:{error}}) =>(
        <>
        <View style={[styles.container,{borderColor: error?'red': "lightblue"}]}>
        <TextInput 
        value = {value}
        onChangeText={onChange}
        onBlur ={onBlur}
        placeholder= {placeholder}
        style={[styles.input, {}]}
        secureTextEntry ={secureTextEntry}
        />
      </View>
      {error &&(<Text style={{color:'red', alignSelf:'stretch'}}>{error.message || 'Error'}</Text>
      )}
      </>
        )}
    />
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'lightgreen',
        paddingLeft: 30,
        width: '100%',

        borderColor: "lightblue",
        borderWidth:1,
        borderRadius: 5,

        paddingHorizontal:10,
        margin: 5,
    },
    input: {},
})
export default CustomInput