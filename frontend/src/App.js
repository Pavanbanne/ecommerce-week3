import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import ShopCategory from "./Pages/ShopCategory";
import women_banner from "./Components/Assets/banner_women.png";
import men_banner from "./Components/Assets/banner_mens.png";
import kid_banner from "./Components/Assets/banner_kids.png";
import LoginSignup from "./Pages/LoginSignup";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Wishlist from "./Pages/Wishlist/Wishlist"; // Adjust the path based on your project structure
import ThemeProvider, { useTheme } from "./Context/ThemeContext"; // Correct path
import { useEffect } from "react";
export const backend_url = 'http://localhost:4000';
export const currency = '₹';

function AppContent() {
  const { darkMode } = useTheme(); // Use darkMode instead of theme
  useEffect(() => {
    // Apply or remove "dark" class on body
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]); // Dependency updated to darkMode

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/" element={<Shop gender="all" />} />
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;