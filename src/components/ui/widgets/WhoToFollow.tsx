import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

export default function WhoToFollow() {
  return (
    <div className="border p-4 rounded-xl">
      <p className="text-xl font-semibold pb-4">Who to follow</p>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex gap-1">
            <FaUserCircle className="text-[36px]" />
            <div>
              <div className="flex items-center gap-1">
                <p className="text-[14px] font-medium">Bakiroo</p>
                <MdVerified className="text-blue-500" />
              </div>
              <p className="text-[10px] text-gray-600">@the_bakoroo</p>
            </div>
          </div>
          <button className="bg-black text-white px-4 rounded-2xl text-[16px] font-semibold cursor-pointer">
            Follow
          </button>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-1">
            <FaUserCircle className="text-[36px]" />
            <div>
              <div className="flex items-center gap-1">
                <p className="text-[14px] font-medium">Bakiroo</p>
                <MdVerified className="text-blue-500" />
              </div>
              <p className="text-[10px] text-gray-600">@the_bakoroo</p>
            </div>
          </div>
          <button className="bg-black text-white px-4 rounded-2xl text-[16px] font-semibold cursor-pointer">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}
