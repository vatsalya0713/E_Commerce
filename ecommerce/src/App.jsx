
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import AfterLogin from "./pages/AfterLogin";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
     <AuthProvider>
      <CartProvider>
    <Router>
      {/* Always show Navbar */}
      <Navbar />

      {/* Page content changes according to route */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/welcome" element={<AfterLogin />} />
      </Routes>

      {/* Always show Footer */}
      <Footer />
    </Router>
     </CartProvider>
    </AuthProvider>
  );
}

export default App;
