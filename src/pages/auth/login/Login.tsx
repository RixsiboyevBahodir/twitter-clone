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
import { Toast } from "@base-ui/react/toast";
import useAuthStore from "../../../store/authLocalStorage";

interface IUser {
  username: string;
  password: string;
}

export default function Login() {
  const [loginMutation, isLodading] = useLoginMutation();
  const toastManager = Toast.useToastManager();
  const { setCredentials } = useAuthStore();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const username = formData.get("user") as string;
    const password = formData.get("password") as string;

    if (!username || !password) {
      toastManager.add({
        title: "Xatolik",
        type: "error",
        description: "Barcha maydonlarni to'ldiring.",
      });
      return;
    }

    const user: IUser = {
      username,
      password,
    };

    try {
      const loginResponse = await loginMutation(user).unwrap();

      setCredentials({
        token: {
          access_token: loginResponse.access_token,
          refresh_token: loginResponse.refresh_token,
        },
        user: {
          created_at: loginResponse.user.created_at,
          id: loginResponse.user.id,
          phone: loginResponse.user.phone,
          username: loginResponse.user.username,
        },
      });

      form.reset();
      toastManager.add({
        title: "Tizimga kirdingiz!",
        type: "success",
        description: "Hisobingiz muvaffaqiyatli yaratildi.",
      });
    } catch (error) {
      toastManager.add({
        title: "Xatolik yuz berdi",
        type: "error",
        description: "username yoke password xato",
      });
    }
  };

  return (
    <Card className="shadow-md max-w-125 w-full">
      <CardHeader>
        <CardTitle>Log into twitter</CardTitle>
        <CardDescription>user and password</CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <form className="space-y-6" onSubmit={handleSubmit}>
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
