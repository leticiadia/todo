import { Header } from "./components/header/Header";
import { Task } from "./components/task/Task";

import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <main>
          <Task />
        </main>
      </div>
    </div>
  );
}

export default App;
