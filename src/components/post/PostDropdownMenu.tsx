import { Toast } from "@base-ui/react";
import { TrashIcon } from "lucide-react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useDeletePostMutation } from "../../apiSlice/deletePostApi";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function PostDropdownMenu({ id }: { id: number }) {
  const [deletePost, { isLoading }] = useDeletePostMutation();
  const toastManager = Toast.useToastManager();

  const handleDelete = async () => {
    try {
      await deletePost(id).unwrap();
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
          <DropdownMenuItem variant="destructive" onClick={handleDelete}>
            <TrashIcon />
            Delete
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
