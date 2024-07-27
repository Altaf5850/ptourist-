import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Img from "../assets/aalogo.png";
import { useAuth0 } from "@auth0/auth0-react";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex justify-between items-center p-3 gap-5 bg-transparent fixed z-10 w-full">
      <a href="/">
        <img
          src={Img}
          alt="logo"
          className="h-8 hover:duration-200 hover:scale-125"
        />
      </a>
      <nav className="hidden sm:flex gap-5 text-black font-serif font-bold">
        <a
          href="/"
          className="active hover:text-[#D43D1D] hover:scale-90 duration-300"
        >
          Home
        </a>
        <a
          href="/about"
          className="hover:text-[#D43D1D] hover:scale-90 duration-300"
        >
          About
        </a>
        <a
          href="/destinations"
          className="hover:text-[#D43D1D] hover:scale-90 duration-300"
        >
          Destinations
        </a>
        <a
          href="/blogs"
          className="hover:text-[#D43D1D] hover:scale-90 duration-300"
        >
          Blogs
        </a>
        <a
          href="/contact"
          className="hover:text-[#D43D1D] hover:scale-90 duration-300"
        >
          Contact
        </a>
      </nav>
      <div className="hidden sm:flex gap-3">
        {isAuthenticated ? (
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
            className="font-bold text-xl font-serif text-black :text-[#D43D1D] hover:scale-105"
          >
            LogOut
          </button>
        ) : (
          <button
            onClick={() => loginWithRedirect()}
            className="font-bold text-xl font-serif text-black hover:text-[#D43D1D] hover:scale-110 duration-200"
          >
            Login
          </button>
        )}
        <a
          href="https://www.facebook.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook
            size={25}
            className="hover:text-[#D43D1D] text-black duration-200 hover:scale-125"
          />
        </a>
        <a
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram
            size={25}
            className="hover:text-[#D43D1D] text-black duration-200 hover:scale-125"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            size={25}
            className="hover:text-[#D43D1D] text-black duration-200 hover:scale-125"
          />
        </a>
      </div>
      <div className="sm:hidden flex items-center">
        {!isMobileMenuOpen ? (
          <FaBars
            className="text-gray-700 text-3xl font-bold cursor-pointer"
            onClick={toggleMobileMenu}
          />
        ) : (
          <FaTimes
            className="text-gray-700 text-3xl cursor-pointer"
            onClick={toggleMobileMenu}
          />
        )}
      </div>
      {isMobileMenuOpen && (
        <div className="absolute top-0 right-0 bg-gray-800 text-white w-full h-screen flex flex-col items-center justify-center z-20">
          <button
            className="text-3xl absolute top-4 right-4"
            onClick={toggleMobileMenu}
          >
            <FaTimes />
          </button>
          <Link to="/" className="text-2xl mb-4 p-2" onClick={toggleMobileMenu}>
            Home
          </Link>
          <Link
            to="/about"
            className="text-2xl mb-4 p-2"
            onClick={toggleMobileMenu}
          >
            About
          </Link>
          <Link
            to="/destinations"
            className="text-2xl mb-4 p-2"
            onClick={toggleMobileMenu}
          >
            Destinations
          </Link>
          <Link
            to="/blogs"
            className="text-2xl mb-4 p-2"
            onClick={toggleMobileMenu}
          >
            Blogs
          </Link>
          <Link
            to="/contact"
            className="text-2xl mb-4 p-2"
            onClick={toggleMobileMenu}
          >
            Contact
          </Link>
          <div>
            {isAuthenticated ? (
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
                className="font-bold text-xl font-serif"
              >
                LogOut
              </button>
            ) : (
              <button
                onClick={() => loginWithRedirect()}
                className="font-bold text-xl font-serif"
              >
                Login
              </button>
            )}
          </div>
          <div className="flex gap-5 mt-4">
            <a
              href="https://www.facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={25}
                className="hover:text-[#D43D1D] duration-200 hover:scale-125"
              />
            </a>
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={25}
                className="hover:text-[#D43D1D] duration-200 hover:scale-125"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={25}
                className="hover:text-[#D43D1D] duration-200 hover:scale-125"
              />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;
