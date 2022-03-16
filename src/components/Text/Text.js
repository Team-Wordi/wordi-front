import React from 'react';
import {arrayOf, instanceOf, oneOf, oneOfType, string} from 'prop-types';
import {Text as RNText} from 'react-native';

import styles from './Text.styles';

const H1 = 'H1';
const H2 = 'H2';
const HB1 = 'HB1';
const HB2 = 'HB2';
const P1 = 'P1';
const P2 = 'P2';
const PB1 = 'PB1';
const PB2 = 'PB2';
const C1 = 'C1';
const C2 = 'C2';
const C3 = 'C3';
const CB1 = 'CB1';
const CB2 = 'CB2';
const CB3 = 'CB3';

export const typeShape = oneOf([
  H1,
  H2,
  HB1,
  HB2,
  P1,
  P2,
  PB1,
  PB2,
  C1,
  C2,
  C3,
  CB1,
  CB2,
  CB3,
]);

const Text = ({children = '', as = P1, style, ...restProps}) => (
  <RNText style={[styles.base, styles[as], style]} {...restProps}>
    {children}
  </RNText>
);

Text.propTypes = {
  children: oneOfType([string, instanceOf(Text), instanceOf(RNText)]),
  as: typeShape,
  style: oneOfType([arrayOf(RNText.propTypes.style), RNText.propTypes.style]),
};

export default Text;
