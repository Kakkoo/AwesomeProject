import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Dimensions,
  StatusBar
} from 'react-native';
import { AuthContext } from './Context';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';


export default function SignInScreen({navigation}) {

  const [data, setData] = useState({
    username: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true
  });
  const { signIn } = React.useContext(AuthContext);

  const textInputChange = (val) => {
     if( val.length !== 0){
       setData({
         ...data,
         username: val,
         check_textInputChange: true
       });
     } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false
      });
     }
  }
  const handlePasswordChange = (val) => {
     setData({
       ...data,
       password: val
     })
  }
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry 
    });
  }
  const loginHandle = (username, password) => {
signIn(username, password);
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content"/>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View 
        animation="fadeInUpBig"
      style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput placeholder="Your Email" style={styles.textInput} autoCapitalize='none' onChangeText={(val) => textInputChange(val)}/>

          {data.check_textInputChange ? 
          <Animatable.View animation="bounceIn"  >
          <Feather name="check-circle" color="green" size={20} /> 
          </Animatable.View>
          : null }
          
        </View>
        <Text style={[styles.text_footer, {
          marginTop: 35
        }]}>Password</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#05375a" size={20} />
          <TextInput placeholder="Your Password" secureTextEntry={data.secureTextEntry ? true : false} style={styles.textInput} autoCapitalize='none' onChangeText={(val) => handlePasswordChange(val)}/>
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? <Feather name="eye-off" color="grey" size={20} /> : <Feather name="eye" color="grey" size={20} />}
          
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => {loginHandle(data.username, data.password)}}>
          <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.signIn, { color: '#fff'}}>
            <Text style={styles.textSign}>Sign In</Text>
          </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => navigation.navigate('SignUpScreen')}
          style={[styles.signIn, { borderColor: '#009387', borderWidth: 1, marginTop: 15}]}
          >
            <Text style={[styles.textSign, {color: '#009387'}]}>Sign Up</Text>

          </TouchableOpacity>

        </View>
      </Animatable.View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
