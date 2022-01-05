import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const CartDetail = ({ items, viewOnly }) => {

	const { removeItem } = useContext(CartContext);
	const MySwal = withReactContent(Swal);

	const unitsInCart = () => {
		return items.reduce((sum, art) => sum + art.cantidad, 0);
	};

	const amountCart = () => {
		return items.reduce((sum, art) => sum + (art.cantidad * art.precio), 0);
	};

	const handleRemoveItem = (sku, desc) => {
		MySwal.fire({
			title: `Se va a quitar ${desc}. \n¿Continuamos?`,
			showCancelButton: true,
			confirmButtonText: 'Si',
			cancelButtonText: 'No',
		}).then((result) => {
			if (result.isConfirmed) {
				removeItem(sku);
			}
		});
	};

	if (unitsInCart() < 1) {
		return (
			<div className='m-5'>
				<h3>No tenes items en el carrito, pero podes empezar a comprar alguna de las ofertas <Link to="/">aqui</Link> </h3>
			</div>
		);
	}

	return (
		<div className='m-5'>
			<table className="table table-striped">
				<thead>
					<tr>
						<th scope="col"> </th>
						<th scope="col">Descripcion</th>
						<th scope="col">Cantidad</th>
						<th scope="col">Importe Unitario</th>
						<th scope="col">Importe</th>
						<th scope="col"> </th>
					</tr>
				</thead>
				<tbody>
					{
						items.map(prod => {
							return <tr key={prod.sku}>
								<th scope="row">
									<img src={prod.imagen} width="50" height="50" alt={prod.titulo} className="img-thumbnail" />
								</th>
								<td valign='middle'>{prod.descripcion}</td>
								<td valign='middle'>{prod.cantidad}</td>
								<td valign='middle'>$ {prod.precio}</td>
								<td valign='middle'>$ {prod.cantidad * prod.precio}</td>
								<td valign='middle'>
									{
										!viewOnly &&

										<span className="material-icons" style={{ "cursor": "pointer" }}
											title='Quitar este item del carrito'
											onClick={(e) => { e.preventDefault(); handleRemoveItem(prod.sku, prod.descripcion); }}>
											delete_forever
										</span>
									}
								</td>
							</tr>
						})
					}
				</tbody>
			</table>

			<hr />

			<div className='row'>
				<div className='col-sm-6 col-lg-2'>Items en el Carrito: {unitsInCart()}</div>
				<div className='col-sm-6 col-lg-2'><strong>Total: $ {amountCart()}</strong></div>
			</div>
		</div>
	);
};

export default CartDetail;