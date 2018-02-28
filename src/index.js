import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar.js';
import VideoDetail from './components/video_detail.js';
import VideoList from './components/video_list.js';

import YOUTUBE_KEY from './../config.js';
const API_KEY = YOUTUBE_KEY;

// create new component, it should produce HTML

class App extends Component {
  constructor(props) {
  	super(props); 

  	this.state = {
      videos: [],
      selectedVideo: null,
  	};

  	this.videoSearch=this.videoSearch.bind(this);

  	this.videoSearch('surfboards');

  }

  componentWillMount() {
  	
  }

  videoSearch(term) {
  	YTSearch({ key: API_KEY, term }, (videos) => {
  		this.setState({ videos, selectedVideo: videos[0] }); }
  	);
  }

	render () {

    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

		return (
			<div>
				<SearchBar 
          onSearchTermChange={videoSearch}
				/>
        <VideoDetail 
          video={this.state.selectedVideo}
        />
				<VideoList 
				  onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
				/>
			</div>
		);
	}
}

// take this component's HTML and put it on the page (aka in the DOM)

ReactDOM.render(<App />, document.getElementsByClassName('container')[0]);
