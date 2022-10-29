import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {style} from './artCard.style';
import Icon from 'react-native-vector-icons/Ionicons';
import {Artwork} from '../../types/artworks';
import {useAppDispatch, useIsFavorite} from '../../utils/hooks';
import {toggleIsFavorite} from '../../state/favorites';
import {colors} from '../../theme/colors';

export const ArtCard = ({
  imageUrl,
  artwork,
  goToDetail,
}: {
  imageUrl: string;
  artwork: Artwork;
  goToDetail: () => void;
}) => {
  const dispatch = useAppDispatch();
  const isFavorite = useIsFavorite(artwork.id);

  return (
    <TouchableWithoutFeedback onPress={goToDetail}>
      <View style={style.cardContainer}>
        <Image source={{uri: imageUrl}} style={style.cardImage} />
        <View style={style.pieceInfoContainer}>
          <Text style={style.title}>{artwork.title}</Text>
          <View style={style.centeredRow}>
            <Icon name="ios-hourglass" size={15} />
            <Text style={style.text}>{artwork.date_display}</Text>
          </View>

          <View style={style.centeredRow}>
            <Icon name="ios-location-sharp" size={15} />
            <Text style={style.text}>{artwork.place_of_origin}</Text>
          </View>
        </View>

        <View style={style.heartContainer}>
          <TouchableOpacity onPress={() => dispatch(toggleIsFavorite(artwork))}>
            {isFavorite ? (
              <Icon name="ios-heart" size={30} color={colors.red} />
            ) : (
              <Icon name="ios-heart-outline" size={30} color={colors.black} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
