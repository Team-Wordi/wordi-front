import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from '../components/drawer/Drawer';
import useUser from '../recoil/selectors/useUser';
import LoginScreen from './login/Login';

const MainScreen = (): JSX.Element => {
  const user = useUser();
  console.log(user)

  return (
    <>
    { user 
      ? <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
      : <LoginScreen />
    }
    </>
  )
}

export default MainScreen;