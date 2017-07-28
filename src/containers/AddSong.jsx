import React, { Component } from 'react';


export default class AddSong extends Component {
	constructor (props){ //Las propiedades son del componente padre
		super(props); // Permite acceder a las propiedades del padre. Va a llamar al constructor de la clase Component
		this.state = {
			newSong: "",
		};	
	}

	handleSubmit(e){
		e.preventDefault();
	}

	updateState(e){
		const newSong = e.target.value;
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<input type="text" onChange={this.updateState}/>
				<button type="submit">Crear </button>
			</form>
		)
	}
}