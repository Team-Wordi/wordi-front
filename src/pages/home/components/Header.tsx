import React from 'react';
import styled from 'styled-components/native';

const HeaderView = styled.View`
  display: flex;
  align-items: flex-end;
`

interface HeaderProps {
  children: JSX.Element
}

const Header = ({children}: HeaderProps) => {
return (
  <HeaderView>
    {children}
  </HeaderView>
)
}

export default Header;