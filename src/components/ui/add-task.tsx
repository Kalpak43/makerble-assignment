import React from "react";
import { Input } from "./input";
import { Button } from "./button";
import { NotebookPen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { tasks } from "@/fakeDB/task";

export default function TaskAdder({
  addTask,
}: {
  addTask: (task: (typeof tasks)[0]) => void;
}) {
  const { toast } = useToast();
  const [taskTitle, setTaskTitle] = React.useState("");
  const [taskPriority, setTaskPriority] = React.useState(0);

  return (
    <div className="flex gap-2 p-1">
      <Input
        type="text"
        placeholder="Add a Task"
        className="md:max-w-[500px] mx-auto focus-visible:ring-1"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Priority"
        className=" focus-visible:ring-1 max-w-fit md:max-w-[100px]"
        min={0}
        max={2}
        value={taskPriority}
        onChange={(e) =>
          setTaskPriority(
            Number(e.target.value) > 2 ? 2 : Number(e.target.value)
          )
        }
      />
      <Button
        className="bg-[var(--btn-primary)] hover:bg-[var(--btn-primary-hov)] font-[600]"
        title="Add Task"
        onClick={() => {
          addTask({
            id: tasks.length + 1,
            title: taskTitle,
            priority: taskPriority,
            description: "",
            completed: false,
          });
          setTaskTitle("");
          toast({
            variant: "default",
            title: "Task Added",
            description: "Task has been added to the list",
          });
        }}
      >
        <NotebookPen className="inline" size={20} />
      </Button>
    </div>
  );
}
