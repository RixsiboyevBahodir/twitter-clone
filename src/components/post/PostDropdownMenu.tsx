import { Toast } from "@base-ui/react";
import { TrashIcon, UserPlus } from "lucide-react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useDeletePostMutation } from "../../apiSlice/posts/deletePostApi";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useUserFollowMutation } from "../../apiSlice/user/userFollowApi";

export default function PostDropdownMenu({
  postId,
  userId,
  username,
}: {
  postId: number;
  userId: number;
  username: string;
}) {
  const [deletePost, { isLoading }] = useDeletePostMutation();
  const [followUser] = useUserFollowMutation();
  const toastManager = Toast.useToastManager();

  const handleDelete = async () => {
    try {
      await deletePost(postId).unwrap();
      toastManager.add({
        title: "Post o'chirildi",
        type: "success",
      });
    } catch (error) {
      const err = error as { data?: { error?: string } };
      toastManager.add({
        title: err.data?.error ?? "Xatolik yuz berdi",
        type: "error",
      });
    }
  };

  const handleFollow = async () => {
    try {
      await followUser(userId).unwrap();
      toastManager.add({
        title: `Following ${username}`,
        type: "success",
      });
    } catch (error) {
      const err = error as { data?: { error?: string } };
      toastManager.add({
        title: err.data?.error ?? "Foydalanuvchini kuzatishda xatolik",
        type: "error",
      });
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button className="border-none cursor-pointer" variant="outline">
            {isLoading ? (
              "Deleting..."
            ) : (
              <HiOutlineDotsHorizontal className="text-xl text-gray-500 cursor-pointer" />
            )}
          </Button>
        }
      />
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem
            variant="destructive"
            onClick={handleDelete}
            className="cursor-pointer"
          >
            <TrashIcon />
            Delete
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={handleFollow}
            className="cursor-pointer text-blue-600 transition-colors hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-50 focus:text-blue-700 data-[highlighted]:bg-blue-50 data-[highlighted]:text-blue-700"
          >
            <UserPlus className="stroke-blue-600 group-data-[highlighted]/dropdown-menu-item:stroke-blue-700" />
            Follow @{username}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
