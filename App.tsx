/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RecoilRoot} from 'recoil';
import BottomTabs from './src/components/Tabs';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
