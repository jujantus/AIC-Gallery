import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {MaterialBottomTabScreenProps} from '@react-navigation/material-bottom-tabs';

import {ArtworkList} from '../../components/artworkList/ArtworkList';
import {Routes} from '../../navigation/Routes';
import {useFavorites} from '../../utils/hooks';
import {style} from './favorites.style';
import {RootTabParamList} from '../../navigation/RootNavigator';

type Props = MaterialBottomTabScreenProps<RootTabParamList, Routes.FAVORITES>;

export const Favorites = ({navigation}: Props): JSX.Element => {
  const favorites = useFavorites();

  return favorites.length ? (
    <ArtworkList navigation={navigation} data={favorites} />
  ) : (
    <View style={style.centeredView}>
      <Text style={style.normalText}>Whoops! You have no favorites saved!</Text>
      <Text style={style.normalText}>
        Try adding some through{' '}
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate(Routes.GALLERY)}>
          <Text style={style.linkText}>the gallery</Text>
        </TouchableWithoutFeedback>
      </Text>
    </View>
  );
};
