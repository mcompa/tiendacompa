import React from 'react'
import Item from './Item'

const ItemList = ({ items }) => {
	return (

		<div className="card-group">
			{
				items.map(it => {
					return <Item key={it.id} datos={it} />
				})
			}
		</div>

	)
}

export default ItemList;