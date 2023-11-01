import { Component } from "react";
import { ButtonText } from "../ButtonText/ButtonText";
import styles from "./_ClassButton.module.scss";

class ClassButton extends Component {
  state = { counter: 0 };

  clickButtonHandler = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <button
        className={styles.classButton}
        type="button"
        onClick={this.clickButtonHandler}
      >
        ClassButton click:
        <ButtonText value={this.state.counter} />
      </button>
    );
  }
}

export default ClassButton;
