import React from "react";



//create your first component
const Home = () => {
	return (
		<div className="container">
			<h1 className="text-center">MY TODOS</h1>
			<ul className="p-0 mb-0">
				<li><input type="text" placeholder="What do you need to do?"></input></li>
				<li>Ordenar el cuarto</li>
				<li>Enviar correos</li>
				<li>Ir al Gym</li>
				<li>Pagar el alquiler</li>
			</ul>
			<div>23 tasks</div>
		</div>
	);
};

export default Home;
