import React, {useEffect, useState} from 'react'
import ItemDetail from '../components/ItemDetail';
import { getItem } from '../apis/local';

const ItemDetailContainer = () => {
    const [Art, setArt] = useState({});
    
    useEffect(() => {
        getItem('187-SAM-498').then(response => {
            setArt(response);
        }).catch( err => {
            console.log('ups!');
        });
        
    }, [])
    
    return (
        <ItemDetail articulo={Art} />
    )
}

export default ItemDetailContainer;