import React, {useEffect, useState} from 'react'
import ItemList from '../components/ItemList';
import { getProducts } from '../apis/local';

export const ItemListContainer = ({greeting}) => {

    const [lstArt, setLstArt] = useState([]);

    useEffect(() => {
        getProducts().then(response => {
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
            <ItemList items={lstArt} />
        </>
    )
}

export default ItemListContainer