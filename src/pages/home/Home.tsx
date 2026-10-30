import { NavLink, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <nav>
        <NavLink to={"/foryou"}>For you</NavLink>
        <NavLink to={"/Following"}>Following</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
