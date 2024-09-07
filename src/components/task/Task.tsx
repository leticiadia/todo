import { useState } from "react";

import { NewTakForm } from "./NewTaskForm";
import { TaskList } from "./TaskList";

export interface TaskProps {
  id: string;
  content: string;
  completed: boolean;
}

export function Task() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function handleAddTask(content: string) {
    setTasks((currentTask) => {
      return [
        ...currentTask,
        {
          id: crypto.randomUUID(),
          content,
          completed: false,
        },
      ];
    });
  }

  function handleToggleDone(id: string) {
    setTasks((currentTask) => {
      return currentTask.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    });
  }

  function handleDeleteTask(id: string) {
    setTasks((currentTask) => {
      return currentTask.filter((task) => task.id !== id);
    });
  }

  return (
    <div>
      <NewTakForm onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        handleToggleDone={handleToggleDone}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
