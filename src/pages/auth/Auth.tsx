import { FaXTwitter } from "react-icons/fa6";
import { Outlet } from "react-router-dom";

export default function Auth() {
  return (
    <div className="flex items-center justify-around h-screen">
      <FaXTwitter className="text-[300px]" />
      <Outlet/>
    </div>
  );
}
