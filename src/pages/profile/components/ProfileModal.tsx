import { useState } from "react";
import { useUpdateUserInfoMutation } from "../../../apiSlice/user/userInfoChangeApi";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../../components/ui/alert-dialog";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Toast } from "@base-ui/react/toast";
import useAuthStore from "../../../store/authLocalStorage";
import type { ProfileModalProps } from "../../../type/userTypes";

export function ProfileModal({ profile }: ProfileModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [updateInfo] = useUpdateUserInfoMutation();
  const { setCredentials, token, user } = useAuthStore();
  const toastManager = Toast.useToastManager();

  const handleEditProfil = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name")?.toString();
    const username = formData.get("username")?.toString();
    const bio = formData.get("bio")?.toString();
    const phone = formData.get("phone")?.toString();
    const verified = formData.get("verified") === "on";

    try {
      await updateInfo({
        name,
        username,
        bio,
        phone,
        is_verified: verified,
      }).unwrap();
    } catch (error) {
      const isUnauthorized =
        typeof error === "object" &&
        error !== null &&
        "status" in error &&
        error.status === 401;

      toastManager.add({
        title: "Xatolik yuz berdi",
        type: "error",
        description: isUnauthorized
          ? "Sessiya muddati tugagan. Qayta tizimga kiring."
          : "Ma'lumotlarni yangilashda xatolik. Qayta urinib ko'ring.",
      });
      return;
    }

    if (token && user) {
      setCredentials({
        token,
        user: {
          ...user,
          phone: phone ?? user.phone,
          username: username ?? user.username,
        },
      });
    }

    toastManager.add({
      title: "Profil yangilandi",
      type: "success",
      description: "Ma'lumotlar yangilandi",
    });
    setIsOpen(false);
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger
        render={
          <Button
            variant="outline"
            className="absolute right-4 -bottom-12 rounded-full border-gray-400 px-5 font-semibold"
          />
        }
      >
        Set up profile
      </AlertDialogTrigger>

      <AlertDialogContent size="default" className="sm:max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle>Edit profile</AlertDialogTitle>
        </AlertDialogHeader>
        <form
          id="profile-form"
          className="grid gap-4 font-roboto"
          onSubmit={handleEditProfil}
        >
          <div className="grid gap-1.5">
            <label htmlFor="profile-name" className="text-sm font-medium">
              Name
            </label>
            <Input
              id="profile-name"
              name="name"
              defaultValue={profile?.name}
              placeholder="Name"
            />
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="profile-username" className="text-sm font-medium">
              Username
            </label>
            <Input
              id="profile-username"
              name="username"
              defaultValue={profile?.username}
              placeholder="Username"
            />
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="profile-bio" className="text-sm font-medium">
              Bio
            </label>
            <Input
              id="profile-bio"
              name="bio"
              defaultValue={profile?.bio ?? ""}
              placeholder="Bio"
            />
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="profile-phone" className="text-sm font-medium">
              Phone number
            </label>
            <Input
              id="profile-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              defaultValue={profile?.phone}
              placeholder="+998 90 123 45 67"
            />
          </div>
          <div className="flex items-center gap-2">
            <Input
              id="profile-verified"
              name="verified"
              type="checkbox"
              className="h-4 w-4 rounded accent-primary"
              defaultChecked={profile?.is_verified}
            />
            <label
              htmlFor="profile-verified"
              className="cursor-pointer text-sm"
            >
              Verified
            </label>
          </div>
        </form>
        <AlertDialogFooter>
          <AlertDialogCancel variant="outline" size="default">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction type="submit" form="profile-form">
            Save
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
