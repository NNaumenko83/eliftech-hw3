import React, { useState } from "react";
import ButtonText from "../ButtonText/ButtonText";

const FunctionalButton = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        FunctionalButton click: <ButtonText value={counter} />
      </button>
    </div>
  );
};

export default FunctionalButton;
