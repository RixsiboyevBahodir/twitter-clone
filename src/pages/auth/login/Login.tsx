import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Link } from "react-router-dom";
import { LuMoveRight } from "react-icons/lu";
import { useLoginMutation } from "../../../apiSlice/loginApi";

interface IUser {
  username: string;
  password: string;
}

export default function Login() {
  const [login, isLodading] = useLoginMutation();

  console.log(isLodading);

  return (
    <Card className="shadow-md max-w-125 w-full">
      <CardHeader>
        <CardTitle>Log into twitter</CardTitle>
        <CardDescription>user and password</CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <form
          className="space-y-6"
          onSubmit={(event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const username = formData.get("user") as string;
            const password = formData.get("password") as string;

            const user: IUser = {
              username,
              password,
            };
            login(user);
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
          <div className="flex gap-4">
            <Button type="submit" className="cursor-pointer">
              Login
            </Button>
            <Link to="/auth/register" className="flex items-center gap-3">
              Create account
              <LuMoveRight />
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
