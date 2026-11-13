import { FaXTwitter } from "react-icons/fa6";
import { Outlet, useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authLocalStorage";
import { useEffect } from "react";

export default function Auth() {
  const accessToken = useAuthStore((state) => state.token?.access_token);
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      setTimeout(() => {
        navigate("/home", { replace: true });
      });
    }
  }, [accessToken, navigate]);

  return (
    <div className="flex items-center justify-around h-screen">
      <FaXTwitter className="text-[300px]" />
      <Outlet />
    </div>
  );
}
