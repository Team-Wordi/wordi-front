import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

import { Layout } from '../../components/Layout';

const HomeScreen: React.FC = () => {
  return (
    <HomeView>
      <Layout header={<Header />}>
        <Text>Home Screen</Text>
      </Layout>
    </HomeView>
  );
};

const HomeView = styled.View`
`;

const Header = styled.View`
  margin-right: 16px;
  margin-left: auto;
`;

export default HomeScreen;
