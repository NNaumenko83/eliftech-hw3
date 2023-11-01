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
		</div>
	);
}

export default App;
