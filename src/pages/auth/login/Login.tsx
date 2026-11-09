import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Button, buttonVariants } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Link } from "react-router-dom";

export default function Login() {
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
            const user = formData.get("user");
            const password = formData.get("password");

            console.log({ user, password });
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
          <Button type="submit" className="cursor-pointer">
            Login
          </Button>
          <Link
            to="/auth/register"
            className={buttonVariants({ className: "cursor-pointer" })}
          >
            Create account
          </Link>
        </form>
      </CardContent>  
    </Card>
  );
}
