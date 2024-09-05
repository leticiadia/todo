import { useState } from "react";

import { NewTodoForm } from "./NewTodoForm";
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

  function handleToggleCompletion(id: string) {
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
      <NewTodoForm onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        handleToggleCompletion={handleToggleCompletion}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
