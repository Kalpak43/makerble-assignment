import React from "react";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Button } from "./button";
import { useToast } from "@/hooks/use-toast";

export default function AddFeed({
  addFeed,
}: {
  addFeed: (feed: {
    content: string;
    tag: string;
    createdOn: Date;
    editedOn: Date;
    userId: number;
  }) => void;
}) {
  const { toast } = useToast();
  const [content, setContent] = React.useState("");
  const [tag, setTag] = React.useState("");
  return (
    <form
      className=" p-4 pt-16 container w-full rounded-lg space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        addFeed({
          content: content,
          tag: tag,
          createdOn: new Date(),
          editedOn: new Date(),
          userId: 1,
        });

        setContent("");
        setTag("");

        toast({
          variant: "default",
          title: "Post Shared Successfully",
          description: "Feed has been added to the list",
        });
      }}
    >
      <Textarea
        placeholder="Add content you want to share"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Input
        placeholder="Add Tag"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      />
      <Button className="bg-[var(--btn-primary)] hover:bg-[var(--btn-primary-hov)] font-[600] w-full">
        Share Post
      </Button>
    </form>
  );
}
