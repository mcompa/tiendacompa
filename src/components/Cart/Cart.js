import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import BuyerData from '../BuyerData/BuyerData';
import Loader from '../Loader/Loader';
import { sendOrder } from '../../services/firebase/firebase';
import { storeOrder, storeBuyer, recoverBuyer, handleError } from '../../services/tools/tools';
import CartDetail from '../CartDetail/CartDetail';

export const Cart = () => {
	const { cartProducts, unitsCount, cartAmount, cartClear } = useContext(CartContext);

	const MySwal = withReactContent(Swal);
	const navigate = useNavigate();
	const [editBuyerData, setEditBuyerData] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [buyer, setBuyer] = useState({});

	useEffect(() => {
		setIsLoading(true);
		recoverBuyer().then(recovered => {
			setBuyer(recovered);
		}).catch(err => {
			handleError('Error recuperando datos', err);
		}).finally(() => {
			setIsLoading(false);
		});
	}, []);

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

	const handleConfirmOrder = () => {
		setIsLoading(true);
		sendOrder(buyer, cartProducts, cartAmount).then((orderResult) => {
			if (orderResult.orderId !== '') {
				storeOrder(orderResult.orderId);
				MySwal.fire({
					title: 'La compra esta siendo procesada',
					html: <div>
							Podrás hacer el seguimiento de tu orden desde la seccion <em>Mis Compras</em>
							<br />
							Tu número de pedido es el <strong>{orderResult.orderId}</strong>
						</div>,
					icon: 'success'
				}).then(() => {
					cartClear();
					navigate('/');
				});
			} else {
				MySwal.fire(
					'La compra fue cancelada!',
					`Los siguientes productos no cuentan con stock suficiente: <br>
						${orderResult.outOfStock.join("<br>")}
					<br />
					Volve a realizar la compra.
					`,
					'error'
				).then(() => {
					cartClear();
					navigate('/');
				});
			}
		}).catch(err => {
			handleError('Error enviando orden', err);
		}).finally(() => {
			setIsLoading(false);
		});
	};

	const handleDatosPersonales = () => {
		setEditBuyerData(!editBuyerData);
	};

	const saveBuyerData = (buyerData) => {
		setBuyer(buyerData);
		storeBuyer(buyerData);
		setEditBuyerData(false);
	};

	if (isLoading) {
		return (
			<Loader />
		);
	}

	return (
		<div className='m-5'>

			<CartDetail items={cartProducts} viewOnly={false} />

			{
				unitsCount() > 0 &&
				<div>
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
							<button className='btn btn-success' disabled={buyer.name === ''} title='Realizar Compra' onClick={(e) => { e.preventDefault(); handleConfirmOrder(); }}>
								Realizar Compra
								<span className="material-icons ">shopping_cart_checkout</span>
							</button>
						</div>
					</div>

					<BuyerData buyerValues={buyer} editMode={editBuyerData} saveBuyer={saveBuyerData}></BuyerData>

				</div>
			}

		</div>
	);
};

export default Cart;