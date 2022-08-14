import React from 'react';
import styled from 'styled-components/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Drawer as MuiDrawer } from 'react-native-paper';

import BellIcon from '../../assets/icons/bell.svg';
import { TabNavigator } from '../Tabs';

const DrawerContent = () => {
  const [active, setActive] = React.useState('');

  return (
    <MuiDrawer.Section title="Some title">
      <MuiDrawer.Item
        label="First Item"
        active={active === 'first'}
        onPress={() => setActive('first')}
      />
      <MuiDrawer.Item
        label="Second Item"
        active={active === 'second'}
        onPress={() => setActive('second')}
      />
    </MuiDrawer.Section>
  );
};

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
      drawerContent={() => <DrawerContent />} 
      screenOptions={({navigation}) => ({
        headerTransparent: true,
        headerTitle: '',
        drawerStyle: {
          backgroundColor: 'white',
          zIndex: 100
        },
        drawerPosition: 'right',
        headerLeft: () => null,
        headerRight: () => <DrawerIcon onPress={navigation.toggleDrawer} />
      })}
    >
      <Drawer.Screen name="Tab" component={TabNavigator} />
    </Drawer.Navigator>
  )
 }

 const DrawerIcon = styled(BellIcon)`
  margin-right: 16px;
 `