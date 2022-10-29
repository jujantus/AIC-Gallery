import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {hs, pagePadding, vs} from '../../utils/metrics';

export const style = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: pagePadding,
  },
  normalText: {
    fontSize: hs(25),
    textAlign: 'center',
    marginBottom: vs(15),
    color: colors.black,
  },
  linkText: {
    color: '#3A5DF8',
  },
});
