import React, { useEffect, useState } from 'react'
import OrderDetail from '../components/OrderDetail/OrderDetail';
import { getOrder } from '../services/firebase/firebase';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import { handleError } from '../services/tools/tools';

const OrderDetailContainer = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [order, setOrder] = useState({});

	const { orderId } = useParams();

	useEffect(() => {
		setIsLoading(true);
		getOrder(orderId).then(response => {
			setOrder(response);
		}).catch(err => {
			handleError(`Error obteniendo la orden ${orderId}`, err);
		}).finally(() => {
			setIsLoading(false);
		});

	}, [orderId])

	return (

		isLoading ?
			<Loader /> :
			<OrderDetail order={order} />

	)
}

export default OrderDetailContainer;