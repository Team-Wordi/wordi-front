import React from 'react';
import {View, Text, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type LoginScreenProps = {
  Login: undefined;
  Home: undefined;
};

type Props = NativeStackScreenProps<LoginScreenProps, 'Login'>;

function LoginScreen({navigation}: Props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default LoginScreen;
