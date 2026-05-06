"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { UserAuth } from "../../context/AuthContext"   // ✅ fix import path

export default function Navbar() {
  const [clicked, setClicked] = useState(false)
  const { user, dispatch, googleSignIn } = UserAuth()  // ✅ access user + auth

  const toggleMenu = () => setClicked(!clicked)
  const closeMenu = () => setClicked(false)

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" }) // just clears context user
  }

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

          <ul className="hidden md:flex items-center space-x-8">
            <li><Link to="/" className="text-cyan-100 hover:text-cyan-400 font-medium">Home</Link></li>
            <li><Link to="/about" className="text-cyan-100 hover:text-cyan-400 font-medium">About</Link></li>
            <li><Link to="/menu" className="text-cyan-100 hover:text-cyan-400 font-medium">Menu</Link></li>
            <li><Link to="/customrecipe" className="text-cyan-100 hover:text-cyan-400 font-medium">Prepare Your Dish</Link></li>
            <li><Link to="/contact" className="text-cyan-100 hover:text-cyan-400 font-medium">Contact</Link></li>

            {/* 🔑 Signup / Logout Button */}
            <li>
              {user ? (
                <button
                  onClick={handleLogout}
                  className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full font-semibold hover:from-red-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={googleSignIn}
                  className="bg-gradient-to-r from-cyan-500 to-lime-500 text-slate-900 px-4 py-2 rounded-full font-semibold hover:from-cyan-400 hover:to-lime-400 transition-all duration-300 transform hover:scale-105"
                >
                  Signup
                </button>
              )}
            </li>
          </ul>

          {/* Cart Icon */}
          <div className="hidden md:flex items-center">
            <Link to="/cart" className="text-cyan-100 hover:text-cyan-400">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-lime-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9"/>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
