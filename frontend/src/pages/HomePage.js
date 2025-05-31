import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Our E-commerce Store!</h1>
      <p>Discover amazing products at great prices.</p>
      <div style={{ marginTop: '20px', padding: '10px', border: '1px dashed #ccc' }}>
        <h2>Featured Products</h2>
        <p>Placeholder for featured products section.</p>
        {/* Later, we can map over an array of featured products here */}
      </div>
    </div>
  );
};

export default HomePage;
EOF && cat << EOF > src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Other routes will be added here later */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
EOF && cat << EOF > src/App.css
.App {
  text-align: center;
  padding: 20px;
}
EOF && echo "Basic HomePage created and routing set up in App.js."
