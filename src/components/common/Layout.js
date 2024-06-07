import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../images/logo.jpg";

const Layout = () => {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-pink-700 fixed w-full z-[999] top-0">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* Logo */}
              <div>
                <Link
                  to="/"
                  className="flex items-center py-5 px-2 text-white hover:text-gray-900"
                >
                  <div className=" flex items-center gap-2">
                    <img
                      src={logo}
                      alt="logo"
                      className="h-12 w-12 rounded-full"
                    />
                    <div class="container">
                      <h1 data-text="CIFAR">DWD</h1>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Primary nav */}
              <div className="hidden md:flex items-center space-x-1">
                <Link
                  to="/"
                  className="py-5 px-3 text-white hover:text-gray-900"
                >
                  Home
                </Link>
                <Link
                  to="/mywork"
                  className="py-5 px-3 text-white hover:text-gray-900"
                >
                  My Work
                </Link>
              </div>
            </div>

            {/* Secondary nav */}
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/about"
                className="py-5 px-3 text-white hover:text-gray-900"
              >
                About
              </Link>
            </div>

            {/* Mobile button */}
            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button" onClick={toggleMenu}>
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={isMenuOpen ? "block md:hidden" : "hidden md:hidden"}>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Features
          </a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Pricing
          </a>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
