import { FaXTwitter } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiUserPlus } from "react-icons/fi";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";
import { RiGrokAiFill } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { CgMoreO } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

export default function Sidebar() {
  return (
    <div className="w-1/5 shrink-0 py-4 relative">
      <FaXTwitter className="text-3xl" />
      <ul className="py-8 flex flex-col gap-6">
        <li className="flex items-center gap-5">
          <IoHomeOutline className="text-2xl" />
          <p className="font-medium text-[17px]">Home</p>
        </li>
        <li className="flex items-center gap-5">
          <RiSearchLine className="text-2xl" />
          <p className="font-medium text-[17px]">Explore</p>
        </li>
        <li className="flex items-center gap-5">
          <IoMdNotificationsOutline className="text-2xl" />
          <p className="font-medium text-[17px]">Notifications</p>
        </li>
        <li className="flex items-center gap-5">
          <FiUserPlus className="text-2xl" />
          <p className="font-medium text-[17px]">Follow</p>
        </li>
        <li className="flex items-center gap-5">
          <HiOutlineChatBubbleOvalLeft className="text-2xl" />
          <p className="font-medium text-[17px]">Chat</p>
        </li>
        <li className="flex items-center gap-5">
          <IoCallOutline className="text-2xl" />
          <p className="font-medium text-[17px]">Calls</p>
        </li>
        <li className="flex items-center gap-5">
          <RiGrokAiFill className="text-2xl" />
          <p className="font-medium text-[17px]">Grok</p>
        </li>
        <li className="flex items-center gap-5">
          <FaRegBookmark className="text-2xl" />
          <p className="font-medium text-[17px]">History</p>
        </li>
        <li className="flex items-center gap-5">
          <FaRegCircleUser className="text-2xl" />
          <p className="font-medium text-[17px]">History</p>
        </li>
        <li className="flex items-center gap-5">
          <CgMoreO className="text-2xl" />
          <p className="font-medium text-[17px]">More</p>
        </li>
      </ul>
      <button className="w-full bg-black py-3 text-white rounded-3xl cursor-pointer">
        Post
      </button>
      <div className="flex items-center gap-3 absolute bottom-5">
        <FaUserCircle className="text-5xl" />
        <span>
          <p className="font-medium">Rixsiboyev Bahodir</p>
          <p className="text-[14px]">@Rixsiboyev85757</p>
        </span>
        <BsThreeDots />
      </div>
    </div>
  );
}
