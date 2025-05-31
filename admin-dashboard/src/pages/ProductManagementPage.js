import React from 'react';

// Using the same mock data as the frontend for now.
// In a real app, this would come from an API.
const mockProducts = [
  { id: 1, name: 'Awesome T-Shirt', price: 19.99, stock: 100 },
  { id: 2, name: 'Cool Mug', price: 12.50, stock: 50 },
  { id: 3, name: 'Neat Hat', price: 25.00, stock: 75 },
  { id: 4, name: 'Epic Sticker Pack', price: 5.99, stock: 200 },
];

const ProductManagementPage = () => {
  return (
    <div>
      <h2>Product Management</h2>
      <button style={{ margin: '10px 0', padding: '8px 12px' }}>Add New Product</button>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #ccc' }}>
            <th style={{ textAlign: 'left', padding: '8px' }}>ID</th>
            <th style={{ textAlign: 'left', padding: '8px' }}>Name</th>
            <th style={{ textAlign: 'left', padding: '8px' }}>Price</th>
            <th style={{ textAlign: 'left', padding: '8px' }}>Stock</th>
            <th style={{ textAlign: 'left', padding: '8px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mockProducts.map(product => (
            <tr key={product.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '8px' }}>{product.id}</td>
              <td style={{ padding: '8px' }}>{product.name}</td>
              <td style={{ padding: '8px' }}>${product.price.toFixed(2)}</td>
              <td style={{ padding: '8px' }}>{product.stock}</td>
              <td style={{ padding: '8px' }}>
                <button style={{ marginRight: '5px' }}>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManagementPage;
EOF && \
cat << 'EOF' > src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductManagementPage from './pages/ProductManagementPage';
import './App.css'; // Assuming a similar App.css structure

// A simple dashboard home page placeholder
const DashboardHome = () => (
  <div>
    <h1>Admin Dashboard</h1>
    <p>Welcome to the admin area. Select an option from the navigation.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <nav style={{ display: 'flex', flexDirection: 'column', width: '200px', background: '#f4f4f4', padding: '10px', height: '100vh', position: 'fixed' }}>
          <h3>Menu</h3>
          <Link to="/" style={{ marginBottom: '10px', textDecoration: 'none' }}>Dashboard Home</Link>
          <Link to="/products" style={{ marginBottom: '10px', textDecoration: 'none' }}>Product Management</Link>
          {/* Add other dashboard links here later e.g., Order Management */}
        </nav>
        <main style={{ marginLeft: '220px', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/products" element={<ProductManagementPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
EOF && \
cat << 'EOF' > src/App.css
.App {
  display: flex; /* For sidebar layout */
}

/* Minimal styling for main content if needed */
/* main { ... } */
EOF && \
echo "Basic ProductManagementPage created in admin-dashboard, mock data added, and routing updated in App.js."
