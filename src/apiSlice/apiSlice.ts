import {
  createApi,
  fetchBaseQuery,
  type BaseQueryFn,
} from "@reduxjs/toolkit/query";
import useAuthStore from "../store/authLocalStorage";

const rawBaseQuery = fetchBaseQuery({
  baseUrl: "https://twitter-clone-backend-mauve.vercel.app/api",
  prepareHeaders: (headers) => {
    const token = useAuthStore.getState().token;
    if (token?.access_token) {
      headers.set("Authorization", `Bearer ${token.access_token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<any> = async (
  args,
  api,
  extraOptions,
) => {
  let result = await rawBaseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const currentRefreshToken = useAuthStore.getState().token?.refresh_token;

    if (currentRefreshToken) {
      const refreshResult = await rawBaseQuery(
        {
          url: "/auth/refresh",
          method: "POST",
          body: { refresh_token: currentRefreshToken },
        },
        api,
        extraOptions,
      );

      if (refreshResult.data) {
        const newAccessToken = (
          refreshResult.data as { accaccess_token: string }
        ).accaccess_token;

        const currentUser = useAuthStore.getState().user;

        useAuthStore.getState().setCredentials({
          token: {
            access_token: newAccessToken,
            refresh_token: currentRefreshToken,
          },
          user: currentUser!,
        });

        result = await rawBaseQuery(args, api, extraOptions);
      } else {
        useAuthStore.getState().logout();
        window.location.href = "/auth/login";
      }
    } else {
      useAuthStore.getState().logout();
      window.location.href = "/auth/login";
    }
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["post", "user"],
  endpoints: () => ({}),
});
