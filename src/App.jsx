
import { useState, useEffect } from 'react';
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import Components from './pages/Components';
import Calculator from './pages/Calculator';
import Home from './pages/Home';
import BallAnimation from './pages/Animation';
import ForwardToHome from './pages/ForwardToHome';
import Todos from './pages/Todos';
import Products from './pages/Products';
import Carts from './pages/Carts';
import Login from './pages/Login';
import { fetchProducts } from './data/product';


function App() {
  const [token, setToken] = useState('');
  const [role, setRole] = useState('');


  const [counter, setCounter] = useState(0);  // state สำหรับ counter
  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])

  useEffect(() => {
    setProducts(fetchProducts())
  }, [])

  useEffect(() => console.log(products), [products])

  if (token === '') {
    return (<Login setToken={setToken} setRole={setRole} />)
  } else {
    return (
      <BrowserRouter basename='/csi205/'>
        {/* เรียกใช้งาน AppHeader และ AppNavbar */}

        {/* การตั้งค่า Routing */}
        <Routes>
          <Route path="/" element={<AppLayout products={products} carts={carts} setToken={setToken} />}>
            <Route path="/" element={<Home counter={counter} setCounter={setCounter} />} />
            <Route path="calculator" element={<Calculator counter={counter} setCounter={setCounter} />} />
            <Route path="/animation" element={<BallAnimation />} />            
            <Route path="components" element={<Components counter={counter} setCounter={setCounter} />} />
            <Route path="forwardtohome" element={<ForwardToHome />} />
            <Route path='todos' element={<Todos />}></Route>
            <Route path='products' element={<Products products={products} carts={carts} setCarts={setCarts} />}></Route>
            <Route path='carts' element={<Carts carts={carts} setCarts={setCarts} />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

}

export default App;
