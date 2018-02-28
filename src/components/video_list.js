import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import VideoListItem from './video_list_item.js';

// class VideoList extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			videos: this.props.videos.map(video => <VideoListItem video={video} />),
// 		};
// 	}

// 	render() {
// 		return (
//       <div>
//         <ul className="col-md-4 list-group">
//           {this.state.videos}
//         </ul>
//       </div>
// 		);
// 	}

// }

const VideoList = (props) => {

	let videoItems = props.videos.map(video => <VideoListItem 
		  onVideoSelect={props.onVideoSelect}
		  video={video} 
		  key={video.etag} 
		/>);

	// render() {
		return (
      <div>
        <ul className="col-md-4 list-group">
          {videoItems}
        </ul>
      </div>
		);
	// }

}

export default VideoList;