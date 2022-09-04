import React from 'react';
import styled from 'styled-components/native';

interface ButtonProps {
  title: React.ReactNode
  width?: string
  disabled?: boolean
  onPress: () => void

  type?: 'primary' | 'default'
  bgColor?: string
  fontColor?: string
}

export const Button = ({
  title,
  onPress,
  width = '120px', 
  disabled = false,

  type = 'primary',
  bgColor,
  fontColor,
}: ButtonProps) => (
  <ButtonContainer 
    onPress={onPress} 
    type={type}
    disabled={disabled} 
    width={width} 
    bgColor={bgColor}
  >
    <ButtonText fontColor={fontColor}>{title}</ButtonText>
  </ButtonContainer>
);

const ButtonContainer = styled.TouchableOpacity<{ width: string, bgColor?: string, type?: 'primary' | 'default' }>`
  width: ${({ width }) => width};
  height: 52px;
  padding: 16px;
  border-radius: 25px;
  background-color: ${({ disabled, type, bgColor }) => {
    if (type === 'default') return bgColor;
    return disabled ? '#9D9FA4' : '#417FFF';
  }};
`;

const ButtonText = styled.Text<{ fontColor ?: string }>`
  font-size: 16px;
  text-align: center;
  color: ${({ fontColor }) => fontColor ?? '#fff'};
`;
