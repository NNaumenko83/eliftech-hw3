import React, { useState } from "react";

const FunctionalButton = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        FunctionalButton click: {counter}
      </button>
    </div>
  );
};

export default FunctionalButton;
