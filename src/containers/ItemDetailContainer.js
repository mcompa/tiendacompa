import React, {useEffect, useState} from 'react'
import ItemDetail from '../components/ItemDetail/ItemDetail';
import { getItem } from '../apis/local';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [Art, setArt] = useState({});
    
    const {artSku} = useParams();

    useEffect(() => {
        getItem(artSku).then(response => {
            setArt(response);
        }).catch( err => {
            console.log('ups!');
        });
        
    }, [artSku])
    
    return (
        <ItemDetail articulo={Art} />
    )
}

export default ItemDetailContainer;