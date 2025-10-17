import { Router } from "./components/Router.tsx";
import { StateProvider } from "./context/StateContext";
import "./styles/main.scss";

function App() {
	return (
		<StateProvider>
			<Router />
		</StateProvider>
	);
}

export default App;
