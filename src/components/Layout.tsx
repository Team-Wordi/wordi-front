import React from 'react';
import styled from 'styled-components/native';
import { Header } from './header/Header';

interface LayoutProps {
  header: React.ReactNode
  children: React.ReactNode
}

export const Layout = ({header, children}: LayoutProps) => {
  return (
    <LayoutView>
      <Header>{header}</Header>
      {children}
    </LayoutView>
  );
};

const LayoutView = styled.View`
  background: #EAF5FF;
`;
