import React from "react";
import {TiDelete} from 'react-icons/ti';

//create your first component
const Home = () => {
	return (
		<>
		<div className="container">
			<h1 className="text-center">MY TODOS</h1>
			<ul className="p-0 mb-0">
				<li><input type="text" placeholder="What do you need to do?"></input></li>
				<li>Ordenar el cuarto <TiDelete className="iconColor"></TiDelete></li>
				<li>Enviar correos <TiDelete className="iconColor"></TiDelete></li>
				<li>Ir al Gym <TiDelete className="iconColor"></TiDelete></li>
				<li>Pagar el alquiler <TiDelete className="iconColor"></TiDelete></li>
			</ul>
			<div>23 tasks</div>
		</div>
		</>
	);
};

export default Home;
