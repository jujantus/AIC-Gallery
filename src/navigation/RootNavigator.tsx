import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import {Gallery} from '../pages/gallery/Gallery';
import {Favorites} from '../pages/favorites/Favorites';
import {Routes} from './Routes';
import {colors} from '../theme/colors';
import {ArtworkDetail} from '../pages/artworkDetail/ArtworkDetail';
import {TouchableOpacity} from 'react-native';
import {useFavoriteCount} from '../utils/hooks';
import {Artwork} from '../types/artworks';

export type RootStackParamList = {
  [Routes.HOME]: undefined;
  [Routes.ARTWORK_DETAIL]: {artwork: Artwork};
};

export type RootTabParamList = {
  [Routes.GALLERY]: undefined;
  [Routes.FAVORITES]: undefined;
};

const TabNavigator = () => {
  const Tab = createMaterialBottomTabNavigator<RootTabParamList>();
  const favoriteCount = useFavoriteCount();
  return (
    <Tab.Navigator shifting={true}>
      <Tab.Screen
        name={Routes.GALLERY}
        component={Gallery}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="ios-albums-outline" color={color} size={24} />
          ),
          tabBarColor: colors.green,
        }}
      />
      <Tab.Screen
        name={Routes.FAVORITES}
        component={Favorites}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="ios-heart-outline" color={color} size={24} />
          ),
          tabBarBadge: favoriteCount || undefined,
          tabBarColor: colors.purple,
        }}
      />
    </Tab.Navigator>
  );
};

export const RootNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={Routes.HOME} component={TabNavigator} />
        <Stack.Screen
          name={Routes.ARTWORK_DETAIL}
          component={ArtworkDetail}
          options={({navigation}) => ({
            presentation: 'modal',
            headerShown: true,
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.pop()}>
                <Icon name="ios-close" color={colors.black} size={25} />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
