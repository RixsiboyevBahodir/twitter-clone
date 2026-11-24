import { apiSlice } from "./apiSlice";

const deletePostApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    deletePost: builder.mutation({
      query: (id: number) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["post", "user"],
    }),
  }),
});

export const { useDeletePostMutation } = deletePostApi;
