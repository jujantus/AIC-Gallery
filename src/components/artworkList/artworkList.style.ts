import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {pagePadding, vs} from '../../utils/metrics';

export const style = StyleSheet.create({
  separator: {
    height: vs(20),
  },
  listContainer: {
    paddingVertical: vs(50),
    paddingHorizontal: pagePadding,
    backgroundColor: colors.snow,
  },
});
