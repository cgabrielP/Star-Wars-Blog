import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import injectContext from "./store/appContext";
import  Navbar  from "./component/navbar";
import Personajes from "./views/Personajes";
import Footer from "./component/Footer";
import Vehiculos from "./views/Vehiculos";
import Planetas from "./views/Planetas";
import DetallePersonaje from "./views/DetallePersonaje";
import DetallePlaneta from "./views/DetallePlaneta";
import DetalleVehiculo from "./views/DetalleVehiculo";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/personajes" element={<Personajes />} />
						<Route path="/vehiculos" element={<Vehiculos />} />
						<Route path="/planetas" element={<Planetas />} />
						<Route path="personajes/personaje/:uid/detail" element={<DetallePersonaje />} />
						<Route path="personaje/:uid/detail" element={<DetallePersonaje />} />
						<Route path="planetas/planeta/:uid/detail" element={<DetallePlaneta />} />
						<Route path="planeta/:uid/detail" element={<DetallePlaneta />} />
						<Route path="vehiculos/vehiculo/:uid/detail" element={<DetalleVehiculo />} />
						<Route path="vehiculo/:uid/detail" element={<DetalleVehiculo />} />

						<Route path="*" element={<h1>Mantenimiento</h1>} />
					</Routes>
					<Footer/>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
