import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { getItem } from '../firebase/firebase';

const getStorage = (key) => {
	try {
		const objStored = window.localStorage.getItem(key);
		if (objStored) {
			return JSON.parse(objStored);
		} else {
			return false;
		}
	} catch (error) {
		return "Error en storage: " + error;
	}
}

const setStorage = (key, value) => {
	try {
		window.localStorage.setItem(key, JSON.stringify(value));
		return true;
	} catch (error) {
		return false;
	}
}

const removeStorage = (key) => {
	try {
		window.localStorage.removeItem(key);
		return true
	} catch (error) {
		return false;
	}
}

export const storeCart = async (obj) => {
	await removeStorage('cart');
	await setStorage('cart', obj);
}

export const recoverCart = async () => {
	let objRecovered = getStorage('cart');
	let lstItemsCart = [];
	if(Array.isArray(objRecovered) && objRecovered.length > 0 ){
		for (const element of objRecovered) {
			await getItem(element.sku).then( (prod) =>{
				if (prod.stock >= element.cantidad){
					lstItemsCart.push({...prod, cantidad:element.cantidad})
				}
			});
		};
	}
	return lstItemsCart;
}

export const storeOrder = async (orderId) => {
	let lstOrders = await getStorage('orders');
	if(!lstOrders){
		lstOrders = [];
	}
	lstOrders.push(orderId);
	setStorage('orders', lstOrders);
}

export const getStoredOrders = async () => {
	let lstOrders = await getStorage('orders');
	if(!lstOrders){
		lstOrders = [];
	}
	return lstOrders;
}

export const storeBuyer = async (obj) => {
	await removeStorage('buyer');
	await setStorage('buyer', obj);
}

export const recoverBuyer = async () => {
	let buyer = await getStorage('buyer');
	if(!buyer){
		buyer = {
			name: '',
			lastName: '',
			mail: '',
			phone: '',
			address: '',
			comments: ''
		};
	}
	return buyer;
}

export const dateFormat = (timeStamp, format) => {
	try {
		let dateInMillis = timeStamp.seconds * 1000;
		let result = '';
		switch (format) {
			case 'h':
				result = new Date(dateInMillis).toLocaleTimeString();
				break;
			case 'c':
				result = new Date(dateInMillis).toLocaleDateString() + ' a las ' + new Date(dateInMillis).toLocaleTimeString();
				break;
			default:
				result = new Date(dateInMillis).toLocaleDateString();
				break;
		}
		return result;
	} catch (error) {
		return "---";
	}
}

export const handleError = (message) => {
	const MySwal = withReactContent(Swal);
	MySwal.fire(
		'Ocurrio un error',
		message,
		'error'
	);
}