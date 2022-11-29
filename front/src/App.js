import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import BuyerScreen from "./screens/BuyerScreen";
import SellerScreen from "./screens/SellerScreen";
import CompanyScreen from "./screens/CompanyScreen";
import DeliveryScreen from "./screens/DeliveryScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BuyerScreen />} />
        <Route path="/buyer" element={<BuyerScreen />} />
        <Route path="/seller" element={<SellerScreen />} />
        <Route path="/company" element={<CompanyScreen />} />
        <Route path="/delivery" element={<DeliveryScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
