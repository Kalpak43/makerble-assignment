"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import React, { useState } from "react";

export default function Page() {
  const [progressValues, setProgressValues] = useState({
    task1: 25,
    task2: 50,
    task3: 75,
    task4: 10,
  });

  const updateProgress = (
    task: keyof typeof progressValues,
    increment: boolean
  ) => {
    setProgressValues((prev) => ({
      ...prev,
      [task]: Math.min(Math.max(prev[task] + (increment ? 5 : -5), 0), 100),
    }));
  };

  return (
    <main className="">
      <div className="container p-4 rounded-lg min-h-[90vh] space-y-4">
        <div className="flex flex-col items-center gap-2 pb-4 border-b-2">
          <Image
            src={"/default.png"}
            alt="profile image"
            width={500}
            height={500}
            className="max-w-[100px] border-2 rounded-full"
          />
          <h2 className="text-2xl font-[600]">Kalpak Goshikwar</h2>
        </div>
        <div className="grid overflow-x-auto lg:grid-cols-2 gap-4 divide-x-2 pb-4 border-b-2">
          <div className="followers space-y-2 px-2">
            <h3 className="text-xl font-[600] ">Followers:</h3>
            <div className="flex gap-2">
              <Image
                src={"/default.png"}
                alt="profile image"
                width={500}
                height={500}
                className="max-w-[100px] border-2 rounded-full cursor-pointer"
              />
              <Image
                src={"/default.png"}
                alt="profile image"
                width={500}
                height={500}
                className="max-w-[100px] border-2 rounded-full cursor-pointer"
              />
              <Image
                src={"/default.png"}
                alt="profile image"
                width={500}
                height={500}
                className="max-w-[100px] border-2 rounded-full cursor-pointer"
              />
              <Image
                src={"/default.png"}
                alt="profile image"
                width={500}
                height={500}
                className="max-w-[100px] border-2 rounded-full cursor-pointer"
              />
            </div>
          </div>
          <div className="following space-y-2 px-2">
            <h3 className="text-xl font-[600] ">People you follow:</h3>
            <div className="flex gap-2 ">
              <Image
                src={"/default.png"}
                alt="profile image"
                width={500}
                height={500}
                className="max-w-[100px] border-2 rounded-full cursor-pointer"
              />
              <Image
                src={"/default.png"}
                alt="profile image"
                width={500}
                height={500}
                className="max-w-[100px] border-2 rounded-full cursor-pointer"
              />
              <Image
                src={"/default.png"}
                alt="profile image"
                width={500}
                height={500}
                className="max-w-[100px] border-2 rounded-full cursor-pointer"
              />
              <Image
                src={"/default.png"}
                alt="profile image"
                width={500}
                height={500}
                className="max-w-[100px] border-2 rounded-full cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-[600] ">Your Personal Progress:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(progressValues).map(([task, value]) => (
              <div key={task} className="space-y-2">
                <div className="flex justify-between items-center">
                  <label
                    htmlFor={task}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {task.charAt(0).toUpperCase() + task.slice(1)}
                  </label>
                  <span className="text-sm text-muted-foreground">
                    {value}%
                  </span>
                </div>
                <Progress value={value} className="w-full h-[10px]" id={task} />
                <div className="flex justify-end space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      updateProgress(task as keyof typeof progressValues, false)
                    }
                    disabled={value === 0}
                  >
                    -
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      updateProgress(task as keyof typeof progressValues, true)
                    }
                    disabled={value === 100}
                  >
                    +
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
