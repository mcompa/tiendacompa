import React, { useEffect, useState } from 'react';
import ItemList from '../components/ItemList/ItemList';
//import { getProducts, getProductsByCat } from '../services/local/local';
import { getProducts, getProductsByCat } from '../services/firebase/firebase';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader/Loader';

export const ItemListContainer = ({ greeting }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [lstArt, setLstArt] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		setIsLoading(true);
		if (id) {
			getProductsByCat(id).then(response => {
				setLstArt(response);
			}).catch(err => {
				console.log('Error obteniendo productos x Categoria',err);
			}).finally(() => {
				setIsLoading(false);
			});
		} else {
			getProducts().then(response => {
				setLstArt(response);
			}).catch(err => {
				console.log('Error obteniendo productos',err);
			}).finally(() => {
				setIsLoading(false);
			});
		}
	}, [id])

	return (
		<div>
			<h4>
				{greeting}
			</h4>
			<div className="container">
				{
					
					isLoading ?
					<Loader /> :
					<ItemList items={lstArt} />
					
				}
			</div>
		</div>
	)
}

export default ItemListContainer