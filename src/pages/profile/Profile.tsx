import { skipToken } from "@reduxjs/toolkit/query";
import { useGetMyProfileQuery } from "../../apiSlice/profileApi";
import useAuthStore from "../../store/authLocalStorage";
import { FaUserCircle } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { ProfileModal } from "./components/ProfileModal";
import { NavLink, Outlet } from "react-router-dom";

const UZ_MONTHS = [
  "yanvar",
  "fevral",
  "mart",
  "aprel",
  "may",
  "iyun",
  "iyul",
  "avgust",
  "sentabr",
  "oktabr",
  "noyabr",
  "dekabr",
];

export default function Profile() {
  const accessToken = useAuthStore((state) => state.token?.access_token);
  const { data, isLoading, isError } = useGetMyProfileQuery(
    accessToken ? undefined : skipToken,
  );

  if (!accessToken) return <div>Please log in to view your profile.</div>;
  if (isLoading) return <div>Loading profile...</div>;
  if (isError) return <div>Failed to load profile.</div>;

  let createdData = "";
  if (data?.created_at) {
    const createdAt = new Date(data.created_at);
    const month = UZ_MONTHS[createdAt.getMonth()];
    if (!Number.isNaN(createdAt.getTime()) && month) {
      createdData = `${createdAt.getFullYear()}-yil ${createdAt.getDate()}-${month}`;
    }
  }

  return (
    <div>
      <div>
        <div className="py-2 pl-10">
          <div className="flex items-center gap-2">
            <p className="text-xl font-semibold">{data?.name}</p>
            {data?.is_verified ? (
              <MdVerified className="text-blue-500 text-xl" />
            ) : (
              ""
            )}
          </div>
          <p className="text-gray-600 text-[15px]">{data?.posts_count} posts</p>
        </div>
        <div className="bg-gray-400 w-full h-50 relative p-4">
          <FaUserCircle className="text-[150px]  text-gray-700 border-3 absolute -bottom-15 border-white rounded-[50%]" />
          <ProfileModal profile={data} />
        </div>
        <div className="p-4">
          <div className="pt-15 flex items-center gap-7">
            <p className="text-[20px] font-semibold text-black">{data?.name}</p>
            <button className="flex items-center gap-1 border border-gray-400 px-3 rounded-2xl font-medium cursor-pointer">
              <MdVerified className="text-blue-500" /> Get verified
            </button>
          </div>
          <p className="text-[15px] text-gray-600">@{data?.username}</p>
          <div className="flex items-center gap-2 py-3">
            <IoCalendarOutline />
            <p className="text-[15px] text-gray-600">{createdData}</p>
          </div>
          <div className="flex gap-7">
            <div className="flex items-center gap-1">
              <p className="font-semibold">{data?.following_count}</p>
              <p className="text-gray-600 text-[14px]">Following</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="font-semibold">{data?.followers_count}</p>
              <p className="text-gray-600 text-[14px]">Followers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around">
        <NavLink to={"/profile/posts"} end>
          Posts
        </NavLink>
        <NavLink to={"/profile/reposts"} end>
          Reposts
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
