import React, { useState } from "react";
import CollapisbleCard, { CollapsibleTitle } from "../ui/collapisble-card";
import TaskCard from "../ui/task-card";
import TaskAdder from "../ui/add-task";
import { tasks as initialTasks } from "@/fakeDB/task";

export default function Tasks({ className }: { className?: string }) {
  const [tasks, setTasks] = useState(
    initialTasks
      .sort((a, b) => b.priority - a.priority)
      .sort((a, b) => Number(a.completed) - Number(b.completed))
  );

  const priority = {
    0: "low",
    1: "medium",
    2: "high",
  };

  const toggleTaskCompletion = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks
        .map((task) =>
          task.id === taskId ? { ...task, completed: !task.completed } : task
        )
        .sort((a, b) => b.priority - a.priority)
        .sort((a, b) => Number(a.completed) - Number(b.completed))
    );
  };

  const addTask = (task: (typeof initialTasks)[0]) => {
    setTasks((prevTasks) =>
      [
        ...prevTasks,
        {
          ...task,
          id: prevTasks.length + 1,
        },
      ]
        .sort((a, b) => b.priority - a.priority)
        .sort((a, b) => Number(a.completed) - Number(b.completed))
    );
  };

  const removeTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <CollapisbleCard title="tasks" className={"space-y-6 " + className}>
      <CollapsibleTitle>
        <h2 className="uppercase font-[600] text-xl text-[var(--text-heading)]">
          Tasks
        </h2>
        {
          <p className="text-sm text-gray-500 font-[600]">
            {tasks.filter((task) => !task.completed).length} tasks remaining
          </p>
        }
      </CollapsibleTitle>
      <div className="space-y-4 pb-2 ">
        <TaskAdder addTask={addTask} />
        <div className="space-y-4 tasks-container md:max-h-[300px] md:overflow-y-scroll px-1">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              toggleTaskCompletion={toggleTaskCompletion}
              removeTask={removeTask}
              className={
                task.completed
                  ? "complete"
                  : priority[task.priority as keyof typeof priority]
              }
            />
          ))}
        </div>
      </div>
    </CollapisbleCard>
  );
}
