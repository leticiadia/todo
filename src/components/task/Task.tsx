import { CheckCircle, Circle, PlusCircle, Trash } from "@phosphor-icons/react";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./Task.module.css";

export function Task(): any {
  const [tasks, setTasks] = useState([]);
  const [newTasksText, setNewTasksText] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks((currentTask) => {
      return [
        ...currentTask,
        { id: crypto.randomUUID(), content: newTasksText, completed: false },
      ];
    });

    setNewTasksText("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTasksText(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
        <input
          type="text"
          value={newTasksText}
          onChange={handleNewTaskChange}
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

        <div className={styles.contentTaskList}>
          <ul>
            {tasks.map((task) => {
              return (
                <li key={task.id} className={styles.taskList}>
                  <button className={styles.circleIcon}>
                    <Circle size={20} weight="bold" />
                    <CheckCircle size={20} weight="fill" />
                  </button>

                  <p>{task.content}</p>

                  <button className={styles.trashIcon} title="Deletar task">
                    <Trash size={18} />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
