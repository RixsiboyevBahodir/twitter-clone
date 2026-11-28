import { skipToken } from "@reduxjs/toolkit/query";
import useAuthStore from "../../../store/authLocalStorage";
import { useUserFollowersQuery } from "../../../apiSlice/user/userFollowersApi";
import UserCard from "../../../components/ui/UserCard";

export default function FollowersUser() {
  const userId = useAuthStore((state) => state.user?.id);
  const { data, isLoading, isError } = useUserFollowersQuery(userId!);

  if (isLoading) return <p>Loading followers...</p>;
  if (isError) return <p>Failed to load followers.</p>;
  if (!data?.length) return <p>No followers yet.</p>;

  return (
    <div className="p-4">
      {data.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
