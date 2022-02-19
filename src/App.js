import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Route, Routes } from 'react-router';

const HatsPage = (props) => {
  return (
    <div>
      xx
    </div>
  )
}

const App = () => {
  return (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/hats" element={<HatsPage />} />
    <Route path="/shop" element={<ShopPage />} />
  </Routes>  
  );
}

export default App;
