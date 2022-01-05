import React, { useState } from "react";

const ItemCount = ({ title, stock, inicial, onAdd }) => {

	const [amount, setAmount] = useState(inicial);

	const changeAmount = (Agregado) => {
		let amountTotal = amount + Agregado
		if (amountTotal <= stock && amountTotal > 0) {
			setAmount(amountTotal);
		}
	};

	return (
		<div className="card" style={{ "width": "14rem", "margin": "5px" }} >
			<div className="card-body">
				<h5 className="card-title text-black">{title}</h5>

				{
					(amount > stock) &&
					<h5 className="card-title text-danger">SIN STOCK</h5>
				}

				<div className="card-text">
					<div className="input-group mb-3">
						<span className="material-icons input-group-text" style={{ "cursor": "pointer" }} onClick={() => { changeAmount(-1) }}>expand_more</span>
						<input type="text" className="form-control" value={amount} readOnly />
						<span className="material-icons input-group-text" style={{ "cursor": "pointer" }} onClick={() => { changeAmount(1) }}>expand_less</span>
					</div>
				</div>

				<a href="/#" className={'btn btn-primary ' + (amount <= stock ? '' : 'disabled')} onClick={(e) => { e.preventDefault(); onAdd(amount); }}>
					<i className="material-icons">shopping_cart</i>
					Agregar
				</a>

			</div>
		</div>
	)
}

export default ItemCount;