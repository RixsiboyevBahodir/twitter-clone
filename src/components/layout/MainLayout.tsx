import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";
import useAuthStore from "../../store/authLocalStorage";
import { useEffect } from "react";

type MainLayoutProps = {
  showRightSidebar?: boolean;
};

export default function MainLayout({
  showRightSidebar = true,
}: MainLayoutProps) {
  const accessToken = useAuthStore((state) => state.token?.access_token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/auth", { replace: true });
    }
  }, [accessToken, navigate]);

  return (
    <div className="flex w-full min-h-screen">
      <Sidebar />
      <main className="w-[50%] min-w-0 shrink-0 border h-screen overflow-y-scroll">
        <Outlet />
      </main>
      {showRightSidebar && <RightSidebar />}
    </div>
  );
}
