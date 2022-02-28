import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SandBox() {
  return (
   <View style = {styles.container}>
       <Text style={styles.boxone}>one</Text>
       <Text style={styles.boxtwo}>Two</Text>
       <Text style = {styles.boxthree}>Three</Text>
       <Text style = {styles.boxfour}>Four</Text>
   </View>
  )
}
const styles = StyleSheet.create({
container: {
    //flex: 1,
    paddingTop: 40,
    backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
},
boxone: {
    flex: 1,
    padding: 5,
    backgroundColor: 'red'
},
boxtwo: {
    flex: 1,
    padding: 10,
    backgroundColor: 'blue'
},
boxthree: {
    flex: 1,
    padding: 15,
    backgroundColor: 'coral'
},
boxfour: {
    flex: 1,
    padding: 20,
    backgroundColor: 'yellow'
}
})