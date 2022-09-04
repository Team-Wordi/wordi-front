import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { Button } from '../../components/button/Button';

import LoginMainImg from '../../assets/imgs/ilust-main@3x.svg';

function LoginScreen() {
  return (
    <LayoutView>
      <TitleView>
        <H1Medium>나만의 <H1Bold>워킹 홀리데이</H1Bold></H1Medium>
        <H1Bold>멘토링 서비스</H1Bold>
        <H1Wordi>워디</H1Wordi>
      </TitleView>
      <LayoutImg />
      <ButtonGroup>
        <Button 
          onPress={() => console.log('onPress')}
          type="default"
          width="100%"
          title="카카오톡 로그인"
          bgColor="#FEE500"
          fontColor="#000000"
        />
        <Button 
          onPress={() => console.log('onPress')}
          type="default"
          width="100%"
          title="카카오톡 로그인"
          bgColor="#FEE500"
          fontColor="#000000"
        />
        <Button 
          onPress={() => console.log('onPress')}
          type="default"
          width="100%"
          title="카카오톡 로그인"
          bgColor="#FEE500"
          fontColor="#000000"
        />
      </ButtonGroup>
    </LayoutView>
  );
}

const LayoutView = styled(View)`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 16px;
`;

const LayoutImg = styled(LoginMainImg)`
  position: absolute;
  top: 170px;
`;

const TitleView = styled(View)`
  flex: 1;
  width: 100%;
  padding-top: 100px;
  padding-left: 32px;
`;

const H1Bold = styled(Text)`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #4C4C4C;
`;

const H1Medium = styled(Text)`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  /* Grey_400 */
  color: #4C4C4C;
`;

const H1Wordi = styled(Text)`
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  /* Brand_Color */
  color: #417FFF;
  padding-top: 18px;
`;

const ButtonGroup = styled.View`
  display: flex;
  flex-direction: column;
  flex: 2;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 96px;
`;

export default LoginScreen;
