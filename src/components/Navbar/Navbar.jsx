"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { UserAuth } from "../../context/AuthContext";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);

  const { user, dispatch, googleSignIn } = UserAuth();

  const toggleMenu = () => setClicked(!clicked);

  const closeMenu = () => setClicked(false);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-cyan-900/95 via-slate-900/95 to-lime-900/95 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-lime-400 rounded-full flex items-center justify-center">
              <span className="text-slate-900 font-bold text-lg">V</span>
            </div>

            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent">
              Vegzo
            </span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link to="/" className="text-cyan-100 hover:text-cyan-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-cyan-100 hover:text-cyan-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/menu" className="text-cyan-100 hover:text-cyan-400">
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/customrecipe"
                className="text-cyan-100 hover:text-cyan-400"
              >
                Prepare Your Dish
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-cyan-100 hover:text-cyan-400">
                Contact
              </Link>
            </li>

            <li>
              {user ? (
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-full"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={googleSignIn}
                  className="bg-green-600 text-white px-4 py-2 rounded-full"
                >
                  Signup
                </button>
              )}
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {clicked ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {clicked && (
          <div className="md:hidden bg-slate-900 rounded-xl p-4 space-y-4 mt-2">
            <Link to="/" onClick={closeMenu} className="block text-cyan-100">
              Home
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
              className="block text-cyan-100"
            >
              About
            </Link>

            <Link
              to="/menu"
              onClick={closeMenu}
              className="block text-cyan-100"
            >
              Menu
            </Link>

            <Link
              to="/customrecipe"
              onClick={closeMenu}
              className="block text-cyan-100"
            >
              Prepare Your Dish
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="block text-cyan-100"
            >
              Contact
            </Link>

            <Link
              to="/cart"
              onClick={closeMenu}
              className="block text-cyan-100"
            >
              Cart
            </Link>

            {user ? (
              <button
                onClick={handleLogout}
                className="w-full bg-red-500 text-white py-2 rounded-full"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={googleSignIn}
                className="w-full bg-green-600 text-black py-2 rounded-full"
              >
                Signup
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
