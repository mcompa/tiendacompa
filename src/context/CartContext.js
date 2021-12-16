import React, {useState} from 'react'

const Context = React.createContext();

export const CartContextProvider = ({children}) => {

    const [productos, setProductos] = useState([]);

    const addItem = (art, cant) => {
        let existe = isInCart(art.sku);	
		if (existe) {
			existe.cantidad += cant;
			setProductos([...productos]);
          } else {
			setProductos([...productos, { ...art, cantidad:cant }]);
		}
    };

    const removeItem = (sku) => {
        let ixArticulo = productos.findIndex((articulo) => articulo.sku === sku);
        productos.splice(ixArticulo , 1);        
        setProductos([...productos]);
    };

    const clear = () => {
        setProductos([]);
    };

    const isInCart = (sku) => {
        return productos.find((art) => art.sku === sku);
    };

    const cantidadUnidades = () => {
        return productos.reduce((sum, articulo) => sum + articulo.cantidad, 0);
    };

    return (
        <Context.Provider value={{
            addItem,
            removeItem,
            clear,
            isInCart,
            cantidadUnidades
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context;