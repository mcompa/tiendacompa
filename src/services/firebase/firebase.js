import { initializeApp } from "firebase/app";
import {
	getFirestore, Timestamp, writeBatch, collection,
	getDocs, query, where, getDoc, doc, limit, addDoc, documentId
} from "firebase/firestore";
import { handleError } from '../tools/tools';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_apiKey,
	authDomain: process.env.REACT_APP_authDomain,
	projectId: process.env.REACT_APP_projectId,
	storageBucket: process.env.REACT_APP_storageBucket,
	messagingSenderId: process.env.REACT_APP_messagingSenderId,
	appId: process.env.REACT_APP_appId
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getData = async (coleccion) => {
	let gDocs = (collection(db, coleccion));
	let result = await getDocs(gDocs).then((querySnapshot) => {
		if (querySnapshot.size !== 0) {
			const objDocs = querySnapshot.docs.map(doc => {
				return { id: doc.id, ...doc.data() }
			});

			return objDocs;
		}
	})
	return result;
}

const getDataQ = async (coleccion, w, limite) => {
	if (!limite) {
		limite = 20;
	}
	let gDocs = query(collection(db, coleccion), w, limit(limite));
	let result = await getDocs(gDocs).then((querySnapshot) => {
		if (querySnapshot.size !== 0) {
			const objDocs = querySnapshot.docs.map(doc => {
				return { id: doc.id, ...doc.data() }
			});

			return objDocs;
		}
	})
	return result;
}

const getDataItem = async (coleccion, id) => {
	let result = await getDoc(doc(db, coleccion, id)).then((querySnapshot) => {
		if (querySnapshot.size !== 0) {
			return { id: querySnapshot.id, ...querySnapshot.data() }
		}
	})
	return result;
}


export const getProducts = async () => {
	return getDataQ('products', where('titulo', '!=', ''));
}

export const getCategories = async () => {
	return getData('categories');
}

export const getItem = async (sku) => {
	return getDataItem('products', sku);
}

export const getProductsByCat = async (id) => {
	return getDataQ('products', where('categoriaId', '==', id));
}

export const getOrder = async (id) => {
	return getDataItem('orders', id);
}

export const getOrders = async (arrIds) => {
	if (Array.isArray(arrIds) && arrIds.length > 0) {
		return getDataQ('orders', where(documentId(), 'in', arrIds));
	} else {
		return [];
	}
}

export const sendOrder = async (buyer, itemsCart, amountCart) => {
	const result = {
		orderId: '',
		outOfStock: []
	}
	const order = {
		buyer: buyer,
		items: itemsCart,
		date: Timestamp.fromDate(new Date()),
		status: 'generada',
		total: amountCart()
	};

	const batch = writeBatch(db);
	for (const element of order.items) {

		await getItem(element.sku).then(({ stock }) => {
			if (stock >= element.cantidad) {
				batch.update(doc(db, 'products', element.sku), {
					stock: stock - element.cantidad
				});
			} else {
				result.outOfStock.push(element.descripcion);
			}
		});

	};

	if (result.outOfStock.length === 0) {
		let updateStockOk = await batch.commit().then(() => {
			return true;
		}).catch(err => {
			handleError('Error procesando stocks', err);
			return false;
		});

		result.orderId = await addDoc(collection(db, "orders"), order).then(({ id }) => {
			return (updateStockOk ? id : '');
		});

		return result;
	}
	return result;
}