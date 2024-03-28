import React,{useState} from 'react'
import { Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { RoundenButton } from '../../components/RoundenButton';
import { useNavigation } from '@react-navigation/native';
import {StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel';

export const HomeScreen = () => {
 
  const{email,password}
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    return (
        //columna
        <View style={styles.container}>
          <Image style={styles.imageBackground}
            source={ require('../../../../assets/chef.jpg')}
          />
          <View style={styles.logoContainer}>
            <Image 
              style={styles.logoImage}
              source={require('../../../../assets/logo.png')}
            />
            <Text
              style={styles.logoText}
            > Pedidos 2X1</Text>
          </View>
          <View style={styles.form}>
            <Text style={styles.formText}>Ingresar</Text>
            <View style={styles.formImput}>
              <Image
                style={styles.formIcon}
                source={require('../../../../assets/email.png')}/>
                <TextInput
                  style={styles.formTextInput}
                  placeholder='correo '
                  keyboardType='email-address'
                 value={email}
              onChangeText={text=>setEmail(text)}
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
              secureTextEntry={true}
              value={password.toString()}
              onChangeText={text=>setPassword(text)}
              
              />
          </View>
          {/* boton login  */}
            <View style={{marginTop:30}}>
              <RoundenButton
              text='ENTRAR' onPress={() => {
                console.log('Email:'+email,'Password:'+password)
                }}
    
              >
    
              </RoundenButton>
            </View>
            <View style={styles.formRegister}>
                    <Text>No Tienes Cuenta?</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('RegisterScreen')}>
                         <Text style={styles.formRegisterText}>Registrate</Text>
                    </TouchableOpacity>
            </View>
             
          </View>
        </View>
      );
    } 
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'black',
        
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
        height: '50%',
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
        marginLeft: 15,
        
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
        top: '15%',
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
    

