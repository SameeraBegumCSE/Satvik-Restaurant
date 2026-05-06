import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Catalogue from "./pages/catalogue/Catalogue";
import Contact from "./pages/contact/Contact";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Cart from "./pages/cart/Cart";
import Footer from "./components/footer/Footer";
import { useAuthContext } from "./hooks/useAuthContext";
import CustomRecipe from "./pages/customrecipe/CustomRecipe";
import { useTheme } from "./hooks/useTheme";
import LandingPage from "./pages/landing/LandingPage";
import { CardHoverEffectDemo } from "./components/restaurantservices/services";
import Menu from "./pages/menu/Menu";
import { testFirestore } from "./firebaseTest";
import BookTable from "./pages/book-table/BookTable";
import { useEffect } from "react";

export default function App() {
  const { authIsReady, user } = useAuthContext();
  const { color, backgroundColor, changeColor } = useTheme();

  useEffect(() => {
    testFirestore();
  }, []);

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* Public routes */}

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Signup/Login logic */}
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/home" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/home" />}
            />

            {/* Protected routes (all other pages redirect to signup if no user) */}
            <Route
              path="/"
              element={user ? <LandingPage /> : <Navigate to="/signup" />}
            />
            <Route
              path="/home"
              element={user ? <Home /> : <Navigate to="/signup" />}
            />
            <Route
              path="/catalogue"
              element={user ? <Catalogue /> : <Navigate to="/signup" />}
            />
            <Route
              path="/cart"
              element={user ? <Cart /> : <Navigate to="/signup" />}
            />
            <Route
              path="/menu"
              element={user ? <Menu /> : <Navigate to="/signup" />}
            />
            <Route
              path="/customrecipe"
              element={user ? <CustomRecipe /> : <Navigate to="/signup" />}
            />
            <Route
              path="/profile"
              element={user ? <div>Profile</div> : <Navigate to="/signup" />}
            />
            <Route path="/book-table" element={<BookTable />} />

            {/* Catch-all */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
}
