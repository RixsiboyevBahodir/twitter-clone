import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Auth from "../pages/auth/Auth";
import MainLayout from "../components/layout/MainLayout";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route element={<Home />} />
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}
