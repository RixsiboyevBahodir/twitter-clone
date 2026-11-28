import useAuthStore from "../../../store/authLocalStorage";
import { useUserFollowingQuery } from "../../../apiSlice/user/userFollowingApi";
import UserCard from "../../../components/ui/UserCard";

export default function FollowingUser() {
  const userId = useAuthStore((state) => state.user?.id);
  const { data, isLoading, isError } = useUserFollowingQuery(userId!);

  if (isLoading) return <p>Loading following...</p>;
  if (isError) return <p>Failed to load following.</p>;
  if (!data?.length) return <p>No following yet.</p>;

  return (
    <div className="p-4">
      {data.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
