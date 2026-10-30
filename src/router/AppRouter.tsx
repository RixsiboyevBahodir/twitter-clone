import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Auth from "../pages/auth/Auth";
import MainLayout from "../components/layout/MainLayout";
import Explore from "../pages/Explore/Explore";
import Notifications from "../pages/notifications/Notifications";
import Follow from "../pages/follow/Follow";
import Chat from "../pages/chat/Chat";
import Calls from "../pages/calls/Calls";
import Grok from "../pages/grok/Grok";
import History from "../pages/history/History";
import Profile from "../pages/profile/Profile";
import Foryou from "../pages/home/components/foryou/Foryou";
import Following from "../pages/home/components/following/Following";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />}>
          <Route path="foryou" element={<Foryou />} />
          <Route path="following" element={<Following />} />
          <Route />
        </Route>
        <Route path="/home" element={<Home />}>
          <Route path="foryou" element={<Foryou />} />
          <Route path="following" element={<Following />} />
        </Route>
        <Route path="/explore" element={<Explore />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/follow" element={<Follow />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route element={<MainLayout showRightSidebar={false} />}>
        <Route path="/chat" element={<Chat />} />
        <Route path="/calls" element={<Calls />} />
        <Route path="/grok" element={<Grok />} />
      </Route>
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}
