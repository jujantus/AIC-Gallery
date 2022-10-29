import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Artwork, Artworks, Config} from '../types/artworks';
import {BASE_URL} from './constants';

type ArtworksData = {artworks: Artwork[]; iiif_url: Config['iiif_url']};

export const artworksApi = createApi({
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: builder => ({
    artworksByPage: builder.query<ArtworksData, number | void>({
      query: (page = 1) => `artworks?page=${page}&limit=100`,
      transformResponse: (response: Artworks) => ({
        artworks: response.data,
        iiif_url: response.config.iiif_url,
      }),
    }),
  }),
});

export const {useArtworksByPageQuery, useLazyArtworksByPageQuery} = artworksApi;
