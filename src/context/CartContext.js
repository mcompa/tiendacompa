import React, { useState, useEffect } from 'react';
import { storeCart, recoverCart } from '../services/tools/tools';

const Context = React.createContext();

export const CartContextProvider = ({ children }) => {

	const [cartProducts, setCartProducts] = useState([]);

	useEffect(() => {
		if (cartProducts.length > 0) {
			let objStore = cartProducts.map((it) => {
				return { sku: it.sku, cantidad: it.cantidad }
			});
			storeCart(objStore);
		} else {
			recoverCart().then(recovered => {
				if (recovered.length > 0) {
					setCartProducts(recovered);
				}
			});
		}
	}, [cartProducts])

	const addItem = (art, cant) => {
		let existe = isInCart(art.sku);
		if (existe) {
			existe.cantidad += cant;
			setCartProducts([...cartProducts]);
		} else {
			setCartProducts([...cartProducts, { ...art, cantidad: cant }]);
		}
	};

	const removeItem = (sku) => {
		let ixArt = cartProducts.findIndex((art) => art.sku === sku);
		cartProducts.splice(ixArt, 1);
		setCartProducts([...cartProducts]);
	};

	const cartClear = () => {
		setCartProducts([]);
		storeCart([]);
	};

	const isInCart = (sku) => {
		return cartProducts.find((art) => art.sku === sku);
	};

	const unitsCount = () => {
		return cartProducts.reduce((sum, art) => sum + art.cantidad, 0);
	};

	const cartAmount = () => {
		return cartProducts.reduce((sum, art) => sum + (art.cantidad * art.precio), 0);
	};

	return (
		<Context.Provider value={{
			addItem,
			removeItem,
			cartClear,
			isInCart,
			unitsCount,
			cartAmount,
			cartProducts
		}}>
			{children}
		</Context.Provider>
	)
}

export default Context;