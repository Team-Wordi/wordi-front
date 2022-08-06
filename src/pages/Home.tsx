import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import BellIcon from '../assets/icons/bell.svg';
import { Layout } from '../components/Layout';
import { IconButton } from '../components/button/IconButton';

const HomeScreen: React.FC = () => {
  return (
    <HomeView>
      <Layout header={
        <Header>
          <IconButton icon={<BellIcon />} onPress={(e) => console.log(e, 'asdf')}/>
        </Header>
      }>
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
