import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IUser {
  created_at:string
  id:number
  phone: string;
  username: string;
}

interface IAuthLocalData {
  token: string | null;
  user: IUser | null;
  setCredentials: (data: { token: string; user: IUser }) => void;
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

export default useAuthStore