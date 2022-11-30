import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Container from "./components/template/Container";

import BuyerScreen from "./screens/BuyerScreen";
import SellerScreen from "./screens/SellerScreen";
import CompanyScreen from "./screens/CompanyScreen";
import DeliveryScreen from "./screens/DeliveryScreen";

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="*" element={<Navigate to="/buyer" replace />} />
          <Route path="/buyer" element={<BuyerScreen />} />
          <Route path="/seller" element={<SellerScreen />} />
          <Route path="/company" element={<CompanyScreen />} />
          <Route path="/delivery" element={<DeliveryScreen />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
