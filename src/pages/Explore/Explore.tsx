import React from "react";
import { Input } from "../../components/ui/input";
import { IoSearchOutline } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";

const navLinkStyle = ({ isActive }: { isActive: boolean }) => {
  return `flex items-center gap-5 p-2 ${isActive ? "border-b-2 border-blue-500" : "border-b-2 border-white transition-all duration-200"}`;
};

export default function Explore() {
  return (
    <div>
      <div className="p-4">
        <div className="relative">
          <IoSearchOutline
            aria-hidden="true"
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground "
          />
          <Input className="pl-9 py-5 rounded-3xl" placeholder="Search" />
        </div>
        <div className="flex justify-between p-2 pt-4 ">
          <NavLink to={"explore"} className={navLinkStyle}>
            Explore
          </NavLink>
          <NavLink to={"trending"} className={navLinkStyle}>
            Trending
          </NavLink>
          <NavLink to={"news"} className={navLinkStyle}>
            News
          </NavLink>
          <NavLink to={"sports"} className={navLinkStyle}>
            Sports
          </NavLink>
          <NavLink to={"entertainment"} className={navLinkStyle}>
            Entertainment
          </NavLink>
        </div>
      </div>
      <Outlet/>
    </div>
  );
}
