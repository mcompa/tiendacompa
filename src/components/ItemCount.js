import React, { useState } from "react"

export const ItemCount = ({title, stock, inicial, onAdd}) => {

    const [cantidad, setcantidad] = useState(inicial);
    
    const cambiarCantidad = (Agregado) =>{
        let cantTotal = cantidad + Agregado
        if(cantTotal <= stock && cantTotal >0){
            setcantidad(cantTotal);
        }
    };

    return (
        <div className="card" style={{"width": "12rem"}} >
            <div className="card-body">
                <h5 className="card-title text-black">{title}</h5>
                <div className="card-text">

                    <div className="input-group mb-3">
                        <span className="material-icons input-group-text" style={{"cursor": "pointer"}} onClick={()=>{cambiarCantidad(-1)}}>expand_more</span>
                        <input type="text" className="form-control" value={cantidad} readOnly />
                        <span className="material-icons input-group-text" style={{"cursor": "pointer"}} onClick={()=>{cambiarCantidad(1)}}>expand_less</span>
                    </div>

                </div>
                <a href="/#" className={'btn btn-primary ' + (cantidad <= stock ? '' : 'disabled')} onClick={()=>{onAdd(cantidad)}}>
                    <i className="material-icons">shopping_cart</i>
                    Agregar
                </a>
            </div>
        </div>
    )
}
