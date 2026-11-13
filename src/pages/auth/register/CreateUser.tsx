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
import { Toast } from "@base-ui/react/toast";
import { useRegisterMutation } from "../../../apiSlice/registerApi";
import useAuthStore from "../../../store/authStore";

interface ICreateUser {
  phone: string;
  username: string;
  password: string;
}

export default function CreateUser() {
  const [register, { isLoading: isLoading }] = useRegisterMutation();
  const toastManager = Toast.useToastManager();
  const { setCredentials } = useAuthStore();


  const create = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const user = formData.get("user") as string;
    const password = formData.get("password") as string;
    const phone = formData.get("phone") as string;

    if (!user || !phone || !password) {
      toastManager.add({
        title: "Xatolik",
        type: "error",
        description: "Barcha maydonlarni to'ldiring.",
      });
      return;
    }

    if (password.length < 8) {
      toastManager.add({
        title: "Xatolik",
        type: "error",
        description: "Parol kamida 8 ta belgidan iborat bo'lishi kerak.",
      });
      return;
    }

    const createUser: ICreateUser = {
      phone,
      username: user,
      password,
    };

    try {
      const response = await register(createUser).unwrap();

      setCredentials({
        token: response.access_token,
        user: {
          created_at: response.user.created_at,
          id: response.user.id,
          phone: response.user.phone,
          username: response.user.username,
        },
      });

      form.reset();

      toastManager.add({
        title: "Tizimga kirdingiz!",
        type: "success",
        description: "Hisobingiz muvaffaqiyatli yaratildi.",
      });
    } catch (error) {
      const message = (error as { data?: { error?: string } })?.data?.error;

      toastManager.add({
        title: "Xatolik yuz berdi",
        type: "error",
        description:
          message === "Phone or username is already registered"
            ? "Bu telefon raqami yoki username avval ro‘yxatdan o‘tgan."
            : (message ?? "Ro‘yxatdan o‘tishda xatolik. Qayta urinib ko‘ring."),
      });
    }
  };

  return (
    <Card className="shadow-md max-w-125 w-full">
      <CardHeader>
        <CardTitle>Create account</CardTitle>
      </CardHeader>
      <CardContent className="pb-4">
        <form className="space-y-6" onSubmit={create}>
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
