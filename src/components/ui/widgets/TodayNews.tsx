import React from "react";
import { GrClose } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";

export default function TodayNews() {
  return (
    <div className="border rounded-xl p-4">
      <div className="flex justify-between items-center pb-3">
        <p className="text-xl font-semibold">Today's news</p>
        <GrClose className="text-[14px]" />
      </div>
      <div>
        <p className="text-[16px] font-bold leading-tight pb-3">
          Learjet Crashes in Florida Mobile Home Park, Killing All Nine Aboard
        </p>
        <div className="flex items-center gap-12">
          <div className="flex items-center relative">
            <FaUserCircle className="text-2xl absolute left-2 -z-10" />
            <FaUserCircle className="text-2xl absolute left-3.75 -z-20" />
            <FaUserCircle className="text-2xl absolute" />
          </div>
          <p className="text-gray-600 text-[13px]">
            8 hours ago · News · 562.4K posts
          </p>
        </div>
      </div>
    </div>
  );
}
