import { FaUserCircle } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import type { UserSummary } from "../../type/userTypes";

export default function UserCard({ user }: { user: UserSummary }) {
  return (
    <div className="flex gap-3 border-b py-2">
      <FaUserCircle className="mt-0.5 size-12 shrink-0 text-gray-700" />
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex items-center gap-1">
              <p className="truncate text-[16px] font-bold">{user.name}</p>
              <MdVerified className="shrink-0 text-blue-500" />
            </div>
            <p className="truncate text-[14px] text-gray-500">
              @{user.username}
            </p>
          </div>
          <button className="shrink-0 whitespace-nowrap rounded-full bg-black px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
            Follow
          </button>
        </div>
        <p className="mt-2 text-[14px] leading-5 text-gray-900 font-redaction">
          {user.bio}
        </p>
      </div>
    </div>
  );
}
