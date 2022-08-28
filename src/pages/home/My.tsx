import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

import { Layout } from '../../components/Layout';

const MyScreen: React.FC = () => {
  return (
    <View>
      <Layout>
        <Text>My Screen</Text>
      </Layout>
    </View>
  );
};

export default MyScreen;
