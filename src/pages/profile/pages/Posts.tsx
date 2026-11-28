import useAuthStore from "../../../store/authLocalStorage";
import { useUserPostsQuery } from "../../../apiSlice/user/userPostsAPI";
import Post from "../../../components/post/Post";

export default function Posts() {
  const userId = useAuthStore((state) => state.user?.id);
  const { data, isLoading } = useUserPostsQuery(userId!);
  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      {data?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
