import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { dateFormat } from '../../services/tools/tools';

const OrderList = ({ orders, findOrder }) => {

	const [search, setSearch] = useState('');

	return (
		<div className="row m-3">
			<h3>Ordenes realizadas</h3>

			<form className="row g-3">
				<div className="col-9">
					<label className="form-label" htmlFor="orden">Buscar orden</label>
					<input type="text" className="form-control" name='orden' value={search} onChange={(e) => { setSearch(e.target.value); }} id="orden" maxLength="100" />
				</div>
				<div className="col-3">
					<button type="button" className="btn btn-primary mt-4" onClick={(e) => { e.preventDefault(); findOrder(search); }}>
						<i className="material-icons">search</i>
					</button>
				</div>
			</form>

			<table className="table table-striped">
				<thead>
					<tr>
						<th scope="col">Orden</th>
						<th scope="col">Fecha</th>
						<th scope="col">Estado</th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody>
					{orders &&
						orders.map(ord => {
							return <tr key={ord.id}>
								<th scope="row">{ord.id}</th>
								<td valign='middle'>{dateFormat(ord.date, 'd')}</td>
								<td valign='middle'>{ord.status !== undefined ? ord.status : 'Inexistente'}</td>
								<td valign='middle'>
									{
										ord.status !== undefined &&
										<Link to={`/order-detail/${ord.id}`}><i className="material-icons">visibility</i></Link>
									}
								</td>
							</tr>
						})
					}
				</tbody>
			</table>
		</div>
	);
};

export default OrderList;