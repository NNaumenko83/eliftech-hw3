import React, { useState } from "react";

import styles from "./_FunctionalButton.module.scss";
import { Text } from "../Text/Text";

const FunctionalButton = () => {
	const [counter, setCounter] = useState(0);
	return (
		<button className={styles.functionalButton} type="button" onClick={() => setCounter(counter + 1)}>
			FunctionalButton click: <Text value={counter} />
		</button>
	);
};

export default FunctionalButton;
