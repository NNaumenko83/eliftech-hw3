import React, { useState } from "react";
import Buttontext from "../ButtonText/Buttontext";

const FunctionalButton = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        FunctionalButton click: <Buttontext value={counter} />
      </button>
    </div>
  );
};

export default FunctionalButton;
