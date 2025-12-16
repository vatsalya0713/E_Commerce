import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { isLoggedIn, username, logout } = useContext(AuthContext);
  const { cartCount } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);


  return (
    <nav className="bg-white shadow-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <Link
            to="/"
            className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          >
            SHOPLANE
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-gray-700 hover:text-blue-600 transition"
            onClick={() => setOpen(!open)}
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>

          {/* NAV MENU */}
          <div
            className={`absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent
              shadow-md lg:shadow-none transition-all duration-300 ease-in-out
              ${open ? "opacity-100" : "opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto"}`}
          >
            <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-8 py-4 lg:py-0 px-6 lg:px-0">

              {/* Clothing */}
              <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-blue-600 hover:underline underline-offset-4 transition font-medium"
                >
                  Clothing
                </Link>
              </li>

              {/* Registration + Login */}
              {!isLoggedIn && (
                <>
                  <li>
                    <Link
                      to="/register"
                      className="text-gray-700 hover:text-blue-600 hover:underline underline-offset-4 transition font-medium"
                    >
                      Registration
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/login"
                      className="text-gray-700 hover:text-blue-600 hover:underline underline-offset-4 transition font-medium"
                    >
                      Login
                    </Link>
                  </li>
                </>
              )}

              

              {/* MY ACCOUNT */}
<li className="relative">
  <button
    onClick={() => setAccountOpen(!accountOpen)}
    className="flex items-center text-gray-700 hover:text-blue-600 transition"
  >
    <i className="fas fa-user-circle text-2xl"></i>
  </button>

  {/* DROPDOWN */}
  {accountOpen && (
    <div className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-lg border border-gray-100 z-50">
      <ul className="py-2 text-sm text-gray-700">

        <li>
          <Link
            to="/profile"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => setAccountOpen(false)}
          >
            My Profile
          </Link>
        </li>

        <li>
          <Link
            to="/orders"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => setAccountOpen(false)}
          >
            My Orders
          </Link>
        </li>

        {isLoggedIn && (
          <li>
            <button
              onClick={() => {
                logout();
                setAccountOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </div>
  )}
</li>


              {/* CART ICON */}
              <li className="relative cursor-pointer">
                <Link to="/cart">
                  <i className="fas fa-shopping-cart text-2xl text-gray-700 hover:text-blue-600 transition"></i>

                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full shadow-sm animate-pulse">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
