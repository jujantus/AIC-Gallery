import React, {useEffect} from 'react';
import {View} from 'react-native';
import {MaterialBottomTabScreenProps} from '@react-navigation/material-bottom-tabs';
import {useArtworksByPageQuery} from '../../api/artworksApi';
import {DEFAULT_BASE_IMAGE_URL} from '../../api/constants';
import {ArtworkList} from '../../components/artworkList/ArtworkList';
import {setBaseImageUrl} from '../../state/favorites';
import {useAppDispatch} from '../../utils/hooks';
import {RootTabParamList} from '../../navigation/RootNavigator';
import {Routes} from '../../navigation/Routes';
import {ActivityIndicator} from 'react-native-paper';
import {colors} from '../../theme/colors';
import {style} from './gallery.style';

type Props = MaterialBottomTabScreenProps<RootTabParamList, Routes.GALLERY>;

export const Gallery = ({navigation}: Props): JSX.Element => {
  const {data, isLoading} = useArtworksByPageQuery();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setBaseImageUrl(data?.iiif_url || DEFAULT_BASE_IMAGE_URL));
  }, [dispatch, data?.iiif_url]);

  return isLoading ? (
    <View style={style.centeredContainer}>
      <ActivityIndicator color={colors.red} size={'large'} />
    </View>
  ) : (
    <ArtworkList navigation={navigation} data={data?.artworks || []} />
  );
};
