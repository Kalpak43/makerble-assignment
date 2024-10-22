import React from "react";
import { Input } from "./input";
import { Button } from "./button";
import { NotebookPen } from "lucide-react";

export default function TaskAdder() {
  return (
    <div className="flex gap-2 p-1">
      <Input
        type="text"
        placeholder="Add a Task"
        className="md:max-w-[500px] mx-auto focus-visible:ring-1"
      />
      <Button className="bg-[var(--btn-primary)] hover:bg-[var(--btn-primary-hov)] font-[600]" title="Add Task">
        <NotebookPen className="inline" size={20} />
      </Button>
    </div>
  );
}
