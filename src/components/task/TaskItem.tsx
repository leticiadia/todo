import { CheckCircle, Circle, Trash } from "@phosphor-icons/react";

import styles from "./TaskItem.module.css";

interface TaskItemProps {
  id: string;
  content: string;
  completed: boolean;
  handleToggleDone: (id: string) => void;
  handleDeleteTask: (id: string) => void;
}

export function TaskItem({
  completed,
  content,
  id,
  handleToggleDone,
  handleDeleteTask,
}: TaskItemProps) {
  return (
    <li>
      <button
        className={styles.CheckButton}
        onClick={() => handleToggleDone(id)}
      >
        {completed ? (
          <CheckCircle size={20} weight="fill" color="#5e60ce" />
        ) : (
          <Circle size={20} weight="bold" />
        )}
      </button>

      {completed ? (
        <s className={styles.strikethroughText}>
          <p>{content}</p>
        </s>
      ) : (
        <p>{content}</p>
      )}

      <button
        onClick={() => handleDeleteTask(id)}
        className={styles.trashIcon}
        title="Deletar task"
      >
        <Trash size={18} />
      </button>
    </li>
  );
}
