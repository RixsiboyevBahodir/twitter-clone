import React from "react";
import useAuthStore from "../../../store/authLocalStorage";
import { useUserRepostsQuery } from "../../../apiSlice/user/userRepostsApi";
import Post from "../../../components/post/Post";

export default function Reposts() {
  const userId = useAuthStore((state) => state.user?.id);
  const { data, isLoading } = useUserRepostsQuery(userId!);
  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      {data?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
