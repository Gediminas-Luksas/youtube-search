import React from 'react';
import VideoListItems from './videoListItem';

const VideoLists = (props) => {
	const videoItems = props.videos.map((video) => {
		return <VideoListItems key={video.etag} video={video} />;
	});

	return <ul className="col-md-4 list-group">{videoItems}</ul>;
};

export default VideoLists;
