import React from 'react';
import styled from 'styled-components/native';

export const Header: React.FC = ({ children }) => {
  return (
    <HeaderView>
      {children}
    </HeaderView>
  );
};

const HeaderView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 48px;
  margin-top: 44px;
  background-color: transparent;
`