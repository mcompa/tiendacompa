import React, { useContext, useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import BuyerData from '../BuyerData/BuyerData';
import Loader from '../Loader/Loader';
import { sendOrder } from '../../services/firebase/firebase';

export const Cart = () => {
	const { cartProducts, unitsCount, cartAmount, removeItem, cartClear } = useContext(CartContext);
	
	const MySwal = withReactContent(Swal);
	const navigate = useNavigate();
	
	const [editBuyerData, setEditBuyerData] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [buyer, setBuyer] = useState({
		name: '',
		lastName: '',
		mail: '',
		phone: '',
		address: '',
		comments: ''
	});

	const handleClearCart = () => {
		MySwal.fire({
			title: 'Vas a cancelar la compra y descartar los productos del carrito. \n¿Continuamos?',
			showCancelButton: true,
			confirmButtonText: 'Si',
			cancelButtonText: 'No',
		}).then((result) => {
			if (result.isConfirmed) {
				cartClear();
				MySwal.fire('La compra fue cancelada!', '', 'success')
			}
		});
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

	const handleConfirmOrder = () => {
		setIsLoading(true);
		sendOrder(buyer, cartProducts, cartAmount).then((orderResult) => {
			if(orderResult.orderId!==''){
				MySwal.fire(
					'La compra esta siendo procesada', 
					`Podrás hacer el seguimiento de tu orden desde la seccion 
					<em>Mis Compras</em>
					<br />
					Tu número de pedido es el <strong>${orderResult.orderId}</strong>
					`, 
					'success'
				).then(() => {
					cartClear();
					navigate('/');
				});
			}else{
				MySwal.fire(
					'La compra fue cancelada!', 
					`Los siguientes productos no cuentan con stock suficiente: <br>
						${orderResult.outOfStock.join("<br>")}
					<br />
					Volve a realizar la compra.
					`, 
					'error'
				).then( () => {
					cartClear();
					navigate('/');
				});
			}
		}).catch(err => {
			console.log('Error enviando orden',err);
		}).finally(() => {
			setIsLoading(false);
		});
	};

	const handleDatosPersonales = () => {
		setEditBuyerData(!editBuyerData);
	};

	const saveBuyerData = (buyerData) => {
		setBuyer(buyerData);
		setEditBuyerData(false);
	};


	if (unitsCount() < 1) {
		return (
			<div className='m-5'>
				<h3>No tenes items en el carrito, pero podes empezar a comprar alguna de las ofertas <Link to="/">aqui</Link> </h3>
			</div>
		);
	}

	return (
		<div className='m-5'>
			<table className="table table-hover">
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
						cartProducts.map(prod => {
							return <tr key={prod.sku}>
								<th scope="row">
									<img src={prod.imagen} width="50" height="50" alt={prod.titulo} className="img-thumbnail" />
								</th>
								<td valign='middle'>{prod.descripcion}</td>
								<td valign='middle'>{prod.cantidad}</td>
								<td valign='middle'>$ {prod.precio}</td>
								<td valign='middle'>$ {prod.cantidad * prod.precio}</td>
								<td valign='middle'>
									<span className="material-icons" style={{ "cursor": "pointer" }}
										title='Quitar este item del carrito'
										onClick={(e) => { e.preventDefault(); handleRemoveItem(prod.sku, prod.descripcion); }}>
										delete_forever
									</span>
								</td>
							</tr>
						})
					}
				</tbody>
			</table>

			<hr />
			<div className='row'>
				<div className='col-sm-6 col-lg-2'>Items en el Carrito: {unitsCount()}</div>
				<div className='col-sm-6 col-lg-2'><strong>Total: $ {cartAmount()}</strong></div>
			</div>
			<div className='row'>
				<div className='col-4'>
					<a href="/#" className='btn btn-info' title='Completar datos Personales' onClick={(e) => { e.preventDefault(); handleDatosPersonales(); }}>
						Datos Personales
						<span className="material-icons ">perm_contact_calendar</span>
					</a>
				</div>
				<div className='col-4'>
					<a href="/#" className='btn btn-danger' title='Cancelar Compra' onClick={(e) => { e.preventDefault(); handleClearCart(); }}>
						Cancelar Compra
						<span className="material-icons ">remove_shopping_cart</span>
					</a>
				</div>
				<div className='col-4'>
					<button className='btn btn-success' disabled={buyer.name===''} title='Realizar Compra' onClick={(e) => { e.preventDefault(); handleConfirmOrder(); }}>
						Realizar Compra
						<span className="material-icons ">shopping_cart_checkout</span>
					</button>
				</div>
			</div>
			<BuyerData buyerValues={buyer} editMode={editBuyerData} saveBuyer={saveBuyerData}></BuyerData>
			{ isLoading && <Loader /> }
		</div>
	);
};

export default Cart;