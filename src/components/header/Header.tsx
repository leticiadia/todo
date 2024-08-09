import styles from "./Header.module.css";

import logoToDo from "../../assets/Logo.png";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoToDo} alt="Logotipo do ToDo" />
    </header>
  );
}
