import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import Games from './components/game';
import Navigation from './components/navigation';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store} >
		<Navigation />
		<BrowserRouter basename="/">
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/game" element={<Games />} />
			</Routes>
		</BrowserRouter>
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
