import { PlusCircle } from "@phosphor-icons/react";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./Task.module.css";

interface TasksProps {
  id: number;
  title: string;
  completed: boolean;
}

export function Task(): any {
  const [tasks, setTasks] = useState(["Nova Task"]);
  const [newTasksText, setNewTasksText] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks((currentTask) => {
      return [
        ...currentTask,
        { id: crypto.randomUUID(), content: newTasksText, completed: false },
      ];
    });
  }

  console.log(tasks);

  function handlNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTasksText(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
        <input
          type="text"
          value={newTasksText}
          onChange={handlNewTaskChange}
          placeholder="Adicione uma nova tarefa"
        />

        <footer>
          <button type="submit">
            Criar
            <PlusCircle size={18} />
          </button>
        </footer>
      </form>

      <div className={styles.taskList}>
        <div className={styles.headerTaskList}>
          <div className={styles.createdTask}>
            <p>Tarefas criadas</p>
            <span>0</span>
          </div>

          <div className={styles.doneTask}>
            <p>Concluídas</p>
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
