import React, { Component } from 'react';
import Song from '../components/Song'


export default class Playlist extends Component {
	render() {
		const playlist = ['Shape of You', 'Shaky Shaky', 'Despacito'];
		return(
			<ul>
				{playlist.map(item => <Song name={item}/>)}
			</ul>
		)
	}
}