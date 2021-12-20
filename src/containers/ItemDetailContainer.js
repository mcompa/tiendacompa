import React, { useEffect, useState } from 'react'
import ItemDetail from '../components/ItemDetail/ItemDetail';
import { getItem } from '../Services/local';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader/Loader';

const ItemDetailContainer = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [Art, setArt] = useState({});

    const { artSku } = useParams();

    useEffect(() => {
        getItem(artSku).then(response => {
            setArt(response);
            setIsLoading(false);
        }).catch(err => {
            console.log('ups!');
        });

    }, [artSku])

    return (

        isLoading ?
            <Loader /> :
            <ItemDetail articulo={Art} />

    )
}

export default ItemDetailContainer;