import {StyleSheet} from 'react-native';

import {PRIMARY_FONT} from '../../constants/fonts';
import {COLORS} from '../../constants/colors';

const styles = StyleSheet.create({
  base: {
    fontFamily: PRIMARY_FONT,
    color: COLORS.black,
  },
  H1: {
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 25,
  },
  H2: {
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 21,
  },
  HB1: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 25,
  },
  HB2: {
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 21,
  },
  P1: {
    fontFamily: PRIMARY_FONT,
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 19,
  },
  P2: {
    fontFamily: PRIMARY_FONT,
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 16,
  },
  PB1: {
    fontFamily: PRIMARY_FONT,
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 19,
  },
  PB2: {
    fontFamily: PRIMARY_FONT,
    fontWeight: '700',
    fontSize: 13,
    lineHeight: 16,
  },
  C1: {
    fontFamily: PRIMARY_FONT,
    fontWeight: '500',
    fontSize: 11,
    lineHeight: 14,
  },
  C2: {
    fontFamily: PRIMARY_FONT,
    fontWeight: '500',
    fontSize: 10,
    lineHeight: 12,
  },
  C3: {
    fontFamily: PRIMARY_FONT,
    fontWeight: '500',
    fontSize: 9,
    lineHeight: 11,
  },
  CB1: {
    fontFamily: PRIMARY_FONT,
    fontWeight: '700',
    fontSize: 11,
    lineHeight: 14,
  },
  CB2: {
    fontFamily: PRIMARY_FONT,
    fontWeight: '700',
    fontSize: 10,
    lineHeight: 12,
  },
  CB3: {
    fontFamily: PRIMARY_FONT,
    fontWeight: '500',
    fontSize: 9,
    lineHeight: 11,
  },
});

export default styles;
