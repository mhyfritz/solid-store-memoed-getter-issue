import { createMemo } from "solid-js";
import { createStore } from "solid-js/store";
import styles from "./App.module.css";
import logo from "./logo.svg";

function App() {
  let fullName;
  const [state, setState] = createStore({
    user: {
      firstName: "John",
      lastName: "Smith",
      get fullName() {
        return fullName();
      },
    },
  });
  fullName = createMemo(() => `${state.user.firstName} ${state.user.lastName}`);

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
}

export default App;
