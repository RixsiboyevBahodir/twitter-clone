import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://twitter-clone-backend-mauve.vercel.app/api",
  }),
  tagTypes: ["post", "user"],
  endpoints: () => ({}),
});
