import React from 'react'
import '../App.css'

export default function Basket(props) {
    const {cartItems, adding, removing}=props
    const itemsPrice=cartItems.reduce((a, c) => a + c.price*c.qty, 0)
    const taxPrice=itemsPrice*0.14
    const movingPrice=itemsPrice>2000?0:50
    const totalPrice= itemsPrice + taxPrice + movingPrice
    
    return (
        <aside className='block col-1'>
            <div>
            <h2>Cart Items</h2>
            <div>{cartItems.length===0 && <div>Cart is Empty</div>}</div>
            {cartItems.map((item)=>(
            <div key={item.id} className='row'>
                <div className='col-2'>{item.name}</div>
            <div  className='col-2'>
            <button onClick={()=>adding(item)} className='add'>+</button>
            <button onClick={()=>removing(item)} className='remove'>-</button>
            </div>
            <div className='col-2 text-right'>
                {item.qty} x ${item.price.toFixed(2)}
            </div>
            </div>
            ))}
            {cartItems.length!==0 && (
                <>
                 <hr></hr>
                 <div className='row'>
                    <div className='col-2'>Items Price</div>
                    <div className='col-1 text-right'>£{itemsPrice.toFixed(2)}</div>
                 </div>
                 <div className='row'>
                    <div className='col-2'>Tax Price</div>
                    <div className='col-1 text-right'>£{taxPrice.toFixed(2)}</div>
                 </div>
                 <div className='row'>
                    <div className='col-2'>Moving/Shipping</div>
                    <div className='col-1 text-right'>£{movingPrice.toFixed(2)}</div>
                 </div>
                 <div className='row'>
                    <div className='col-2'><strong>Total Price</strong></div>
                    <div className='col-1 text-right'>£{totalPrice.toFixed(2)}</div>
                 </div>
                 <hr/>
                 <div className='row'>
                     <button onClick={() => alert('Finalize Checkout')}>Checkout</button>
                 </div>
                </>
            )}
            </div>
        </aside>
        )
    
}