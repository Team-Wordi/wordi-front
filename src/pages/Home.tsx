import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const HomeView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const HomeScreen: React.FC = () => {
  return (
    <HomeView>
      <Text>Home Screen</Text>
    </HomeView>
  );
};
export default HomeScreen;
