import React from 'react'

export const ItemListContainer = ({greeting, children}) => {
    return (
        <>
            <h1>
                {greeting}
            </h1>
            {children}
        </>
    )
}


export default ItemListContainer