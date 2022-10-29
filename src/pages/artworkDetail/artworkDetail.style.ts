import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {hs, pagePadding, vs} from '../../utils/metrics';

export const style = StyleSheet.create({
  container: {
    backgroundColor: colors.snow,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  textContainer: {
    padding: pagePadding,
  },
  mainRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: vs(12),
  },
  artworkType: {
    fontSize: hs(15),
    fontStyle: 'italic',
    marginBottom: vs(12),
    color: colors.black,
  },
  mainText: {
    fontSize: hs(18),
    marginLeft: hs(10),
    color: colors.black,
  },
  sectionTitle: {
    color: colors.black,
    fontSize: hs(15),
    fontWeight: '600',
    marginBottom: vs(10),
  },
  sectionText: {
    marginBottom: vs(15),
    color: colors.black,
  },
  lineDivider: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
    marginBottom: vs(15),
  },
});
