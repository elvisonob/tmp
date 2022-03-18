import React from 'react'
import '../App.css'

export default function Header(props) {
    const {countCartItems}=props
    return(
        <header className='row block center'>
            <div>
                <a href='#/'>
                    <h1>Shopping Cart</h1>
                </a>
            </div>
        </header>
    )
}