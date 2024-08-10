import { PlusCircle } from "@phosphor-icons/react";
import styles from "./Task.module.css";

export function Task(): any {
  return (
    <div>
      <form className={styles.taskForm}>
        <input
          type="text"
          name="tasks"
          placeholder="Adicione uma nova tarefa"
        />

        <footer>
          <button type="submit">
            Criar
            <PlusCircle size={18} />
          </button>
        </footer>
      </form>
    </div>
  );
}
