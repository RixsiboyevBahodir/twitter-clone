import React from "react";
import { FaRegBookmark, FaRegComment, FaUserCircle } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { LuRepeat2 } from "react-icons/lu";
import { MdBarChart, MdVerified } from "react-icons/md";
import { RiShare2Line } from "react-icons/ri";
import testOne from "../../assets/images.jfif";
import testVideo from "../../assets/testVideo.mp4";

export default function Post() {
  return (
    <div className="flex gap-2 p-4 border-b hover:bg-gray-50 transition-all duration-200 cursor-pointer">
      <FaUserCircle className="text-4xl" />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-1">
            <p className="text-[14px] font-semibold">Bahodir Rixsiboyev</p>
            <MdVerified className="text-blue-500" />
            <p className="font-light text-[13px] ">@Bahodir</p>
          </div>
          <HiOutlineDotsHorizontal className="text-xl text-gray-500 cursor-pointer" />
        </div>
        <p className="text-[14px] text-[#444] font-redaction whitespace-pre-line">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam ab
          aliquid odit voluptatem aspernatur esse, fuga numquam in dolorum alias
          doloribus quisquam tenetur, nihil nostrum obcaecati suscipit
          reprehenderit iste eveniet asperiores commodi. Dicta labore quisquam,
          recusandae enim, magnam odit modi odio libero impedit officiis placeat
          eveniet officia nemo repellat tempora!
        </p>
        <img
          src={testOne}
          alt="post's image"
          className="w-full border-gray-500 border-2 rounded-xl mt-2"
        />
        <video controls className="rounded-2xl mt-2 overflow-hidden">
          <source src={testVideo} type="video/mp4" />
          <source src={testVideo} type="video/webm" />
        </video>
        <ul className="flex justify-between pt-3 text-[#444]">
          <li className="flex items-center gap-2 hover:text-blue-500 cursor-pointer transition-all duration-200">
            <FaRegComment className="text-[16px]" />
            <p className="text-[13px]">22</p>
          </li>
          <li className="flex items-center gap-2 hover:text-green-500 cursor-pointer transition-all duration-200">
            <LuRepeat2 className="text-[19px]" />
            <p className="text-[13px]">16</p>
          </li>
          <li className="flex items-center gap-2 hover:text-red-500 cursor-pointer transition-all duration-200">
            <FiHeart className="text-[16px]" />
            <p className="text-[13px]">102</p>
          </li>
          <li className="flex items-center gap-2 hover:text-blue-500 cursor-pointer transition-all duration-200">
            <MdBarChart className="text-[17px]" />
            <p className="text-[13px]">665K</p>
          </li>
          <li className="flex items-center gap-2">
            <FaRegBookmark className="text-[16px] hover:text-blue-500 cursor-pointer transition-all duration-200" />
            <RiShare2Line className="text-[18px] hover:text-blue-500 cursor-pointer transition-all duration-200" />
          </li>
        </ul>
      </div>
    </div>
  );
}
