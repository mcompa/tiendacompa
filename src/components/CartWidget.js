import React from 'react'

const CartWidget = ({cantidad}) => {
    return (
        <a className="nav-item nav-link text-right" href="/#">
            <i className="material-icons">shopping_cart</i>
            <span className="badge rounded-pill badge-notification bg-danger">{cantidad}</span>
        </a>
    )
}

export default CartWidget;