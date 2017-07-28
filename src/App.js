
import React from 'react';
import Playlist from './containers/Playlist';
import AddSong from './containers/AddSong';

export default	class SpotiRank extends React.Component {
	constructor(props){ //Se crea el constructor paa inicializar un estado
		super(props); 
		this.state={ //Asignación de estado inicial
			playlist: ['Shape of You', 'Shaky Shaky', 'Despacito']
		};

		this.addSongToPlayList = this.addSongToPlayList.bind(this);
	}

	addSongToPlayList= (song) =>{ //Este metodo accede al estado, el método recibe una canción y la agrega a un arreglo
		let playlist = this.state.playlist;
		playlist.push(song);
		this.setState({ //Con este método actualiza el nuevo valor del estado y se ejecuta mediante el componente AddSong
			playlist: playlist
		});
	}

	render(){
		const songs = this.state.playlist; //Ontiene el valor del estado actual de Playlist y lo pasa como prop al componente Playlist
		
		return(
			<div>
				<h1>SportiRank</h1>
				<AddSong addSongToPlayList={this.addSongToPlayList}/>  //Agrega las nueva canciones y actualiza el estado
				<Playlist songs={songs}/>
			</div>
			)
		}
	}