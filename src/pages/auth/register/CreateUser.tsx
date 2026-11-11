import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Link } from "react-router-dom";
import { LuMoveLeft } from "react-icons/lu";
import { useRegisterMutation } from "../../../apiSlice/registerApi";

interface ICreateUser {
  phone: string;
  username: string;
  password: string;
}

export default function CreateUser() {
  const [register, isLodading] = useRegisterMutation();

  console.log("Lodaing", isLodading);

  return (
    <Card className="shadow-md max-w-125 w-full">
      <CardHeader>
        <CardTitle>Create account</CardTitle>
      </CardHeader>
      <CardContent className="pb-4">
        <form
          className="space-y-6"
          onSubmit={(event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const user = formData.get("user") as string;
            const password = formData.get("password") as string;
            const phone = formData.get("phone") as string;

            const createUser: ICreateUser = {
              phone,
              username: user,
              password,
            };
            register(createUser);
            event.currentTarget.reset();
          }}
        >
          <div className="space-y-2">
            <label htmlFor="user" className="block font-medium">
              User name
            </label>
            <Input
              id="user"
              name="user"
              type="text"
              placeholder="your user"
              autoComplete="username"
              className="h-10 rounded-xl px-3"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="block font-medium">
              Phone number
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+998 "
              autoComplete="current-password"
              className="h-10 rounded-xl px-3"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block font-medium">
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="password"
              autoComplete="current-password"
              className="h-10 rounded-xl px-3"
            />
          </div>
          <div className="flex items-center gap-5">
            <Button type="submit" className="cursor-pointer">
              Create account
            </Button>
            <Link to="/auth/login" className="flex items-center gap-3">
              <LuMoveLeft />
              Login
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
