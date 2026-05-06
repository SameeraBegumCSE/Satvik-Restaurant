import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [newYear, setNewYear] = useState();

  useEffect(() => {
    setNewYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-cyan-900 text-white py-16 px-6 overflow-hidden">
      <div className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-lime-500/20 rounded-full blur-3xl -top-48 -left-48" />
      <div className="absolute w-64 h-64 bg-gradient-to-r from-lime-400/15 to-cyan-400/15 rounded-full blur-2xl -bottom-32 -right-32" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-lime-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent">
              Satvik Bhojan
            </h2>
          </div>
          <p className="text-slate-300 text-lg">
            Pure vegetarian cuisine crafted with love
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              <Link
                to="/menu"
                className="block text-slate-300 hover:text-lime-400"
              >
                Menu
              </Link>
              <Link
                to="/about"
                className="block text-slate-300 hover:text-lime-400"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="block text-slate-300 hover:text-lime-400"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Follow Us */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-lime-400 mb-4">
              Follow Us
            </h3>

            <div className="flex justify-center space-x-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/sameerabegum9347/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-pink-500/30 to-orange-500/30 rounded-full flex items-center justify-center
                 hover:from-pink-500 hover:to-orange-500 transition-all duration-300 hover:scale-110"
              >
                ig
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/csstudentsam/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full flex items-center justify-center
                 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 hover:scale-110"
              >
                in
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com/Sameera468"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-slate-500/30 to-gray-500/30 rounded-full flex items-center justify-center
                 hover:from-slate-500 hover:to-gray-500 transition-all duration-300 hover:scale-110"
              >
                tw
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">
              Contact Info
            </h3>
            <p className="text-slate-300">123 Veggie Street</p>
            <p className="text-slate-300">Food City, FC 12345</p>
            <p className="text-slate-300">+1 (555) 123-4567</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cyan-500/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400">
            © {newYear} Satvik Bhojan. All rights reserved.
          </p>
          <p className="text-slate-400">
            Designed by{" "}
            <a
              href="https://www.linkedin.com/in/csstudentsam/"
              className="bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent font-semibold"
            >
              Sameera Begum
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
