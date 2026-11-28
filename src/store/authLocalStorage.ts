import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AuthStoreState } from "../type/userTypes";

const useAuthStore = create<AuthStoreState>()(
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
