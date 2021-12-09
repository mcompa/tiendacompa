import React from 'react'
import './Item.css'
const Item = ({ datos }) => {

	const { titulo, descripcion, stock, imagen } = datos;
	return (
		<div className="col-sm-12 col-md-6 col-lg-4">
			<div className="card border-primary m-2">
				<img className="card-img-top" src={imagen} alt={titulo} />
				<div className="card-body">
					<h5 className="card-title">{titulo}</h5>
					<p className="card-text">{descripcion}</p>
					<a href="/#" className="btn btn-primary">Ver detalle</a>
				</div>
				<div className="card-footer text-muted">
					<p >Stock Disponible: {stock} Unidades</p>
				</div>
			</div>
		</div>
	)
}

export default Item;