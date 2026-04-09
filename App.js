import React from 'react';
// 1. Notice we import HashRouter instead of BrowserRouter here
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Navbar } from './components';
import Home from './pages/Home';

function App() {
  const navLinks = [
    { text: 'Solutions', url: '/#/solutions' }, // 2. Add the /#/ to your navigation URLs
    { text: 'Company', url: '/#/company' },
    { text: 'Partners', url: '/#/partners' },
    { text: 'Strategy', url: '/#/market-strategy' },
    { text: 'Submit Anonymous Report', url: '/#/report' }
  ];

  return (
    // 3. This Router is now a HashRouter under the hood
    <Router>
      <div style={{ fontFamily: 'system-ui, sans-serif', backgroundColor: '#f5f6fa', minHeight: '100vh', direction: 'ltr' }}>
        <Navbar logoText="CiviWatch Guardian AI" links={navLinks} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/market-strategy" element={<MarketStrategy />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
