import React, {useEffect} from 'react';
import {ScrollView, View, Image, Text} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import {style} from './artworkDetail.style';
import {RootStackParamList} from '../../navigation/RootNavigator';
import {Routes} from '../../navigation/Routes';
import {useBaseImageUrl, useGetImageUrl} from '../../utils/hooks';
import {width} from '../../utils/metrics';

type Props = NativeStackScreenProps<RootStackParamList, Routes.ARTWORK_DETAIL>;

export const ArtworkDetail = ({route, navigation}: Props): JSX.Element => {
  const {
    artwork: {
      title,
      artist_title,
      place_of_origin,
      date_display,
      credit_line,
      dimensions,
      artwork_type_title,
      publication_history,
      exhibition_history,
      provenance_text,
      image_id,
      thumbnail,
    },
  } = route.params;

  const {height, width: imageWidth} = thumbnail;

  const verticalScale = height / imageWidth;

  useEffect(() => {
    navigation.setOptions({title});
  }, [navigation, title]);

  const baseImageUrl = useBaseImageUrl();

  const getImageUrl = useGetImageUrl(baseImageUrl);

  const imageUrl = getImageUrl(image_id, true);

  const renderSection = (header: string, body: string) => (
    <>
      <View style={style.lineDivider} />
      <View>
        <Text style={style.sectionTitle}>{header}</Text>
        <Text style={style.sectionText}>{body}</Text>
      </View>
    </>
  );

  return (
    <ScrollView contentContainerStyle={style.container}>
      <View style={{width: width, height: width * verticalScale}}>
        <Image source={{uri: imageUrl}} style={style.image} />
      </View>
      <View style={style.textContainer}>
        {!!artwork_type_title && (
          <Text style={style.artworkType}>{artwork_type_title}</Text>
        )}
        {!!artist_title && (
          <View style={style.mainRow}>
            <Icon name="brush" size={20} />
            <Text style={style.mainText}>{artist_title}</Text>
          </View>
        )}
        {!!place_of_origin && (
          <View style={style.mainRow}>
            <Icon name="ios-location-sharp" size={20} />
            <Text style={style.mainText}>{place_of_origin}</Text>
          </View>
        )}
        {!!date_display && (
          <View style={style.mainRow}>
            <Icon name="ios-hourglass" size={20} />
            <Text style={style.mainText}>{date_display}</Text>
          </View>
        )}
        {!!dimensions && (
          <View style={style.mainRow}>
            <EntypoIcon name="ruler" size={20} />
            <Text style={style.mainText}>{dimensions}</Text>
          </View>
        )}
        {!!credit_line && renderSection('Credit', credit_line)}
        {!!publication_history &&
          renderSection('Publication History', publication_history)}
        {!!exhibition_history &&
          renderSection('Exhibition History', exhibition_history)}
        {!!provenance_text && renderSection('Provenance', provenance_text)}
      </View>
    </ScrollView>
  );
};
