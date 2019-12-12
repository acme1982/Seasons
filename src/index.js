import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends Component {
	constructor(props) {
		super(props);
		//This is the only time we declare state.
		this.state = { lat: null };
		window.navigator.geolocation.getCurrentPosition(
			position => {
				this.setState({ lat: position.coords.latitude });
			},
			err => console.log(err)
		);
	}

	//React says we have to define render!!
	render() {
		return <div>Latitude: {this.state.lat}</div>;
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
