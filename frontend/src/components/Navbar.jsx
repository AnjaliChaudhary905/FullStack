import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { FaFacebook, FaCartShopping, FaBars, FaXmark } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "../hooks/useAuth";
import { getCookie } from "../../helper/Helper";
import toast from "react-hot-toast";
import { clearCartOnLogout, setUserCart } from "../redux/features/cartSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const token = getCookie("token");

  // Core Logic & Auth State Integration
  const { logout, fetchUser } = useAuth();
  const authState = useSelector((state) => state.auth) || {};
  const { user, isAuthenticated } = authState;

  // 1. Fetch Cart Items & Calculate Total Quantity for the Badge Popup
  const cart = useSelector((state) => state.cart.cartItems) || [];
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const fetchUserData = async () => {
    const res = await fetchUser();
    if (res.success) {
      toast.success(res.message);

      if (res.data) {
        dispatch(setUserCart(res.data));
      }
    }
  };

  useEffect(() => {
    if (token) {
      fetchUserData();
    }
  }, [token]);

  const handleLogout = async () => {
    try {
      await logout();
      dispatch(clearCartOnLogout());
      setIsOpen(false);
      navigate("/login");
    } catch (error) {
      console.error("logout failed:", error);
    }
  };

  const iconClass = "text-2xl text-gray-500 hover:text-orange-500 transition-colors cursor-pointer";

  // Dynamic Desktop Link Highlighter
  const linkStyles = ({ isActive }) =>
    `py-2 px-3 text-[14px] font-semibold transition-colors duration-200 ${isActive
      ? "text-orange-600 bg-orange-50 rounded-lg"
      : "text-[#6B788E] hover:text-orange-500"
    }`;

  // Dynamic Mobile Link Highlighter
  const mobileLinkStyles = ({ isActive }) =>
    `py-3 px-4 text-[15px] font-medium border-b border-gray-100 block transition-colors duration-200 ${isActive ? "text-orange-600 bg-orange-50/50" : "text-[#6B788E]"
    }`;

  return (
    <header className="bg-white border-b border-gray-100 shadow-sm sticky z-50 top-0 left-0 w-full">
      <div className="flex justify-between items-center h-20 px-4 md:px-8 max-w-7xl mx-auto">

        {/* Brand Identity / Logo */}
        <div
          onClick={() => {
            navigate("/");
            setIsOpen(false);
          }}
          className="flex items-center gap-2 cursor-pointer select-none"
        >
          <img className="w-8 h-8 object-contain" src="logo.png" alt="logo" />
          <h5 className="font-semibold text-[#0C6967] text-[25px] tracking-tight">momos</h5>
        </div>

        {/* Desktop Primary Navigation Routes */}
        <nav className="hidden lg:flex gap-2 items-center">
          <NavLink to="/about" className={linkStyles}>About Us</NavLink>
          <NavLink to="/menu" className={linkStyles}>Our Menu</NavLink>
          <NavLink to="/service" className={linkStyles}>Our Services</NavLink>
          <NavLink to="/allergy-advice" className={linkStyles}>Allergy Advice</NavLink>
        </nav>

        {/* Desktop Controls */}
        <div className="hidden lg:flex gap-6 items-center">
          <div className="flex gap-4 items-center">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook className={iconClass} /></a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer"><AiFillTikTok className={iconClass} /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagramSquare className={iconClass} /></a>
          </div>

          <button
            onClick={() => navigate("/contact")}
            className="px-5 py-2.5 rounded-full text-white bg-[#D95103] text-[14px] font-medium transition duration-200 hover:bg-orange-700 cursor-pointer shadow-sm border-0"
          >
            Contact us
          </button>

          {/* 2. Desktop Shopping Cart Link with Relative Layout and Notification Badge */}
          <NavLink to="/cart" className={({ isActive }) => `relative p-2 block transition-colors duration-200 ${isActive ? "text-orange-600" : "text-gray-700 hover:text-orange-500"}`}>
            <FaCartShopping size={24} />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white shadow-sm select-none pointer-events-none">
                {totalItems}
              </span>
            )}
          </NavLink>

          {/* Auth Area */}
          {isAuthenticated && user ? (
            <div className="flex items-center gap-4">
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl text-white font-medium text-sm transition duration-150 active:scale-95 cursor-pointer"
              >
                Logout
              </button>
            </div>
          ) : (
            /* Unauthenticated Desktop State */
            <div className="flex items-center gap-2">
              <button
                onClick={() => navigate("/login")}
                className="px-5 py-2.5 border border-gray-200 rounded-full text-[#6B788E] hover:text-orange-600 hover:border-orange-200 hover:bg-orange-50/50 text-[14px] font-semibold transition duration-200 cursor-pointer text-center"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/sign-up")}
                className="px-5 py-2.5 bg-[#0C6967] hover:bg-[#0a5755] rounded-full text-white text-[14px] font-semibold transition duration-200 cursor-pointer text-center shadow-sm"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>

        {/* Mobile View Toggle Trigger */}
        <div className="flex lg:hidden items-center gap-4">
          {/* 3. Mobile Shopping Cart Link with Relative Layout and Notification Badge */}
          <NavLink to="/cart" className={({ isActive }) => `relative p-2 block ${isActive ? "text-orange-600" : "text-gray-700"}`}>
            <FaCartShopping size={22} />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[9px] font-bold text-white shadow-sm select-none pointer-events-none">
                {totalItems}
              </span>
            )}
          </NavLink>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 text-2xl p-1 focus:outline-none"
          >
            {isOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Clean Selective Dropdown Container */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg z-40 flex flex-col p-4 lg:hidden">
          <nav className="flex flex-col mb-4">
            <NavLink to="/about" onClick={() => setIsOpen(false)} className={mobileLinkStyles}>About Us</NavLink>
            <NavLink to="/menu" onClick={() => setIsOpen(false)} className={mobileLinkStyles}>Our Menu</NavLink>
            <NavLink to="/service" onClick={() => setIsOpen(false)} className={mobileLinkStyles}>Our Services</NavLink>
            <NavLink to="/allergy-advice" onClick={() => setIsOpen(false)} className={mobileLinkStyles}>Allergy Advice</NavLink>
          </nav>

          {/* Core Menu Action Drawer Options */}
          <div className="flex flex-col gap-4 pt-2">
            {!isAuthenticated ? (
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      navigate("/login");
                      setIsOpen(false);
                    }}
                    className="w-full bg-white text-[#6B788E] border border-gray-200 py-3 rounded-full font-semibold text-center text-sm shadow-sm cursor-pointer hover:bg-gray-50 active:scale-98 transition duration-150"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      navigate("/sign-up");
                      setIsOpen(false);
                    }}
                    className="w-full bg-[#0C6967] text-white py-3 rounded-full font-semibold text-center text-sm shadow-sm cursor-pointer hover:bg-[#0a5755] active:scale-98 transition duration-150"
                  >
                    Sign Up
                  </button>
                </div>
                <button
                  onClick={() => {
                    navigate("/contact");
                    setIsOpen(false);
                  }}
                  className="w-full bg-[#D95103] text-white py-3 rounded-full font-semibold text-center text-sm shadow-sm cursor-pointer mt-1"
                >
                  Contact us
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => {
                    navigate("/contact");
                    setIsOpen(false);
                  }}
                  className="w-full bg-[#D95103] text-white py-3 rounded-full font-semibold text-center text-sm shadow-sm cursor-pointer"
                >
                  Contact us
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-500 text-white py-2 rounded-xl font-medium text-center text-xs mt-2"
                >
                  Logout Account
                </button>
              </>
            )}

            {/* Social Footers */}
            <div className="flex justify-center gap-6 items-center py-2 border-t border-gray-100 mt-1">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook className="text-xl text-gray-500" /></a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer"><AiFillTikTok className="text-xl text-gray-500" /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagramSquare className="text-xl text-gray-500" /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;