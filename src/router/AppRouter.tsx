import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Auth from "../pages/auth/Auth";
import MainLayout from "../components/layout/MainLayout";
import Notifications from "../pages/notifications/Notifications";
import Follow from "../pages/follow/Follow";
import Chat from "../pages/chat/Chat";
import Calls from "../pages/calls/Calls";
import Grok from "../pages/grok/Grok";
import History from "../pages/history/History";
import Profile from "../pages/profile/Profile";
import Foryou from "../pages/home/pages/foryou/Foryou";
import Following from "../pages/home/pages/following/Following";
import Explore from "../pages/explore/Explore";
import DefaultExplore from "../pages/explore/pages/DefaultExplore";
import Trending from "../pages/explore/pages/Trending";
import News from "../pages/explore/pages/News";
import Sports from "../pages/explore/pages/Sports";
import Entertainment from "../pages/explore/pages/Entertainment";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />}>
          <Route index element={<Navigate to="foryou" replace />} />
          <Route path="foryou" element={<Foryou />} />
          <Route path="following" element={<Following />} />
        </Route>
        <Route path="/explore" element={<Explore />}>
          <Route index element={<Navigate to="explore" replace />} />
          <Route path="explore" element={<DefaultExplore />} />
          <Route path="trending" element={<Trending />} />
          <Route path="news" element={<News />} />
          <Route path="sports" element={<Sports />} />
          <Route path="entertainment" element={<Entertainment />} />
        </Route>
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
