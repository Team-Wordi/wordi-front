import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import Layout from '../components/Layout';

const RegisteredView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const RegisteredScreen: React.FC = () => {
  return (
    <View>
      <Layout>
        <Text>Registered Screen</Text>
      </Layout>
    </View>
  );
};
export default RegisteredScreen;
