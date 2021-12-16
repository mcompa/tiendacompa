import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import CartContext from '../../context/CartContext';

const CartWidget = () => {

    const {cantidadUnidades} = useContext(CartContext);
    return (
        <Link className="nav-item nav-link text-right" to="/cart">
            <i className="material-icons">shopping_cart</i>
            <span className="badge rounded-pill badge-notification bg-danger">{cantidadUnidades()}</span>
        </Link>

    )
}

export default CartWidget;