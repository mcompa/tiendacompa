import React from 'react'

const Item = ({ datos }) => {

	const { titulo, descripcion, stock, imagen } = datos;
	return (
		<div className="card" style={{ margin: "5px", color: "#000" }}>
			<img className="card-img-top" src={imagen} alt={titulo} />
			<div className="card-body">
				<h5 className="card-title">{titulo}</h5>
				<p className="card-text">{descripcion}</p>
				<a href="/#" className="btn btn-primary">Ver detalle</a>
			</div>
			<div className="card-footer text-muted">
				<p style={{ "fontSize": "0.5em" }}>Stock Disponible: {stock} Unidades</p>
			</div>
		</div>
	)
}

export default Item;