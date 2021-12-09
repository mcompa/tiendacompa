import React, { useEffect, useState } from 'react'
import ItemList from '../components/ItemList/ItemList';
import { getProducts, getProductsByCat } from '../apis/local';
import { useParams } from 'react-router-dom';

export const ItemListContainer = ({ greeting }) => {

	const [lstArt, setLstArt] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			getProductsByCat(id).then(response => {
				setLstArt(response);
			}).catch(err => {
				console.log('ups!');
			});
		} else {
			getProducts().then(response => {
				setLstArt(response);
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
				<ItemList items={lstArt} />
			</div>
		</div>
	)
}

export default ItemListContainer