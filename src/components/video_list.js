import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import VideoListItem from './video_list_item.js';

class VideoList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: this.props.videos,
		};
	}

	render() {
		return (
      <div>
        <ul className="col-md-4 list-group">
          <li>yo yo {this.props.videos.length}</li>
        </ul>
      </div>
		);
	}

}

export default VideoList;