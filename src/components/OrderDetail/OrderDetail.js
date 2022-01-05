import React from 'react';
import { Link } from 'react-router-dom';
import CartDetail from '../CartDetail/CartDetail';
import { dateFormat } from '../../services/tools/tools';

const OrderDetail = ({ order }) => {
	const { items, date, status, id } = order;

	if (!status) {
		return (
			<div className="container m-3 " >
				<div className="card">
					<div className="card-body">
						<h3 className="card-title">Orden no encontrada :(</h3>
						<h6 className="card-subtitle">
							La orden que buscas no existe. Hace click <Link to="/orders">aqui</Link> para buscar la orden.
						</h6>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className="container mb-3 " >
			<div className="card">
				<div className="card-body">
					<h3 className="card-title">Orden {id}</h3>
					<h6 className="card-subtitle">
						Estado: {status}
					</h6>
					<h6 className="card-subtitle mt-3">
						Creada: {dateFormat(date, 'c')}
					</h6>
					<div className="row">
						<div className="col-12">
							<h3 className="box-title mt-5">Detalle</h3>
							<CartDetail items={items} viewOnly={true} />
						</div>
					</div>
				</div>
				<div className="card-footer text-muted">
					<Link to="/orders">volver</Link>
				</div>
			</div>
		</div>
	)
}

export default OrderDetail;