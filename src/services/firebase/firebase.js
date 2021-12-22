import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { collection, getDocs, query, where, getDoc, doc, limit } from 'firebase/firestore';

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
		if(querySnapshot.size !== 0){
			const objDocs = querySnapshot.docs.map(doc => {
				return { id: doc.id, ...doc.data() }
			});

			return objDocs;
		}
	})
	return result;
}

const getDataQ = async (coleccion, w, limite) => {
	if(!limite){
		limite=20;
	}
	let gDocs = query(collection(db, coleccion),w,limit(limite));
	let result = await getDocs(gDocs).then((querySnapshot) => {
		if(querySnapshot.size !== 0){
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
		if(querySnapshot.size !== 0){
			return { id: querySnapshot.id, ...querySnapshot.data() }
		}
	})
	return result;
}


export const getProducts = async () => {
	//return getData('products');
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
