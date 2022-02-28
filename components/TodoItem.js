import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//import { MaterialIcons } from 'react-native-vector-icons';

export default function TodoItem({item, pressHandler}) {
  return (
    <TouchableOpacity onPress = {() => pressHandler(item.key)}>
      <View style = {styles.item} >
        <MaterialIcons name='delete' size={18} color='#333' />
      <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );s
}
const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1, 
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
    },
    itemText: {
      marginLeft: 10,
    }
})
