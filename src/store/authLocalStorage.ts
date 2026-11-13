import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IUser {
  created_at: string;
  id: number;
  phone: string;
  username: string;
}

interface IToken {
  access_token: string;
  refresh_token: string;
}

interface IAuthLocalData {
  token: IToken | null;
  user: IUser | null;
  setCredentials: (data: { token: IToken; user: IUser }) => void;
  logout: () => void;
}

const useAuthStore = create<IAuthLocalData>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      setCredentials: ({ token, user }) => set({ token, user }),
      logout: () => set({ token: null, user: null }),
    }),
    { name: "auth-storage" },
  ),
);

export default useAuthStore;
