import React from 'react';
import styled from 'styled-components/native';
import HomeLogo from '../assets/icons/home.svg';

const LayoutView = styled.View`
  background-color: red;
`;

const Layout: React.FC = ({children}) => {
  return (
    <LayoutView>
      {children}
    </LayoutView>
  );
};

export default Layout;
