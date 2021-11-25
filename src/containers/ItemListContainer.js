import React, {useEffect, useState} from 'react'
//import { ItemCount } from '../components/ItemCount';
import { ItemList } from '../components/ItemList';
import { getArticulos } from '../apis/local';

export const ItemListContainer = ({greeting}) => {

    const [lstArt, setLstArt] = useState([]);

    /*
    const Agregar = (cantidad) => {
        console.log('Agregando ' + cantidad + ' unidades.');
	};
    */

    useEffect(() => {
        getArticulos().then(response => {
            setLstArt(response);
        }).catch( err => {
            console.log('ups!');
        });
        
    }, [])

    return (
        <>
            <h1>
                {greeting}
            </h1>
            {/*
            <ItemCount title="Pantalon Chino 42" stock={5} inicial={1} onAdd={Agregar} />
            <ItemCount title="Remera lisa gris M" stock={0} inicial={2} onAdd={Agregar} />
            <ItemCount title="Bermuda Verde Militar L" stock={15} inicial={1} onAdd={Agregar} />
            */}

            <ItemList items={lstArt} />

        </>
    )
}


export default ItemListContainer