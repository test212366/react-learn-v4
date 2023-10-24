import { useState } from "react"
import { Home } from "./components/Home.jsx";

const App = () => {
	let [inputValue, setInputValue] = useState('inputV')

	return (
		<div className="test">
			<div className="test-input">
				<h1>{inputValue}</h1>
				<input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
			</div>
			<Home />
		</div>
	);
}

export default App;
