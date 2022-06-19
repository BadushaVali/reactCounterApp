import React, { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Counter App</h1>
        <h1 className={styles.heading2}>{counter}</h1>
        <div>
          <button
            onClick={() => {
              return setCounter(counter + 1);
            }}
            className={styles.btn}
          >
            +
          </button>
          <button
            onClick={() => {
              return setCounter(0);
            }}
            className={styles.btn}
          >
            0
          </button>
          <button
            onClick={() => {
              return counter > 0 ? setCounter(counter - 1) : 0;
            }}
            className={styles.btn}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
