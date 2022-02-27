import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'AA', key: '01'},
    {name: 'BB', key: '02'},
    {name: 'CC', key: '03'},
    {name: 'DD', key: '04'},
    {name: 'EE', key: '05'},
    {name: 'FF', key: '06'},
    {name: 'GG', key: '07'},
    {name: 'HH', key: '08'},
    {name: 'JJ', key: '09'},
    {name: 'II', key: '10'},
    {name: 'KK', key: '11'},
    {name: 'LL', key: '12'},
  ]);

  const pressHandler = (key) => {
      //alert({key} + 'clicked');
      setPeople((prevPeople) => {
          return prevPeople.filter(person => person.key != key)
      })
  }
  return (
    <View style={styles.container}>
      <Text>List of people</Text>
<FlatList 
numColumns = {2}
// keyExtractor={item => item.id}

data={people}
renderItem={({item}) => (
    <TouchableOpacity onPress = {() => pressHandler(item.key)}>
<Text style={styles.item}>{item.name}</Text>
</TouchableOpacity>
)}
/>
      {/* <ScrollView>
      {people.map(item => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )
      )}
      </ScrollView> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    color: 'brown',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
      marginTop: 24,
      padding: 30,
      backgroundColor: 'green',
      fontSize: 24,
      marginHorizontal: 10,
  }
});
