import { Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './Products';

function App() {
  const products = [
    {
      name: 'iPhone 4',
      amount: "£200",
      image: "https://images.unsplash.com/photo-1607936854279-55e8a4c64888?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTJ8ZW58MHx8MHx8&w=1000&q=80",
      color: 'silver'
    },
    {
      name: 'iPhone 5',
      amount: "£400",
      image: "https://images.unsplash.com/photo-1603791239531-1dda55e194a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBpcGhvbmV8ZW58MHx8MHx8&w=1000&q=80",
      color: 'silver'
    }
  ]

  return (
    <div className="App">
      <header>
        TODO: Nav bar in here
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Products products={products} />}/>
        </Routes>
      </main>      
    </div>
  );
}

export default App;
