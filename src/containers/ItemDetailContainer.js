import React, { useEffect, useState } from 'react'
import ItemDetail from '../components/ItemDetail/ItemDetail';
//import { getItem } from '../services/local/local';
import { getItem } from '../services/firebase/firebase';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader/Loader';

const ItemDetailContainer = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [Art, setArt] = useState({});

    const { artSku } = useParams();

    useEffect(() => {
        setIsLoading(true);
        getItem(artSku).then(response => {
            setArt(response);
        }).catch(err => {
            console.log('Error obteniendo detalle',err);
        }).finally(() => {
            setIsLoading(false);
        });

    }, [artSku])

    return (

        isLoading ?
            <Loader /> :
            <ItemDetail article={Art} />

    )
}

export default ItemDetailContainer;