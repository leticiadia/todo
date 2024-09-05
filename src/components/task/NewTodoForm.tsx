import { ChangeEvent, FormEvent, useState } from "react";
import { PlusCircle } from "@phosphor-icons/react";

import styles from "./NewTodoForm.module.css";

interface NewTodoFormProps {
  onAddTask: (newTaskText: string) => void;
}

export function NewTodoForm({ onAddTask }: NewTodoFormProps) {
  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    onAddTask(newTaskText);

    setNewTaskText("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
      <input
        type="text"
        value={newTaskText}
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
  );
}
