
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Footer from './Components/Footer/Footer';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import men_banner from './Components/Assests/banner_mens.png'
import women_banner from './Components/Assests/banner_women.png'
import kid_banner from './Components/Assests/banner_kids.png'
// import Styled from './Components/styled/Styled';


function App() {
  return (
    <div >
      <BrowserRouter>
      
     <Navbar/>
     <div className="main-content"></div>
     <Routes>
      <Route path='/' element ={<Shop/>}/>
      <Route path='/men' element ={<ShopCategory banner ={men_banner} category = "men" />}/>
      <Route path='/women' element ={<ShopCategory banner ={women_banner} category = "women"/>}/>
      <Route path='/kids' element ={<ShopCategory banner = {kid_banner} category = "kid"/>}/>
      <Route path="/product/:productId" element={<Product />} />
      {/* <Route path="/product" element = {<Product/>}>
      <Route path=':productID'element = {<Product/>}/>
      </Route> */}
      <Route path='/cart' element ={<Cart/>}/>
      <Route path='/login' element ={<LoginSignup/>}/>
     </Routes>
      <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
