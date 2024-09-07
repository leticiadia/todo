import { TaskItem } from "./TaskItem";

import { TaskProps } from "./Task";

import ImageClipboard from "../../assets/clipboard.svg";

import styles from "./TaskList.module.css";

interface TaskListProps {
  tasks: TaskProps[];
  handleToggleDone: (id: string) => void;
  handleDeleteTask: (id: string) => void;
}

export function TaskList({
  tasks,
  handleToggleDone,
  handleDeleteTask,
}: TaskListProps) {
  const completedTask = tasks.filter((task) => task.completed).length;

  return (
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
                <TaskItem
                  {...task}
                  key={task.id}
                  handleToggleDone={handleToggleDone}
                  handleDeleteTask={handleDeleteTask}
                />
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
