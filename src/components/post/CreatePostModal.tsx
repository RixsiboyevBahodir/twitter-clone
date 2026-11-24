import { useRef, useState } from "react";
import { Image, MapPin, Smile, X } from "lucide-react";
import { FaUserCircle } from "react-icons/fa";
import EmojiPicker from "emoji-picker-react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { useCreatePostMutation } from "../../apiSlice/createPostApi";
import { Toast } from "@base-ui/react";

function isValidMediaUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function getMediaType(value: string): "image" | "video" {
  return new URL(value).pathname.toLowerCase().endsWith(".mp4")
    ? "video"
    : "image";
}

export default function CreatePostModal() {
  const [content, setContent] = useState("");
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const [mediaUrl, setMediaUrl] = useState("");
  const [mediaError, setMediaError] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const mediaUrlInputRef = useRef<HTMLInputElement>(null);
  const mediaUrlValue = mediaUrl.trim();
  const hasValidMediaUrl = !mediaUrlValue || isValidMediaUrl(mediaUrlValue);
  const canPost =
    (content.trim().length > 0 || mediaUrlValue.length > 0) && hasValidMediaUrl;

  const [isOpen, setIsOpen] = useState(false);
  const [createPost, { isLoading }] = useCreatePostMutation();
  const toastManager = Toast.useToastManager();

  const handlePost = async () => {
    if (!canPost) return;

    const postPayload = {
      text: content,
      location_name: "Toshkent",
      ...(mediaUrlValue
        ? {
            media_url: mediaUrlValue,
            media_type: getMediaType(mediaUrlValue),
          }
        : {}),
    };

    try {
      await createPost(postPayload).unwrap();
      setContent("");
      setMediaUrl("");
      setMediaError(null);
      setIsEmojiPickerOpen(false);
      setIsOpen(false);
      toastManager.add({
        title: "create post",
        type: "success",
      });
    } catch (error) {
      console.log(error);

      toastManager.add({
        title: "error is create",
        type: "error",
      });
    }
  };

  const handleRemoveMediaUrl = () => {
    setMediaUrl("");
    setMediaError(null);
  };

  const handleEmojiSelect = (emoji: { emoji: string }) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    setContent(
      (currentContent) =>
        currentContent.slice(0, start) +
        emoji.emoji +
        currentContent.slice(end),
    );
    setIsEmojiPickerOpen(false);

    requestAnimationFrame(() => {
      textarea.focus();
      const cursorPosition = start + emoji.emoji.length;
      textarea.setSelectionRange(cursorPosition, cursorPosition);
    });
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger
        render={
          <Button className="w-full rounded-full bg-black py-6 text-base font-bold text-white hover:bg-black/80">
            Post
          </Button>
        }
      />
      <AlertDialogContent
        size="default"
        className="w-[calc(100vw-1rem)] data-[size=default]:max-w-[calc(100vw-1rem)] data-[size=default]:sm:max-w-3xl gap-0 rounded-3xl p-5 sm:p-6 font-roboto"
      >
        <AlertDialogHeader className="sr-only">
          <AlertDialogTitle>Create a post</AlertDialogTitle>
        </AlertDialogHeader>

        <div className="flex items-center justify-between">
          <AlertDialogCancel
            aria-label="Close composer"
            variant="ghost"
            size="icon"
            className="rounded-full"
          >
            <X className="size-5" />
          </AlertDialogCancel>
        </div>

        <div className="mt-7 flex min-h-36 gap-3">
          <FaUserCircle
            aria-hidden="true"
            className="mt-1 shrink-0 text-5xl text-slate-400"
          />
          <textarea
            ref={textareaRef}
            aria-label="Post text"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            placeholder="What's happening?"
            className="min-h-36 flex-1 resize-none bg-transparent pt-2 text-xl text-slate-800 outline-none placeholder:text-slate-500 sm:text-2xl"
          />
        </div>

        {mediaUrlValue && hasValidMediaUrl && (
          <div className="relative ml-14 mb-4 overflow-hidden rounded-2xl border border-slate-200">
            {getMediaType(mediaUrlValue) === "video" ? (
              <video
                src={mediaUrlValue}
                controls
                className="max-h-80 w-full bg-black object-contain"
              />
            ) : (
              <img
                src={mediaUrlValue}
                alt="Post media preview"
                className="max-h-80 w-full object-contain"
              />
            )}
            <button
              type="button"
              aria-label="Remove media URL"
              onClick={handleRemoveMediaUrl}
              className="absolute right-2 top-2 flex size-8 items-center justify-center rounded-full bg-black/70 text-white hover:bg-black"
            >
              <X className="size-4" />
            </button>
          </div>
        )}
        <div className="ml-14 mb-3">
          <label
            htmlFor="post-media-url"
            className="mb-1 block text-sm font-medium text-slate-600"
          >
            Media URL (rasm yoki MP4 video)
          </label>
          <input
            ref={mediaUrlInputRef}
            id="post-media-url"
            type="url"
            value={mediaUrl}
            onChange={(event) => {
              setMediaUrl(event.target.value);
              setMediaError(null);
            }}
            onBlur={() => {
              if (mediaUrlValue && !isValidMediaUrl(mediaUrlValue)) {
                setMediaError("HTTP yoki HTTPS media URL kiriting.");
              }
            }}
            placeholder="https://example.com/image.jpg"
            className="h-10 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
          {mediaError && (
            <p role="alert" className="mt-1 text-sm text-red-600">
              {mediaError}
            </p>
          )}
        </div>
        <div className="ml-14 flex flex-wrap items-center justify-between gap-3 pt-3 font-roboto">
          <div className="relative flex items-center gap-1">
            <button
              type="button"
              aria-label="Enter media URL"
              onClick={() => mediaUrlInputRef.current?.focus()}
              className="flex size-9 items-center justify-center rounded-full text-sky-600 hover:bg-sky-50"
            >
              <Image />
            </button>
            <button
              type="button"
              aria-label="Add location"
              className="flex size-9 items-center justify-center rounded-full text-sky-600 hover:bg-sky-50"
            >
              <MapPin />
            </button>
            <button
              type="button"
              aria-label="Choose emoji"
              aria-expanded={isEmojiPickerOpen}
              onClick={() => setIsEmojiPickerOpen((open) => !open)}
              className="flex size-9 items-center justify-center rounded-full text-sky-600 hover:bg-sky-50"
            >
              <Smile />
            </button>
            {isEmojiPickerOpen && (
              <div className="absolute bottom-full left-0 z-50 mb-2 w-[min(320px,calc(100vw-5rem))]">
                <EmojiPicker
                  width="100%"
                  height={350}
                  previewConfig={{ showPreview: false }}
                  onEmojiClick={handleEmojiSelect}
                />
              </div>
            )}
          </div>
          <Button
            type="button"
            disabled={isLoading || !canPost}
            onClick={handlePost}
            className={`px-5 font-bold text-white ${
              canPost
                ? "bg-sky-500 hover:bg-sky-600"
                : "bg-sky-200 hover:bg-sky-200"
            }`}
          >
            Post
          </Button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
