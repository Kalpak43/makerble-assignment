import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

export default function TaskCard({
  task,
  className,
}: {
  task: {
    id: number;
    title: string;
    description: string;
    completed: boolean;
  };
  className?: string;
}) {
  const [completed, setCompleted] = useState(task.completed || false);

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
          checked={completed}
          onClick={() => {
            setCompleted(!completed);
          }}
        />
        {/* <button className="btn">Edit</button> */}
      </div>
    </div>
  );
}
