
import React from 'react';
import Playlist from './containers/Playlist';
import AddSong from './containers/AddSong';
import *as firebase from 'firebase';

console.log(firebase);

export default	class SpotiRank extends React.Component {
	constructor(props){ //Se crea el constructor paa inicializar un estado
		super(props); 
		this.state={ //Asignación de estado inicial
			playlist: ['Shape of You', 'Shaky Shaky', 'Despacito']
		};

		this.addSongToPlayList = this.addSongToPlayList.bind(this);
	}
	componentDidMount() { //se ejecuta cuando el componente ya se ejecutó en la aplicación, no se muestra.
		const config = {
			apiKey: "AIzaSyAOoejn2m5AV1hRkHqlOOV-36xaodHRE7M",
		    authDomain: "spotirank-3d269.firebaseapp.com",
		    databaseURL: "https://spotirank-3d269.firebaseio.com",
		    projectId: "spotirank-3d269",
		    storageBucket: "spotirank-3d269.appspot.com",
		    messagingSenderId: "677011120747"
		}
		const app = firebase.initializeApp(config);
		this.database = app.database();

		const playlistDataBase = this.database.ref('/playlist');
		//Guarda información en una base de datos
		playlistDataBase.set({ 
			songs: ["Shape of you"]
		});

		//Leer la BD
		playlistDataBase.on('value', (snaptshot)=>{ //Es un socket interno, que se ejecuta cada vez que detecta una BD actualizada
			const songs = snaptshot.val(); //El punto val obtiene la data realmente.
			console.log(songs);
		});
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