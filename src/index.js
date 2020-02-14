import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLocation from './useLocation';

const App = () => {
	const { lat, errorMsg } = useLocation();

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
