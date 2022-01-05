import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';
const Item = ({ itemdata }) => {

	const { sku, titulo, descripcion, stock, imagen } = itemdata;

	return (
		<div className="col-sm-12 col-md-6 col-lg-4">
			<div className="card border-primary m-2">
				<img className="card-img-top" src={imagen} alt={titulo} />
				<div className="card-body">
					<h5 className="card-title">{titulo}</h5>
					<p className="card-text">{descripcion}</p>
					<Link to={`/item/${sku}`} className="btn btn-primary">Ver detalle</Link>
				</div>
				<div className="card-footer text-muted">
					<p >Stock Disponible: {stock} Unidades</p>
				</div>
			</div>
		</div>
	)
}

export default Item;