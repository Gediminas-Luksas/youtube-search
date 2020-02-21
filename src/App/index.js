import React from 'react';
import './style.css';
import YTSearch from 'youtube-api-search';
import SearchBar from '../components/searchBar';
import VideoLists from '../components/videoLists';

const API_KEY = 'AIzaSyDamc87dU_AhilYerByovozUum1SheQ6Dk';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			videos: [],
		};

		YTSearch(
			{
				key: API_KEY,
				term: 'snow',
			},
			(videos) => {
				this.setState({ videos });
			},
		);
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoLists videos={this.state.videos} />
			</div>
		);
	}
}

export default App;
