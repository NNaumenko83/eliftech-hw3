import React, { useState } from "react";
import { ButtonText } from "../ButtonText/ButtonText";
import styles from "./_FunctionalButton.module.scss";

const FunctionalButton = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button
        className={styles.functionalButton}
        type="button"
        onClick={() => setCounter(counter + 1)}
      >
        FunctionalButton click: <ButtonText value={counter} />
      </button>
    </div>
  );
};

export default FunctionalButton;
