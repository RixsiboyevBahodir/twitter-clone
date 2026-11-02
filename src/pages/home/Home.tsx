import { NavLink, Outlet } from "react-router-dom";
import { Input } from "../../components/ui/input";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

export default function Home() {
  const tabClassName = ({ isActive }: { isActive: boolean }) =>
    `flex-1 border-b-2 px-4 py-4 text-center font-medium transition-colors ${
      isActive
        ? "border-sky-500 text-black"
        : "border-transparent text-gray-500 hover:bg-gray-100"
    }`;

  return (
    <div>
      <nav className="flex border-b sticky top-0 bg-[#ffffffd7] backdrop-blur-sm">
        <NavLink to="foryou" end className={tabClassName}>
          For you
        </NavLink>
        <NavLink to="following" end className={tabClassName}>
          Following
        </NavLink>
      </nav>
      <div className="p-4 flex items-center gap-2 border-b">
        <FaUserCircle className="text-5xl" />
        <Input
          className="outline-none ring-0 focus:ring-0 focus:outline-none focus-visible:ring-0 text-lg! border-none h-auto py-3"
          placeholder="What's happening?"
        />
        <MdOutlineAddPhotoAlternate className="text-3xl" />
        <button className="px-4 py-2 rounded-2xl bg-black text-white">
          Post
        </button>
      </div>
      <p className="text-center text-blue-500 py-4 border-b font-normal">
        Show 360 posts
      </p>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
