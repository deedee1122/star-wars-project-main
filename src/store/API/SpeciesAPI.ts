import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ISpeciesResponse } from "../../types/interface";
import { ISpecie } from "swapi-ts";

export const SpeciesAPI = createApi({
  reducerPath: "SpeciesAPI",
  tagTypes: ["Species"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api" }),
  endpoints: (builder) => ({
    getAllSpeciesData: builder.query<ISpeciesResponse, { page: number }>({
      query: ({ page }) => `/species?page=${page}`,
      providesTags: ["Species"],
    }),
    getOneSpeciesData: builder.query<ISpecie, { id: string }>({
      query: ({ id }) => `/species/${id}`,
      providesTags: ["Species"],
    }),
  }),
});

export const { useGetAllSpeciesDataQuery, useGetOneSpeciesDataQuery } =
  SpeciesAPI;
