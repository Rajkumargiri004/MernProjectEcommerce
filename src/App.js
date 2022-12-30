import Header from './Component/Header/Header';
import Home from './Component/Header/Home'
import Product from './Component/Header/Product'
import About from './Component/Header/About'
import Contact from './Component/Header/Contact'
import UserSignup from './Component/UserSignup/UserSignup';
import Cart from './Component/cart/Cart';
import Wishlist from './Component/wishlist/Wishlist';


import {BrowserRouter,Routes, Route} from 'react-router-dom'


import './App.css';

function App() {
  return (
    <BrowserRouter>
     <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="Home" element={<Home/>}/>
      <Route path="Product" element={<Product/>}/>
      <Route path="About" element={<About/>}/>
      <Route path="Contact" element={<Contact/>}/>
      <Route path="UserSignup" element={<UserSignup/>}/>
      <Route path= 'cart' element={<Cart/>}/>
      <Route path="wishlist" element={<Wishlist/>}/>
     

    </Routes>
     
    </BrowserRouter>
  );
}

export default App;
