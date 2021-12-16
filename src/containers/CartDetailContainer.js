import React, {useContext} from 'react';
import CartContext from '../context/CartContext';
const CartDetailContainer = () => {
    const {cantidadUnidades} = useContext(CartContext);
    return (
        <h2>Detalle del carrito... proximamente. Por ahora solo indico que hay {cantidadUnidades()} unidades agregadas</h2>
    )
}

export default CartDetailContainer;