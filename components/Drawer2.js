import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

export default function Drawer2({navigation}) {
  return (
    <View>
        <Text>
            Drawer two!
        </Text>
        {/* <TouchableOpacity >
          <LinearGradient colors={['#08d4c4', '#01ab9d']} style={{ color: '#fff'}}>
            <Text >Drawer button</Text>
          </LinearGradient>
          </TouchableOpacity> */}
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 40,
        backgroundColor: 'yellow'
        
    }
})