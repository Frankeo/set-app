import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  Animal,
  BreedListAPIResponse,
  PetAPIResponse,
  searchParams,
} from "./APIResponsesTypes";

export const petApi = createApi({
  reducerPath: "petApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pets-v2.dev-apis.com" }),
  endpoints: (builder) => ({
    getPet: builder.query({
      query: (id: string) => ({ url: "pets", params: { id } }),
      transformResponse: (response: PetAPIResponse) => response.pets[0],
    }),
    getBreeds: builder.query({
      query: (animal: Animal | null) => ({ url: "breeds", params: { animal } }),
      transformResponse: (response: BreedListAPIResponse) => response.breeds,
    }),
    search: builder.query({
      query: ({ animal, location, breed }: searchParams) => ({
        url: "pets",
        params: { animal, location, breed },
      }),
      transformResponse: (response: PetAPIResponse) => response.pets,
    }),
  }),
});

export const { useGetPetQuery, useGetBreedsQuery, useSearchQuery } = petApi;
