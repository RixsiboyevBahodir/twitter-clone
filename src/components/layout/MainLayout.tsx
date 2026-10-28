import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";

export default function MainLayout() {
  return (
    <div className="flex w-full min-h-screen">
      <Sidebar />
      <main className="w-[45%] min-w-0 shrink-0">
        <Outlet />
      </main>
      <RightSidebar />
    </div>
  );
}
