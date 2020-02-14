import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

const App = () => {
	const [lat, setLat] = useState(null);
	const [errorMsg, setErrorMsg] = useState('');

	useEffect(() => {
		window.navigator.geolocation.getCurrentPosition(
			position => setLat(position.coords.latitude),
			err => setErrorMsg(err.message)
		);
	}, []);

	let content;
	if (errorMsg) {
		return <div>Error: {errorMsg}</div>;
	} else if (lat) {
		content = <SeasonDisplay latitude={lat} />;
	} else {
		content = <Spinner message="Please accept location request." />;
	}
	return <div>{content}</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
