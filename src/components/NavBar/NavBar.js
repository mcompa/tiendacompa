import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { getCategories } from '../../services/firebase/firebase';
import CartWidget from '../CartWidget/CartWidget';
import Loader from "../Loader/Loader";
import { handleError } from "../../services/tools/tools";

const NavBar = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [lstCat, setLstCat] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		getCategories().then(response => {
			setLstCat(response);
		}).catch(err => {
			handleError('Error obteniendo Categorias:', err);
		}).finally(() => {
			setIsLoading(false);
		});

	}, []);

	return (
		<nav className="navbar sticky-top navbar-dark bg-dark navbar-expand">
			<Link className="navbar-brand" to="/">
				<img src="/images/logo-192.png" width="25" height="25" className="d-inline-block align-top m-1" alt="" />
				TiendaCompa
			</Link>
			<button className="navbar-toggler" type="button">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav">
					<NavLink to="/" className='nav-item nav-link'>Inicio</NavLink>

					{
						isLoading ?
							<Loader /> :
							lstCat.map(c => {
								return <NavLink to={`/category/${c.id2}`} key={c.id} className='nav-item nav-link'>{c.nombre}</NavLink>
							})
					}
				</div>
			</div>
			<div className="navbar-text">
				<NavLink to="/orders" className='nav-item nav-link'>Mis Compras</NavLink>
			</div>
			<div className="navbar-text">
				<CartWidget />
			</div>
		</nav>
	)
}

export default NavBar