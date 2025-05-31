import React from 'react';
import { useParams } from 'react-router-dom';

// Re-using the same mock data for simplicity. In a real app, you'd fetch this.
const mockProducts = [
  { id: 1, name: 'Awesome T-Shirt', price: 19.99, description: 'A really awesome t-shirt. Made from 100% cotton, available in various sizes and colors.' },
  { id: 2, name: 'Cool Mug', price: 12.50, description: 'A super cool mug for your drinks. Holds 12oz of your favorite beverage, microwave and dishwasher safe.' },
  { id: 3, name: 'Neat Hat', price: 25.00, description: 'The neatest hat you have ever seen. Adjustable strap, one size fits all.' },
  { id: 4, name: 'Epic Sticker Pack', price: 5.99, description: 'A pack of truly epic stickers. Contains 10 unique designs, waterproof vinyl.' },
];

const ProductDetailPage = () => {
  const { productId } = useParams(); // Get productId from URL
  const product = mockProducts.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div>
      {/* Placeholder for product image gallery */}
      <div style={{ width: '300px', height: '200px', backgroundColor: '#f0f0f0', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
        <span>Main Product Image</span>
      </div>
      <h2>{product.name}</h2>
      <p style={{ fontSize: '1.2em', color: '#333' }}>${product.price.toFixed(2)}</p>
      <p style={{ marginTop: '20px', textAlign: 'left', maxWidth: '600px', margin: '20px auto' }}>{product.description}</p>
      {/* Add to cart button, quantity selector etc. can be added later */}
      <button style={{ marginTop: '20px', padding: '10px 20px' }}>Add to Cart</button>
    </div>
  );
};

export default ProductDetailPage;
EOF && \
cat << 'EOF' > src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const ProductCard = ({ product }) => {
  return (
    <div style={{ border: '1px solid #eee', padding: '16px', margin: '16px', width: '200px', textAlign: 'left' }}>
      <div style={{ width: '100%', height: '120px', backgroundColor: '#f0f0f0', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span>Image</span>
      </div>
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <Link to={`/products/${product.id}`}> {/* Changed button to Link */}
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default ProductCard;
EOF && \
cat << 'EOF' > src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage'; // Import ProductDetailPage
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
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} /> {/* Add route for product detail */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
EOF && \
echo "ProductDetailPage created, ProductCard updated to link to it, and routing updated in App.js."
