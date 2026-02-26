
import { Routes, Route } from 'react-router';
import { RootLayout } from './components/layout/RootLayout';
import { Home } from './pages/Home';
import { ESGDashboard } from './pages/ESGDashboard';
import { Operations } from './pages/Operations';
import { Investors } from './pages/Investors';
import { Governance } from './pages/Governance';
import { About } from './pages/About';
import { Career } from './pages/Career';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/esg-dashboard" element={<ESGDashboard />} />
        <Route path="/operations" element={<Operations />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/governance" element={<Governance />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      {/* Login outside of RootLayout if it shouldn't have Navbar/Footer, but RootLayout has it. Actually, enterprise logins usually omit main navigation. Let's keep it separate. */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
