import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62fdcaf56e617f88deaebcea.mockapi.io/',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `contacts`,
    }),
  }),
});

export const { usegetContactsQuery } = contactsApi;
