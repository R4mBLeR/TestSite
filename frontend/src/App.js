import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import HomePage from './pages/HomePage/HomePage';
/*import ProductsPage from './pages/ProductsPage/ProductsPage';
import CartPage from './pages/CartPage/CartPage';*/
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <div className='wrapper'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;