import { createContext, useState, useEffect, useRef } from "react";
import { CiLocationOn, CiHeart, CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { PiShoppingBagLight } from "react-icons/pi";
import { FiMenu, FiUser, FiPhone, FiX } from "react-icons/fi";

// Theme Context
const ThemeContext = createContext<{ theme: string; toggleTheme: () => void }>({
  theme: "light",
  toggleTheme: () => {},
});

// Reusable Dropdown Component
function Dropdown({
  label,
  items,
  isOpen,
  toggle,
  onSelect,
  type,
  selected,
}: {
  label: string;
  items: string[];
  isOpen: boolean;
  toggle: () => void;
  onSelect: (type: string, value: string) => void;
  type: string;
  selected?: string;
}) {
  return (
    <>
      {/* Mobile Secondary Navbar (Integrated into Sidebar) */}
      <div className="sm:hidden flex flex-col space-y-2">
        {/* Home Dropdown */}
        <div className="relative">
          <button
            onClick={toggleHomeDropdown}
            className="w-full text-left py-2 inline-flex items-center cursor-pointer text-sm text-white"
          >
            <span>Home</span>
            <svg
              className="w-3 h-3 ml-1 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`mt-1 w-full rounded-md shadow-lg bg-gray-700 ring-1 ring-gray-600 ring-opacity-50 ${
              isHomeDropdownOpen ? "block" : "hidden"
            }`}
          >
            <div className="py-1">
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 cursor-pointer">
                Main Home
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 cursor-pointer">
                Minimal Home
              </button>
            </div>
          </div>
        </div>
        {/* Shop Dropdown */}
        <div className="relative">
          <button
            onClick={toggleShopDropdown}
            className="w-full text-left py-2 inline-flex items-center cursor-pointer text-sm text-white"
          >
            <span>Shop</span>
            <svg
              className="w-3 h-3 ml-1 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`mt-1 w-full rounded-md shadow-lg bg-gray-700 ring-1 ring-gray-600 ring-opacity-50 ${
              isShopDropdownOpen ? "block" : "hidden"
            }`}
          >
            <div className="py-1">
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 cursor-pointer">
                Shop Grid
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 cursor-pointer">
                Shop List
              </button>
            </div>
          </div>
        </div>
        {/* Pages Dropdown */}
        <div className="relative">
          <button
            onClick={togglePagesDropdown}
            className="w-full text-left py-2 inline-flex items-center cursor-pointer text-sm text-white"
          >
            <span>Pages</span>
            <svg
              className="w-3 h-3 ml-1 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`mt-1 w-full rounded-md shadow-lg bg-gray-700 ring-1 ring-gray-600 ring-opacity-50 ${
              isPagesDropdownOpen ? "block" : "hidden"
            }`}
          >
            <div className="py-1">
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 cursor-pointer">
                FAQ
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 cursor-pointer">
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
        {/* About Us */}
        <button className="w-full text-left py-2 text-sm text-white hover:text-gray-300 cursor-pointer">
          About Us
        </button>
        {/* Contact Us */}
        <button className="w-full text-left py-2 text-sm text-white hover:text-gray-300 cursor-pointer">
          Contact Us
        </button>
      </div>

      {/* Desktop Secondary Navbar */}
      <div className="hidden sm:block bg-white border-b border-gray-300">
        <div className="flex justify-center items-center p-4">
          <div className="flex space-x-8">
            {/* Home Dropdown */}
            <div className="relative">
              <button
                onClick={toggleHomeDropdown}
                className="py-2 inline-flex items-center cursor-pointer text-sm text-gray-500 hover:text-gray-700"
              >
                <span>Home</span>
                <svg
                  className="w-3 h-3 ml-1 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-gray-400 ring-opacity-50 ${
                  isHomeDropdownOpen ? "block" : "hidden"
                }`}
              >
                <div className="py-1">
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Main Home
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Minimal Home
                  </button>
                </div>
              </div>
            </div>
            {/* Shop Dropdown */}
            <div className="relative">
              <button
                onClick={toggleShopDropdown}
                className="py-2 inline-flex items-center cursor-pointer text-sm text-gray-500 hover:text-gray-700"
              >
                <span>Shop</span>
                <svg
                  className="w-3 h-3 ml-1 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-gray-400 ring-opacity-50 ${
                  isShopDropdownOpen ? "block" : "hidden"
                }`}
              >
                <div className="py-1">
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Shop Grid
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Shop List
                  </button>
                </div>
              </div>
            </div>
            {/* Pages Dropdown */}
            <div className="relative">
              <button
                onClick={togglePagesDropdown}
                className="py-2 inline-flex items-center cursor-pointer text-sm text-gray-500 hover:text-gray-700"
              >
                <span>Pages</span>
                <svg
                  className="w-3 h-3 ml-1 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-gray-400 ring-opacity-50 ${
                  isPagesDropdownOpen ? "block" : "hidden"
                }`}
              >
                <div className="py-1">
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                    FAQ
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Privacy Policy
                  </button>
                </div>
              </div>
            </div>
            {/* About Us */}
            <button className="py-2 text-sm text-gray-500 hover:text-gray-700 cursor-pointer">
              About Us
            </button>
            {/* Contact Us */}
            <button className="py-2 text-sm text-gray-500 hover:text-gray-700 cursor-pointer">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function NavBar() {
  const [dropdowns, setDropdowns] = useState({
    settings: false,
    location: false,
    currency: false,
    language: false,
  });
  const [selections, setSelections] = useState({
    location: "Select Location",
    currency: "Select Currency",
    language: "Select Language",
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Theme management
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const toggleDropdown = (key: keyof typeof dropdowns) => {
    setDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleOptionClick = (type: string, value: string) => {
    setSelections((prev) => ({ ...prev, [type]: value }));
    setDropdowns({ settings: false, location: false, currency: false, language: false });
  };

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  // Close sidebar on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isSidebarOpen &&
        sidebarRef.current &&
        event.target instanceof Node &&
        !sidebarRef.current.contains(event.target)
      ) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen]);

  return (
    <div className="bg-white">
      {/* Mobile Sidebar Toggle Button */}
      {!isSidebarOpen && (
        <div className="sm:hidden fixed top-4 left-4 z-50">
          <button
            onClick={toggleSidebar}
            className="text-gray-500 hover:text-gray-700"
          >
            <FiMenu className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className={`sm:hidden fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 p-4 flex flex-col space-y-4`}
      >
        {/* Sign In (User Icon), Heart, Shopping Bag */}
        <div className="flex justify-between items-center mb-4">
          <button className="text-white hover:text-gray-300 cursor-pointer py-2">
            <FiUser className="w-6 h-6" />
          </button>
          <button className="cursor-pointer">
            <CiHeart className="w-6 h-6 text-white hover:text-gray-300" />
          </button>
          <button className="relative cursor-pointer">
            <PiShoppingBagLight className="w-6 h-6 text-white hover:text-gray-300" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </button>
        </div>
        {/* Search */}
        <div className="w-full">
          <div className="flex items-center border border-gray-500 rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="flex-grow py-2 px-3 text-sm text-gray-300 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-3 text-sm">
              Search
            </button>
          </div>
        </div>
        {/* Combined Settings Dropdown */}
        <div className="relative">
          <button
            onClick={handleSettingsDropdownToggle}
            className="py-2 inline-flex items-center cursor-pointer text-sm text-white"
          >
            {theme === "light" ? (
              <>
                <FaMoon className="w-5 h-5 mr-2" />
                Dark Mode
              </>
            ) : (
              <>
                <CiSun className="w-5 h-5 mr-2" />
                Light Mode
              </>
            )}
          </button>
          <div
            className={`mt-2 w-full rounded-md shadow-lg bg-gray-700 ring-1 ring-gray-600 ring-opacity-50 ${
              isSettingsDropdownOpen ? "block" : "hidden"
            }`}
          >
            <div className="py-1">
              <div className="px-4 py-2 text-xs text-gray-400">Location</div>
              <button
                onClick={() => handleOptionClick("location", "New York")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 cursor-pointer"
              >
                New York {selectedLocation === "New York" && "✓"}
              </button>
              <button
                onClick={() => handleOptionClick("location", "Los Angeles")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 cursor-pointer"
              >
                Los Angeles {selectedLocation === "Los Angeles" && "✓"}
              </button>
              <button
                onClick={() => handleOptionClick("location", "Chicago")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 cursor-pointer"
              >
                Chicago {selectedLocation === "Chicago" && "✓"}
              </button>
              <div className="border-t border-gray-600 my-2"></div>
              <div className="px-4 py-2 text-xs text-gray-400">Currency</div>
              <button
                onClick={() => handleOptionClick("currency", "USD")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 cursor-pointer"
              >
                USD {selectedCurrency === "USD" && "✓"}
              </button>
              <button
                onClick={() => handleOptionClick("currency", "EUR")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 cursor-pointer"
              >
                EUR {selectedCurrency === "EUR" && "✓"}
              </button>
              <button
                onClick={() => handleOptionClick("currency", "GBP")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 cursor-pointer"
              >
                GBP {selectedCurrency === "GBP" && "✓"}
              </button>
              <div className="border-t border-gray-600 my-2"></div>
              <div className="px-4 py-2 text-xs text-gray-400">Language</div>
              <button
                onClick={() => handleOptionClick("language", "English")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 cursor-pointer"
              >
                English {selectedLanguage === "English" && "✓"}
              </button>
              <button
                onClick={() => handleOptionClick("language", "Spanish")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 cursor-pointer"
              >
                Spanish {selectedLanguage === "Spanish" && "✓"}
              </button>
              <button
                onClick={() => handleOptionClick("language", "French")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 cursor-pointer"
              >
                French {selectedLanguage === "French" && "✓"}
              </button>
            </div>
          </div>
        </div>
        {/* Secondary Navbar (Mobile) */}
        <SecondaryNavBar />
      </div>

      {/* Desktop Navbar */}
      <div className="hidden sm:block">
        {/* Top Navbar: Location, Currency, Language, Sign In/Sign Up */}
        <div
          id="navbar-top"
          className="flex flex-col sm:flex-row justify-between items-center p-4 border-b border-gray-300 text-xs text-gray-500"
        >
          {/* Location, Currency, Language */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-2 sm:mb-0 sm:ml-4 md:ml-24">
            <div className="flex items-center">
              <span>
                <CiLocationOn className="w-4 h-4" />
                <div className="ml-1">
                  <Dropdown
                    label={selections.location}
                    items={["New York", "Los Angeles", "Chicago"]}
                    isOpen={dropdowns.location}
                    toggle={() => toggleDropdown("location")}
                    onSelect={handleOptionClick}
                    type="location"
                    selected={selections.location}
                  />
                </div>
              </div>
              <Dropdown
                label={selections.currency}
                items={["USD", "EUR", "GBP"]}
                isOpen={dropdowns.currency}
                toggle={() => toggleDropdown("currency")}
                onSelect={handleOptionClick}
                type="currency"
                selected={selections.currency}
              />
              <Dropdown
                label={selections.language}
                items={["English", "Spanish", "French"]}
                isOpen={dropdowns.language}
                toggle={() => toggleDropdown("language")}
                onSelect={handleOptionClick}
                type="language"
                selected={selections.language}
              />
            </div>
            <div className="flex space-x-4 items-center mr-4 md:mr-24">
              <button className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100">
                Sign In
              </button>
              <button className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100">
                Sign Up
              </button>
              <button
                onClick={toggleTheme}
                className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100"
              >
                {theme === "light" ? <FaMoon className="w-5 h-5" /> : <CiSun className="w-5 h-5" />}
              </button>
            </div>
          </div>
          {/* Sign In / Sign Up */}
          <div className="flex space-x-4 items-center mr-4 md:mr-24">
            <button className="cursor-pointer">Sign In</button>
            <button className="cursor-pointer">Sign Up</button>
          </div>
        </div>
        {/* Main Navbar: Logo, Search, Heart, Shopping Bag */}
        <div
          id="navbar-main"
          className="flex flex-col sm:flex-row justify-between items-center p-4 border-b border-gray-300"
        >
          {/* Logo */}
          <div className="ml-4 sm:ml-24 mb-2 sm:mb-0">
            <img src="/Logo/Logo.svg" alt="Logo" className="h-6 sm:h-8" />
          </div>
          {/* Search */}
          <div className="w-full sm:flex-grow sm:max-w-md mx-4 mb-2 sm:mb-0">
            <div className="flex items-center border border-gray-300 rounded-md">
              <input
                type="text"
                placeholder="Search..."
                className="flex-grow py-2 px-4 rounded-l-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-r-md text-sm">
                Search
              </button>
            </div>
          </div>
          {/* Heart and Shopping Bag Icons */}
          <div className="flex items-center space-x-4 mr-4 md:mr-24">
            <button className="cursor-pointer">
              <CiHeart className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 hover:text-gray-700" />
            </button>
            <button className="relative cursor-pointer">
              <PiShoppingBagLight className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 hover:text-gray-700" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>
        {/* Secondary Navbar (Desktop) */}
        <SecondaryNavBar />
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <NavBar />
    </div>
  );
}


export default NavBar;