import React, { useEffect, useState } from 'react';
import ItemList from '../components/ItemList/ItemList';
import { getProducts, getProductsByCat } from '../Services/local';
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
				setIsLoading(false);
			}).catch(err => {
				console.log('ups!');
			});
		} else {
			getProducts().then(response => {
				setLstArt(response);
				setIsLoading(false);
			}).catch(err => {
				console.log('ups!');
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