import React from 'react';
import { TouchableOpacity, Text, GestureResponderEvent } from 'react-native';
import styled from 'styled-components/native';

interface IconButtonProps {
  title?: string
  icon: React.ReactNode
  onPress: (e: GestureResponderEvent) => void
}

export const IconButton = ({ title, onPress, icon }: IconButtonProps) => (
  <IconButtonView onPress={onPress}>
    <Text>{title}</Text>
    {icon}
  </IconButtonView>
);

const IconButtonView = styled(TouchableOpacity)`
  
`
