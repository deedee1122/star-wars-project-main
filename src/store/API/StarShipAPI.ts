import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IStarShipResponse } from "../../types/interface";

export const StarShipAPI = createApi({
  reducerPath: "StarShipAPI",
  tagTypes: ["starships"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api" }),
  endpoints: (builder) => ({
    getAllStarShipData: builder.query<IStarShipResponse, { page: number }>({
      query: ({ page }) => `/starships?page=${page}`,
      providesTags: ["starships"],
    }),
    getOneStarShipData: builder.query<IStarShipResponse, { id: string }>({
      query: ({ id }) => `/starships/${id}`,
      providesTags: ["starships"],
    }),
  }),
});

export const { useGetAllStarShipDataQuery, useGetOneStarShipDataQuery } = StarShipAPI;
