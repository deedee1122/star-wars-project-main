import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPeopleResponse } from "../../types/interface";
import { IPeople } from "swapi-ts";

export const PeopleAPI = createApi({
  reducerPath: "PeopleAPI",
  tagTypes: ["People"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api" }),
  endpoints: (builder) => ({
    getAllPeopleData: builder.query<IPeopleResponse, { page: number }>({
      query: ({ page }) => `/people?page=${page}`,
      providesTags: ["People"],
    }),
    getOnePersonData: builder.query<IPeople, { id: string }>({
      query: ({ id }) => `/people/${id}`,
      providesTags: ["People"],
    }),
  }),
});

export const { useGetAllPeopleDataQuery, useGetOnePersonDataQuery } = PeopleAPI;
