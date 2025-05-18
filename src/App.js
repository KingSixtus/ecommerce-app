import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import ProductCatalogue from './pages/ProductCatalogue';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import { fetchProducts } from './services/api';
import { setProducts } from './store/productSlice';

function App() {
  const dispatch = useDispatch();

  // Load initial products
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await fetchProducts();
        dispatch(setProducts(products));
      } catch (error) {
        console.error('Error loading products:', error);
      }
    };
    loadProducts();
  }, [dispatch]);

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<ProductCatalogue />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;