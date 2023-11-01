import { Component } from "react";

import styles from "./_ClassButton.module.scss";
import { Text } from "../Text/Text";

class ClassButton extends Component {
	state = { counter: 0 };

	clickButtonHandler = () => {
		this.setState({ counter: this.state.counter + 1 });
	};

	render() {
		return (
			<button className={styles.classButton} type="button" onClick={this.clickButtonHandler}>
				ClassButton click:
				<Text value={this.state.counter} />
			</button>
		);
	}
}

export default ClassButton;
