import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {hs, vs} from '../../utils/metrics';

export const style = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.snow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: hs(150),
    height: vs(150),
  },
});
