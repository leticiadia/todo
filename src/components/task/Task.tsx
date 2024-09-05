import { useState } from "react";
import { CheckCircle, Circle, Trash } from "@phosphor-icons/react";

import styles from "./Task.module.css";

import ImageClipboard from "../../assets/clipboard.svg";
import { NewTodoForm } from "./NewTodoForm";

interface TaskProps {
  id: number;
  content: string;
  completed: boolean;
}

export function Task() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const completedTask = tasks.filter((task) => task.completed).length;

  function handleAddTodo(content: string) {
    setTasks((currentTask) => {
      return [
        ...currentTask,
        {
          id: crypto.randomUUID(),
          content,
        },
      ];
    });
  }

  function handleToggleCompletion(id: number) {
    setTasks((currentTask) => {
      return currentTask.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    });
  }

  function handleDeleteTask(id: number) {
    setTasks((currentTask) => {
      return currentTask.filter((task) => task.id !== id);
    });
  }

  return (
    <div>
      <NewTodoForm onAddTask={handleAddTodo} />
      <div className={styles.taskList}>
        <div className={styles.headerTaskList}>
          <div className={styles.createdTask}>
            <p>Tarefas criadas</p>
            <span>{tasks.length}</span>
          </div>

          <div className={styles.doneTask}>
            <p>Concluídas</p>
            <span>{completedTask}</span>
          </div>
        </div>

        <div className={styles.contentTaskList}>
          {tasks.length === 0 ? (
            <div className={styles.notFoundTask}>
              <img
                src={ImageClipboard}
                alt="Imagem de um ícone no formato de uma prancheta na cor cinza e com bordas arrendondadas"
              />
              <div className={styles.contentText}>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </div>
          ) : (
            <ul>
              {tasks.map((task) => {
                return (
                  <li key={task.id}>
                    <button
                      className={styles.CheckButton}
                      onClick={() => handleToggleCompletion(task.id)}
                    >
                      {task.completed ? (
                        <CheckCircle size={20} weight="fill" color="#5e60ce" />
                      ) : (
                        <Circle size={20} weight="bold" />
                      )}
                    </button>

                    {task.completed ? (
                      <strike className={styles.strikethroughText}>
                        <p>{task.content}</p>
                      </strike>
                    ) : (
                      <p>{task.content}</p>
                    )}

                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className={styles.trashIcon}
                      title="Deletar task"
                    >
                      <Trash size={18} />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
