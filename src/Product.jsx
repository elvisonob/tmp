import React from 'react'

export default function Product(props) {
    const {product, adding} = props
    return (
        <div>
            <img className='small' src={product.image} alt={product.name}></img>
            <h3>{product.name}</h3>
            <div>£{product.price}</div>
            <div>
                <button onClick={()=>adding(product)}>Add To Cart</button>
            </div>
        </div>
    )
}