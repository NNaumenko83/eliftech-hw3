import "./App.scss";
import ClassButton from "./components/ClassButton/ClassButton";
import Container from "./components/Container/Container";
import FunctionalButton from "./components/FunctionalButton/FunctionalButton";

function App() {
	return (
		<div className="App">
			<Container>
				<ClassButton />
				<FunctionalButton />
			</Container>
			<h3>
				Link to repo:
				<a
					target="blank"
					rel="noopener nofollow noreferrer"
					style={{ textAlign: "center", color: "blue" }}
					href="https://github.com/NNaumenko83/eliftech-hw3"
				>
					GitHub
				</a>
			</h3>
		</div>
	);
}

export default App;
