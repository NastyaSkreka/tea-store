import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Action, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

type RootState = any;

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
  return action.type === HYDRATE;
}

const teaApi = createApi({
  reducerPath: 'teaApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getTeas: builder.query({
      query: () => `teas`,
    }),
  }),
});

export const { useGetTeasQuery } = teaApi;
export default teaApi;
