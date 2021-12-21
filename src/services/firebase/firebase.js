import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import config from "../../config/config";

import { collection, getDocs, query, where, getDoc, doc, limit } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: config.dbKey,
	authDomain: "app-tiendacompa.firebaseapp.com",
	projectId: "app-tiendacompa",
	storageBucket: "app-tiendacompa.appspot.com",
	messagingSenderId: "66422970016",
	appId: "1:66422970016:web:4fcf38ec08c19c46121bc5"
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
