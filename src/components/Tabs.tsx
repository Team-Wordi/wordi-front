import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/Home';
import MentoringScreen from '../pages/Mentoring';
import RegisteredScreen from '../pages/Registered';
import MyScreen from '../pages/My';
import HomeIcon from '../assets/icons/home.svg';
import MentoringIcon from '../assets/icons/mentoring.svg';
import MyIcon from '../assets/icons/my.svg';
import RegisteredIcon from '../assets/icons/registered.svg';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#417FFF',
        tabBarInactiveTintColor: '#C6C9CE',
        tabBarStyle: {
          position: "absolute",
          height: 90,
          fontSize: 11,
          borderRadius: 40,
          borderColor: '#EAF5FF',
          borderSize: 1,
        },
        tabBarIcon: ({ color }) => {
          if (route.name === '홈') return <HomeIcon width={24} height={24} fill={color} />
          else if (route.name === '멘토링') return <MentoringIcon width={24} height={24} fill={color} />
          else if (route.name === '신청내역') return <RegisteredIcon width={24} height={24} fill={color} />
          else if (route.name === '마이') return <MyIcon width={24} height={24} fill={color} />
        }}
      )}
    >
      <Tab.Screen name="홈" component={HomeScreen} />
      <Tab.Screen name="멘토링" component={MentoringScreen} />
      <Tab.Screen name="신청내역" component={RegisteredScreen} />
      <Tab.Screen name="마이" component={MyScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;