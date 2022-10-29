import React from 'react';
import {FlatList, View} from 'react-native';
import {Routes} from '../../navigation/Routes';
import {Artwork} from '../../types/artworks';
import {useBaseImageUrl, useGetImageUrl} from '../../utils/hooks';
import {ArtCard} from '../artCard/ArtCard';
import {style} from './artworkList.style';

export const ArtworkList = ({
  data,
  navigation,
}: {
  data: Artwork[];
  navigation: any;
}) => {
  const baseImageUrl = useBaseImageUrl();

  const getImageUrl = useGetImageUrl(baseImageUrl);

  const renderItem = ({item}: {item: Artwork}) => {
    const imageUrl = getImageUrl(item.image_id);
    const goToDetail = (artwork: Artwork) =>
      navigation.navigate(Routes.ARTWORK_DETAIL, {artwork});

    return (
      <ArtCard
        goToDetail={() => goToDetail(item)}
        imageUrl={imageUrl}
        artwork={item}
      />
    );
  };

  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={style.separator} />}
      contentContainerStyle={style.listContainer}
      data={data}
      renderItem={renderItem}
    />
  );
};
