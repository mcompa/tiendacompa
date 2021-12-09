import React, { useEffect,useState } from "react"
import { getCategories } from '../../apis/local';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {

	const [lstCat, setLstCat] = useState([]);

	useEffect(() => {
		getCategories().then(response => {
			setLstCat(response);
		}).catch(err => {
			console.log('ups!');
		});

	}, [])


	return (
		<nav className="navbar sticky-top navbar-dark bg-dark navbar-expand">
			<a className="navbar-brand" href="/#">
				<img src="./images/logo-192.png" width="25" height="25" className="d-inline-block align-top m-1" alt="" />
				TiendaCompa
			</a>
			<button className="navbar-toggler" type="button">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav">

					{
						lstCat.map(c => {
							return <a key={c.id} className='nav-item nav-link' href="/#">{c.nombre}</a>
						})
					}

					{
						//<a className="nav-item nav-link active" href="/#">Inicio</a>
					}

				</div>
			</div>
			<div className="navbar-text">
				<CartWidget cantidad="2" />
			</div>
		</nav>
	)
}

export default NavBar