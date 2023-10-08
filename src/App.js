import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer,Home,MyNav,Notfound,Cart } from './components';
import { ProductDetails, ProductForm, Products } from './components/products';


function App() {
 
  
  return (
    <div className="App">
      <MyNav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/products/0/edit' element={<ProductForm/>} />
        <Route path='/products/:id' element={<ProductDetails/>} />
        <Route path='/products/:id/edit' element={<ProductForm/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='*' element={<Notfound/>} />
      </Routes>
      <Footer/>
    </div>
  );
  }

export default App;
