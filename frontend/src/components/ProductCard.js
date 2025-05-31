import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div style={{ border: '1px solid #eee', padding: '16px', margin: '16px', width: '200px', textAlign: 'left' }}>
      {/* Placeholder for product image */}
      <div style={{ width: '100%', height: '120px', backgroundColor: '#f0f0f0', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span>Image</span>
      </div>
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button>View Details</button>
      {/* We can add an "Add to Cart" button later */}
    </div>
  );
};

export default ProductCard;
EOF && mkdir -p src/pages && cat << EOF > src/pages/ProductListPage.js
import React from 'react';
import ProductCard from '../components/ProductCard';

const mockProducts = [
  { id: 1, name: 'Awesome T-Shirt', price: 19.99, description: 'A really awesome t-shirt.' },
  { id: 2, name: 'Cool Mug', price: 12.50, description: 'A super cool mug for your drinks.' },
  { id: 3, name: 'Neat Hat', price: 25.00, description: 'The neatest hat you have ever seen.' },
  { id: 4, name: 'Epic Sticker Pack', price: 5.99, description: 'A pack of truly epic stickers.' },
];

const ProductListPage = () => {
  return (
    <div>
      <h2>Products</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {mockProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
EOF && cat << EOF > src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage'; // Import ProductListPage
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/products">Products</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} /> {/* Add route for products */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
EOF && echo "ProductListPage and ProductCard created, mock data added, and routing updated in App.js."
