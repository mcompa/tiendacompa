import React, {useEffect} from 'react'

const Context = React.createContext();

export const CartContextProvider = ({children}) => {

    const [productos, setProductos] = useState([]);

    const addItem = (art, cant) => {

    };

    const removeItem = (sku) => {

    };

    const clear = () => {
        setProductos([]);
    };

    const isInCart = (sku) => {

    };

    const cantidadUnidades = () => {

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