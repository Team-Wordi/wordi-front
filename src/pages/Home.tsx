import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import Layout from '../components/Layout';

const HomeView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const HomeScreen: React.FC = () => {
  return (
    <HomeView>
      <Layout>
        <Text>Home Screen</Text>
      </Layout>
    </HomeView>
  );
};
export default HomeScreen;
