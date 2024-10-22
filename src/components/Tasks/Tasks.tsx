import React from "react";
import CollapisbleCard from "../ui/collapisble-card";
import TaskCard from "../ui/task-card";
import TaskAdder from "../ui/add-task";

export default function Tasks() {
  const priority = {
    0: "low",
    1: "medium",
    2: "high",
  };

  const tasks = [
    {
      id: 1,
      title: "Task 1",
      description: "Description 1",
      completed: false,
      priority: 0,
    },
    {
      id: 2,
      title: "Task 2",
      description: "Description 2",
      completed: true,

      priority: 1,
    },
    {
      id: 3,
      title: "Task 3",
      description: "Description 3",
      completed: false,
      priority: 2,
    },
    {
      id: 4,
      title: "Task 4",
      description: "Description 4",
      completed: true,
      priority: 0,
    },
    {
      id: 5,
      title: "Task 5",
      description: "Description 5",
      completed: false,
      priority: 1,
    },
    {
      id: 6,
      title: "Task 6",
      description: "Description 6",
      completed: true,
      priority: 2,
    },
    {
      id: 8,
      title: "Task 6",
      description: "Description 6",
      completed: true,
      priority: 2,
    },
  ];

  tasks.sort((a, b) => b.priority - a.priority);

  return (
    <CollapisbleCard title="tasks" className="space-y-6">
      <div className="space-y-4 pb-2 ">
        <TaskAdder />
        <div className="space-y-4 tasks-container md:max-h-[300px] md:overflow-y-scroll px-1">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              className={task.completed ? "complete" : priority[task.priority as keyof typeof priority]}
            />
          ))}
        </div>
      </div>
    </CollapisbleCard>
  );
}
