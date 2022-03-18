import Header from './components/Header'
import Main from './components/Main'
import Basket from './components/Basket'
import data from './Data'
import { useState } from 'react'


const App = () => {
  const {products} = data

  //Right here, I am declaring a useState variable which has an array of two elements. 
  //The first element is the current state and the second is used to update the state
  const [cartItems, setCartItems]= useState([])
  

  const adding=(product)=>{
    //I am using the find method to search the cart array to make sure the given argument's id matches or it is found.
    const isAvailable= cartItems.find(item=>item.id===product.id)
    if(isAvailable) {
      //If the arguments are found or matches, then i am using the map function to create another copy of the array and using the 'setCartItems' to update the array
      //and increment the quantity by 1.
      setCartItems(cartItems.map(item=>item.id===product.id ? {...isAvailable, qty:isAvailable.qty +1} : item))
    }
     else {
       //if it doesn't matches, still make a copy of the cartItems, but the quantity should be 1
      setCartItems([...cartItems, {...product, qty:1}])
    }
  }

  const removing=(product)=> {
    //I am using the find method to search the cart array to make sure the given argument's id matches.
    const isAvailable= cartItems.find(item=>item.id===product.id)
    //making an if statement with the condition that if the quantity is 1
    if(isAvailable.qty===1) {
      //Right here, I am using the filter method to remove an item if the arguments doesn't match, 
      //that is item.id is not strictly equal to product.id
      setCartItems(cartItems.filter(item=>item.id!==product.id))
    } else {
      //if it matches here, I am using the map method to create a copy of the array and decrementing the quantity by 1
      setCartItems(cartItems.map(item=>item.id===product.id ? {...isAvailable, qty:isAvailable.qty -1} : item))
    }
  }


  return (
    <div className='App'>
    <Header></Header>
    <div className='row'>
      {/* I am using props to return other components here */}
      <Main adding={adding} products={products}></Main>
      <Basket adding={adding} removing={removing} cartItems={cartItems}></Basket>
    </div>
    </div>
  )
}


export default App