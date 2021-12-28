import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ items }) => {
	return (
		<div className="row m-3">
			{
				items &&
				items.map(it => {
					return <Item key={it.id} itemdata={it} />
				})
			}
		</div>
	);
};

export default ItemList;