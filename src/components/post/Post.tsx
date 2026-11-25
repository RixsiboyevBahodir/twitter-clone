import { FaRegBookmark, FaRegComment, FaUserCircle } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { LuRepeat2 } from "react-icons/lu";
import { MdBarChart, MdVerified } from "react-icons/md";
import { RiShare2Line } from "react-icons/ri";
import type { PostResponse } from "../../apiSlice/postsApi";
import PostDropdownMenu from "./PostDropdownMenu";
import { usePostsUnlikeMutation } from "../../apiSlice/postsUnlikeApi";
import { usePostsLikesGetQuery } from "../../apiSlice/postsLikesGetApi";

interface IPostProps {
  post: PostResponse;
}

export default function Post({ post }: IPostProps) {
  const isVideo = post.media_type?.startsWith("video") ?? false;

  const [postUnlikeId, { isLoading: isUnlikeing }] = usePostsUnlikeMutation();
  const [refresh] = usePostsLikesGetQuery(id);

  const hendleLike = (id) => {

  };

  return (
    <div className="flex gap-2 p-4 border-b hover:bg-gray-50 transition-all duration-200 cursor-pointer">
      {post.avatar ? (
        <img
          src={post.avatar}
          alt=""
          className="size-10 shrink-0 rounded-full object-cover"
        />
      ) : (
        <FaUserCircle className="shrink-0 text-4xl" />
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-1">
            <p className="text-[14px] font-semibold">{post.username}</p>
            {post.is_verified ? (
              <MdVerified className="text-blue-500 text-[15px]" />
            ) : null}
            <p className="font-light text-[13px]">@{post.username}</p>
          </div>
          <PostDropdownMenu id={post.id} />
        </div>
        <p className="text-[14px] text-[#444] font-redaction whitespace-pre-line">
          {post.text}
        </p>
        {post.media_url &&
          (isVideo ? (
            <video
              src={post.media_url}
              controls
              className="mt-2 max-h-96 w-full rounded-2xl bg-black object-contain"
            />
          ) : (
            <img
              src={post.media_url}
              alt={`Post by ${post.username}`}
              className="mt-2 w-full rounded-xl border-2 border-gray-500 object-cover"
            />
          ))}
        <div className="flex justify-between pt-3 text-[#444]">
          <button className="flex items-center gap-2 hover:text-blue-500 cursor-pointer transition-all duration-200">
            <FaRegComment className="text-[16px]" />
            <span className="text-[13px]">{post.comments_count}</span>
          </button>
          <button className="flex items-center gap-2 hover:text-green-500 cursor-pointer transition-all duration-200">
            <LuRepeat2 className="text-[19px]" />
            <span className="text-[13px]">{post.reposts_count}</span>
          </button>
          <button
            className="flex items-center gap-2 hover:text-red-500 cursor-pointer transition-all duration-200"
            onClick={() => hendleLike(post.id)}
          >
            <FiHeart className="text-[16px]" />
            <span className="text-[13px]">{post.likes_count}</span>
          </button>
          <button className="flex items-center gap-2 hover:text-blue-500 cursor-pointer transition-all duration-200">
            <MdBarChart className="text-[17px]" />
            <span className="text-[13px]">{post.views_count}</span>
          </button>
          <div className="flex items-center gap-2">
            <button className="hover:text-blue-500 cursor-pointer transition-all duration-200">
              <FaRegBookmark className="text-[16px]" />
            </button>
            <button className="hover:text-blue-500 cursor-pointer transition-all duration-200">
              <RiShare2Line className="text-[18px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
