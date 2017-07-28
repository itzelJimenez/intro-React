import React from 'react';
import Playlist from './containers/Playlist';
import AddSong from './containers/AddSong';

export default	class SpotiRank extends React.Component {
		render(){
			return(
				<div>
					<h1>SportiRank</h1>
					<AddSong/>
					<Playlist/>
				</div>
			)
		}
	}