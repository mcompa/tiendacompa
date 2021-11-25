import React from "react"
import { CartWidget } from './CartWidget';

const NavBar = () => {
	return (
		<nav className="navbar sticky-top navbar-dark bg-dark navbar-expand">
			<a className="navbar-brand" href="/#">
				<img src="./logo192.png" width="25" height="25" className="d-inline-block align-top m-1" alt="" />
				TiendaCompa
			</a>
			<button className="navbar-toggler" type="button">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav">
					<a className="nav-item nav-link active" href="/#">Inicio</a>
					<a className="nav-item nav-link" href="/#">Ofertas</a>
					<a className="nav-item nav-link" href="/#">Productos</a>


				</div>
			</div>
			<div className="navbar-text">
				<CartWidget cantidad="2"/>
			</div>
		</nav>
	)
}

export default NavBar