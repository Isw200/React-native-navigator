import React from 'react';
import {Button, View, Text, TextInput} from 'react-native';
import HomeStyles from './styles/HomeStyles';

function Home({navigation}) {
  return (
    <View style={HomeStyles.homeContainer}>
      <Text>Home Screen</Text>

      <TextInput style={HomeStyles.input} placeholder="Username" />
      <TextInput
        style={HomeStyles.input}
        placeholder="Password"
        secureTextEntry={true}
      />

      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
}

export default Home;
