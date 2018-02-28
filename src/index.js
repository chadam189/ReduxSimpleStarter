import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import YOUTUBE_KEY from './../config.js';
import SearchBar from './components/search_bar.js';

// create new component, it should produce HTML

const API_KEY = YOUTUBE_KEY;



class App extends Component {
  constructor(props) {
  	super(props); 

  	this.state = {
      videos: []
  	};

  	YTSearch({ key: API_KEY, term: 'surfboards' }, videos => this.setState({ videos })
  	);
  }

	render () {
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
}

// take this component's HTML and put it on the page (aka in the DOM)

ReactDOM.render(<App />, document.getElementsByClassName('container')[0]);
