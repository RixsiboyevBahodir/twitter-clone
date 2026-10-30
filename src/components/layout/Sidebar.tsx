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
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const navLinkStyle = ({ isActive }: { isActive: boolean }) => {
    return `flex items-center gap-5 p-2 ${isActive ? "bg-black rounded-md text-white" : ""}`;
  };

  return (
    <div className="w-1/5 shrink-0 py-4 relative">
      <FaXTwitter className="text-3xl ml-2" />
      <div className="py-4 flex flex-col gap-3">
        <NavLink to={"/"} className={navLinkStyle}>
          <IoHomeOutline className="text-2xl" />
          <p className="font-medium text-[17px]">Home</p>
        </NavLink>
        <NavLink to={"/explore"} className={navLinkStyle}>
          <RiSearchLine className="text-2xl" />
          <p className="font-medium text-[17px]">Explore</p>
        </NavLink>
        <NavLink to={"/notifications"} className={navLinkStyle}>
          <IoMdNotificationsOutline className="text-2xl" />
          <p className="font-medium text-[17px]">Notifications</p>
        </NavLink>
        <NavLink to={"/follow"} className={navLinkStyle}>
          <FiUserPlus className="text-2xl" />
          <p className="font-medium text-[17px]">Follow</p>
        </NavLink>
        <NavLink to={"/chat"} className={navLinkStyle}>
          <HiOutlineChatBubbleOvalLeft className="text-2xl" />
          <p className="font-medium text-[17px]">Chat</p>
        </NavLink>
        <NavLink to={"/calls"} className={navLinkStyle}>
          <IoCallOutline className="text-2xl" />
          <p className="font-medium text-[17px]">Calls</p>
        </NavLink>
        <NavLink to={"/grok"} className={navLinkStyle}>
          <RiGrokAiFill className="text-2xl" />
          <p className="font-medium text-[17px]">Grok</p>
        </NavLink>
        <NavLink to={"/history"} className={navLinkStyle}>
          <FaRegBookmark className="text-2xl" />
          <p className="font-medium text-[17px]">History</p>
        </NavLink>
        <NavLink to={"/profile"} className={navLinkStyle}>
          <FaRegCircleUser className="text-2xl" />
          <p className="font-medium text-[17px]">Profile</p>
        </NavLink>
        <span className="flex items-center gap-5 p-2">
          <CgMoreO className="text-2xl" />
          <p className="font-medium text-[17px]">More</p>
        </span>
      </div>
      <button className="w-full bg-black py-3 text-white rounded-3xl cursor-pointer text-[16px] shadow-gray-500 shadow-md">
        Post
      </button>
      <div className="flex items-center gap-3 absolute bottom-5">
        <FaUserCircle className="text-4xl" />
        <span>
          <p className="font-medium text-[14px]">Rixsiboyev Bahodir</p>
          <p className="text-[12px]">@Rixsiboyev85757</p>
        </span>
        <BsThreeDots />
      </div>
    </div>
  );
}
