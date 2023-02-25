import React, { useState } from "react";
import { TiDelete } from 'react-icons/ti';

//create your first component
const Home = () => {

	const [imputValue, setImputValue] = useState("")
	const [todos, setTodos] = useState([])
	
	return (
		<>
			<div className="container">
				<h1 className="text-center">MY TODOS {imputValue}</h1>
				<ul className="p-0 mb-0">
					<li><input 
					onChange={(e)=>setImputValue(e.target.value)}
					value = {imputValue}
					type="text" 
					placeholder="What do you need to do?"></input></li>
					<li>Ordenar el cuarto <TiDelete className="iconColor"></TiDelete></li>
					<li>Enviar correos <TiDelete className="iconColor"></TiDelete></li>
					<li>Ir al Gym <TiDelete className="iconColor"></TiDelete></li>
					<li>Pagar el alquiler <TiDelete className="iconColor"></TiDelete></li>
				</ul>
				<div>4 item left</div>
			</div>
		</>
	);
};

export default Home;
