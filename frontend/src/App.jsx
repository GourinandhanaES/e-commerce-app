import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop/>
        <div className="min-h-screen flex flex-col bg-slate-50">
          <Header />
          <main className="flex-grow container mx-auto py-2 max-w-7xl">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
