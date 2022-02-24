import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

export default function Main({navigation}) {
  return (
    <View>
        <Text>
            Main page
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SplashScreen')}>
          <LinearGradient colors={['#08d4c4', '#01ab9d']} >
            <Text style="styles.textsign" >Sign out!</Text>
          </LinearGradient>
          </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 40,
        backgroundColor: 'yellow'
        
    },
    textsign: {
        color: 'white',
    }
})