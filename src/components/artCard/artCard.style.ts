import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {hs, vs} from '../../utils/metrics';

export const style = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: vs(200),
    width: '100%',
    backgroundColor: colors.navajoWhite,
    borderColor: colors.black,
    borderWidth: hs(2),
    padding: hs(5),
    borderRadius: hs(10),
  },
  cardImage: {
    width: '50%',
    resizeMode: 'contain',
  },
  pieceInfoContainer: {
    width: '50%',
    justifyContent: 'space-between',
    padding: vs(10),
    borderLeftWidth: hs(1),
    borderLeftColor: colors.black,
    borderRadius: hs(7),
  },
  title: {
    marginRight: hs(30),
    color: colors.black,
  },
  text: {
    color: colors.black,
  },
  centeredRow: {flexDirection: 'row', alignItems: 'center'},
  heartContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 0,
    top: 0,
    width: hs(35),
    height: vs(35),
  },
});
