import { skipToken } from "@reduxjs/toolkit/query";
import { useGetMyProfileQuery } from "../../../apiSlice/profileApi";
import useAuthStore from "../../../store/authLocalStorage";
import type { PostResponse } from "../../../apiSlice/postsApi";
import Post from "../../../components/post/Post";

export default function Posts() {
  const accessToken = useAuthStore((state) => state.token?.access_token);

  const { data, isLoading } = useGetMyProfileQuery(
    accessToken ? undefined : skipToken,
  );

  if (isLoading) return <p>Loading....</p>;

  const posts: PostResponse[] = Array.isArray(data?.posts)
    ? data.posts
    : data?.posts
      ? [data?.posts]
      : [];

  console.log(data);

  return (
    <div>
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
