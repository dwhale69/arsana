import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Rewards from './pages/Rewards';
import Vouchers from './pages/Vouchers';
import Orders from './pages/Orders';
import Account from './pages/Account';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#EDEBEC] pb-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/vouchers" element={<Vouchers />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/account" element={<Account />} />
        </Routes>
        <NavigationBar />
      </div>
    </Router>
  );
}

export default App;