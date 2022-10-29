import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Artwork} from '../../types/artworks';

type FavoritesSlice = {
  data: Artwork[];
  baseImageUrl: string;
};

const initialState: FavoritesSlice = {
  data: [],
  baseImageUrl: '',
};

export const favoritesSlice = createSlice({
  name: 'Favorites',
  initialState,
  reducers: {
    toggleIsFavorite: (state, action: PayloadAction<Artwork>) => {
      const isFavorite = state.data.some(
        artwork => artwork.id === action.payload.id,
      );
      if (isFavorite) {
        return {
          ...state,
          data: state.data.filter(artwork => artwork.id !== action.payload.id),
        };
      }
      return {...state, data: state.data.concat([action.payload])};
    },
    setBaseImageUrl: (state, action: PayloadAction<string>) => {
      return {...state, baseImageUrl: action.payload};
    },
  },
});

export const {toggleIsFavorite, setBaseImageUrl} = favoritesSlice.actions;

export default favoritesSlice.reducer;
