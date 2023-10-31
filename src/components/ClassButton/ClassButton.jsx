import { Component } from "react";
import Buttontext from "../ButtonText/Buttontext";

class ClassButton extends Component {
  state = { counter: 0 };

  clickButtonHandler = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <button type="button" onClick={this.clickButtonHandler}>
        ClassButton click:
        <Buttontext value={this.state.counter} />
      </button>
    );
  }
}

export default ClassButton;
