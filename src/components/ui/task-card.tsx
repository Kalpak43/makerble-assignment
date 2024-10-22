import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function TaskCard({
  task,
  toggleTaskCompletion,
  removeTask,
  className,
}: {
  task: {
    id: number;
    title: string;
    description: string;
    completed: boolean;
  };
  toggleTaskCompletion: (taskId: number) => void;
  removeTask: (taskId: number) => void;
  className?: string;
}) {
  return (
    <div
      className={
        " p-2 border-2 rounded-lg flex justify-between items-center " +
        className
      }
    >
      <h3 className="text-sm font-[600]">{task.title}</h3>
      <div className="flex items-center gap-2">
        <Checkbox
          id="terms"
          checked={task.completed}
          onClick={() => {
            toggleTaskCompletion(task.id);
          }}
        />
        <button
          className=""
          onClick={() => {
            removeTask(task.id);
            toast({
              variant: "destructive",
              title: "Task Removed",
              description: "Task has been removed from the list",
            });
          }}
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
}
