import {useCallback} from 'react';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../state/store';
import {Artwork, Config} from '../types/artworks';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useFavorites = () => useAppSelector(state => state.favorites.data);

export const useIsFavorite = (id: Artwork['id']) =>
  useAppSelector(state =>
    state.favorites.data.some(artwork => artwork.id === id),
  );

export const useFavoriteCount = () =>
  useAppSelector(state => state.favorites.data.length);

export const useBaseImageUrl = () =>
  useAppSelector(state => state.favorites.baseImageUrl);

export const useGetImageUrl = (baseUrl: Config['iiif_url']) =>
  useCallback(
    (imageId: Artwork['image_id'], isFullSize: boolean = false) =>
      `${baseUrl}/${imageId}/full/${
        isFullSize ? '843,' : '400,'
      }/0/default.jpg`,
    [baseUrl],
  );
