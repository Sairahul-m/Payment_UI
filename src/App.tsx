import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PricingPage from './components/PricingPage';
import CheckoutPage from './components/CheckoutPage';
import SuccessPage from './components/SuccessPage';
import FailurePage from './components/FailurePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PricingPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/failure" element={<FailurePage />} />
      </Routes>
    </Router>
  );
}

export default App;
