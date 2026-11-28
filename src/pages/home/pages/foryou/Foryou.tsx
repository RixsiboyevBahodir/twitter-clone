import { useGetPostsQuery } from "../../../../apiSlice/posts/postsApi";
import Post from "../../../../components/post/Post";

export default function Foryou() {
  const { data } = useGetPostsQuery();

  return (
    <div>
      {data?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
