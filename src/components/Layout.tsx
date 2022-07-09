import React from 'react';
import styled from 'styled-components/native';

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
