import React from 'react';
import ReactDOM from 'react-dom';

import YOUTUBE_KEY from '../config.js'
import SearchBar from './components/search_bar.js'

// create new component, it should produce HTML

const API_KEY = YOUTUBE_KEY;

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

// take this component's HTML and put it on the page (aka in the DOM)

ReactDOM.render(<App />, document.getElementsByClassName('container')[0]);
