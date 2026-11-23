import { apiSlice } from "./apiSlice";

interface CreatePostPayload {
  text: string;
  location_name: string;
  media_url?: string;
  media_type?: "image" | "video";
}

const createPostApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPost: builder.mutation<unknown, CreatePostPayload>({
      query: (post) => ({
        url: "posts",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["post", "user"],
    }),
  }),
});

export const { useCreatePostMutation } = createPostApi;
