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
import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';
import { DrawerNavigator } from './src/components/drawer/Drawer';

const App = () => {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
