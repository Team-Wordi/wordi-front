import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import Layout from '../../components/Layout';
import Header from './components/Header';

const HomeScreen: React.FC = () => {
  return (
    <View>
      <Header>
        <Text>header</Text>
      </Header>
      <Layout>
        <Text>Home Screen</Text>
      </Layout>
    </View>
  );
};
export default HomeScreen;
