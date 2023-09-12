import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Navbar } from './component/Navbar';
import {Shop} from './pages/shop/Shop'
import {Cart} from './pages/cart/Cart'
import { ShopContextProvider } from './context/ContextShop';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
          <ShopContextProvider>
          <Routes>
            <Route path="/" element={<Shop/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
       </ShopContextProvider>
        </Router>

    </div>
  );
}

export default App;
