import { Input } from "../ui/input";
import { IoSearchOutline } from "react-icons/io5";
import PremiumWidget from "../ui/widgets/PremiumWidget";

export default function RightSidebar() {
  return (
    <div className="w-[30%] shrink-0 py-4 pl-5">
      <div className="relative">
        <IoSearchOutline
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
        <Input className="pl-9 py-5 rounded-3xl" placeholder="Search" />
      </div>
     <PremiumWidget/>
    </div>
  );
}
