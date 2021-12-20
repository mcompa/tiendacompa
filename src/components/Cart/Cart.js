import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const Cart = () => {
	const {productos, cantidadUnidades, importeCarrito, removeItem, clear} = useContext(CartContext);
	const MySwal = withReactContent(Swal);

	const handleBorrarCarrito = () => {
		MySwal.fire({
			title: 'El carrito se va a vaciar. \n¿Continuamos?',
			showCancelButton: true,
			confirmButtonText: 'Si',
			cancelButtonText: 'No',
		  }).then((result) => {
			if (result.isConfirmed) {
				clear();
				MySwal.fire('El carrito fue vaciado!', '', 'success')
			}
		  });
	};

	const handleQuitarItem = (sku, desc) => {
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


	if(cantidadUnidades() < 1){
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
						productos.map( prod =>{
							return <tr key={prod.sku}>
								<th scope="row">
									<img src={prod.imagen} width="50" height="50" alt={prod.titulo} className="img-thumbnail" />
								</th>
								<td valign='middle'>{prod.descripcion}</td>
								<td valign='middle'>{prod.cantidad}</td>
								<td valign='middle'>$ {prod.precio}</td>
								<td valign='middle'>$ {prod.cantidad * prod.precio}</td>
								<td valign='middle'>
									<span className="material-icons" style={{"cursor": "pointer"}} title='Quitar este item del carrito' 
										onClick={(e)=>{ e.preventDefault(); handleQuitarItem(prod.sku, prod.descripcion);}}
									>delete_forever</span>
								</td>
							</tr>
						})
					}
				</tbody>
			</table>

			<hr />
			<div className='row'>
				<div className='col-4'>Items en el Carrito: {cantidadUnidades()}</div>
				<div className='col-4'>Importe total del Carrito: $ {importeCarrito()}</div>
				<div className='col-4'>
					<a href="/#" title='Vaciar carrito' onClick={(e)=>{ e.preventDefault(); handleBorrarCarrito();}}>
						Vaciar Carrito <span className="material-icons danger">remove_shopping_cart</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Cart;