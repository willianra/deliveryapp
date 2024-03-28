import React from 'react'
import { Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { RoundenButton } from '../../components/RoundenButton';

export const RegisterScreen = () => {
  return (
        <View style={styles.container}>
              <Image style={styles.imageBackground}
               source={ require('../../../../assets/chef.jpg')}/>
              <View style={styles.logoContainer}>
                  <Image 
                    style={styles.logoImage}
                    source={require('../../../../assets/user_image.png')}/>
                  <Text
                    style={styles.logoText}>SELECCIONA UNA IMAGEN
                  </Text> 
               </View>
               <View style={styles.form}>
                <Text style={styles.formText}>Registrarse</Text>
                <View style={styles.formImput}>
                    <Image
                      style={styles.formIcon}
                      source={require('../../../../assets/user.png')}
                      />
                    <TextInput
                      style={styles.formTextInput}
                      placeholder='nombre '
                      keyboardType='default'
                      />
                 </View>
                <View style={styles.formImput}>
                    <Image
                      style={styles.formIcon}
                      source={require('../../../../assets/my_user.png')}
                      />
                    <TextInput
                      style={styles.formTextInput}
                      placeholder='Apellido '
                      keyboardType='default'
                      />
                 </View>
                 <View style={styles.formImput}>
                    <Image
                      style={styles.formIcon}
                      source={require('../../../../assets/phone.png')}
                      />
                    <TextInput
                      style={styles.formTextInput}
                      placeholder='telefono '
                      keyboardType='numeric'
                      />
        </View>
        
                <View style={styles.formImput}>
                    <Image
                      style={styles.formIcon}
                      source={require('../../../../assets/email.png')}
                      />
                    <TextInput
                      style={styles.formTextInput}
                      placeholder='correo '
                      keyboardType='email-address'
                      />
                </View>
            <View style={styles.formImput}>
              <Image
                style={styles.formIcon}
                source={require('../../../../assets/password.png')}/>
                <TextInput
                  style={styles.formTextInput}
                placeholder='password '
                keyboardType='default'
                secureTextEntry={true} />
            </View>
            <View style={styles.formImput}>
                  <Image
                    style={styles.formIcon}
                    source={require('../../../../assets/confirm_password.png')}/>
                    <TextInput
                      style={styles.formTextInput}
                    placeholder='confirmar password '
                    keyboardType='default'
                    secureTextEntry={true} />
            </View>
        
            <View style={{marginTop:30}}>
              <RoundenButton
                text='ENTRAR'onPress={()=>ToastAndroid.show('HOLA BEBE',ToastAndroid.SHORT)}>
              </RoundenButton>
            </View>
         </View>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
    bottom: '40%'
  },
  form: {
    backgroundColor: 'white',
    width: '100%',
    height: '80%',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding:20
  },
  formText: {
    fontWeight: "bold",
    fontSize:16
  },
  formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginLeft: 15
  },
  formImput: {
    flexDirection: 'row',
    marginTop:  30
  },
  formIcon: {
    width: 25,
    height: 25,
    marginTop:5
  },
  logoContainer: {
    position: "absolute",
    alignSelf: 'center',
    top: '5%',
    alignItems: 'center',
    alignContent:"center"
  },
  logoImage: {
    width: 100,
    height: 100 
  },
  logoText: {
    color: 'white',
    textAlign: "center",
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold'
  },
  formRegister: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:30
  },
  formRegisterText: {
    fontStyle: 'italic',
    color: 'orange',
    borderBottomWidth: 1,
    borderBottomColor:'orange',
    fontWeight: 'bold',
    marginLeft: 10
  }
});


