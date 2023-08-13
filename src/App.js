import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGames } from "../src/store/dataSlice";
import './App.scss';
import List from "./components/list";

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getGames())
	}, [])
	return (
		<div className="container">
			<List />
		</div>
	);
}

export default App;
