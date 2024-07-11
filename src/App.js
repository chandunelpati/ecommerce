import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import { CartPage } from './pages/CartPage';
import { Login } from './pages/Login';
import Register from './pages/Register';
import Appproductpages from './pages/Appproductpages';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/addproduct' element={<Appproductpages/>}/>

      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
