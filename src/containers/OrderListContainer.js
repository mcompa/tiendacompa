import React, { useEffect, useState } from 'react';
import OrderList from '../components/OrderList/OrderList';
import { getOrders } from '../services/firebase/firebase';
import { getStoredOrders, handleError } from '../services/tools/tools';
import Loader from '../components/Loader/Loader';

export const OrderListContainer = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [lstOrders, setLstOrders] = useState([]);

	useEffect(() => {
		searchOrder('');
	}, []);

	const searchOrder = async (query) => {
		setIsLoading(true);
		if (query.length !== 0) {
			query = [query];
		} else {
			query = await getStoredOrders();
		}
		getOrders(query).then(response => {
			if (response) {
				setLstOrders(response);
			} else {
				setLstOrders([]);
			}
		}).catch(err => {
			handleError(`Error obteniendo las ordenes `, err);
		}).finally(() => {
			setIsLoading(false);
		});
	};

	return (
		<div>
			<div className="container">
				{
					isLoading ?
						<Loader /> :
						<OrderList orders={lstOrders} findOrder={searchOrder} />
				}
			</div>
		</div>
	)
}

export default OrderListContainer