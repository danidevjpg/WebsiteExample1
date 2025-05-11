import { createContext, useState, useEffect, useRef } from "react";
import { CiLocationOn, CiHeart, CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { PiShoppingBagLight } from "react-icons/pi";
import { FiMenu, FiUser, FiX } from "react-icons/fi";

// Theme Context for managing light/dark mode
const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

// Reusable Dropdown Component for location, currency, language
type DropdownProps = {
  label: string;
  items: string[];
  isOpen: boolean;
  toggle: () => void;
  onSelect: (type: "location" | "currency" | "language", value: string) => void;
  type: "location" | "currency" | "language";
  selected: string;
};

function Dropdown({
  label,
  items,
  isOpen,
  toggle,
  onSelect,
  type,
  selected,
}: DropdownProps) {
  return (
    <div className="relative">
      <button
        onClick={toggle}
        className="inline-flex items-center cursor-pointer text-xs text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
      >
        <span>{label}</span>
        <svg
          className="w-3 h-3 ml-1"
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
      {isOpen && (
        <div className="absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-gray-400 dark:ring-gray-600 ring-opacity-50 z-50">
          <div className="py-1">
            {items.map((item) => (
              <button
                key={item}
                onClick={() => onSelect(type, item)}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                {item} {selected === item && "✓"}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Secondary Navbar Component for Home, Shop, Pages, About Us, Contact Us
function SecondaryNavBar() {
  // State to manage dropdown visibility
  const [dropdowns, setDropdowns] = useState({
    home: false,
    shop: false,
    pages: false,
  });

  // Toggle dropdown visibility
  const toggleDropdown = (key: "home" | "shop" | "pages") => {
    setDropdowns((prev) => ({
      ...prev,
      home: key === "home" ? !prev.home : false,
      shop: key === "shop" ? !prev.shop : false,
      pages: key === "pages" ? !prev.pages : false,
    }));
  };

  return (
    <>
      {/* Mobile Secondary Navbar (Integrated into Sidebar) */}
      <div className="sm:hidden flex flex-col space-y-2">
        {/* Home Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("home")}
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
          {dropdowns.home && (
            <div className="mt-1 w-full rounded-md shadow-lg bg-gray-700 ring-1 ring-gray-600 ring-opacity-50">
              <div className="py-1">
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-600">
                  Main Home
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-600">
                  Minimal Home
                </button>
              </div>
            </div>
          )}
        </div>
        {/* Shop Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("shop")}
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
          {dropdowns.shop && (
            <div className="mt-1 w-full rounded-md shadow-lg bg-gray-700 ring-1 ring-gray-600 ring-opacity-50">
              <div className="py-1">
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-600">
                  Shop Grid
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-600">
                  Shop List
                </button>
              </div>
            </div>
          )}
        </div>
        {/* Pages Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("pages")}
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
          {dropdowns.pages && (
            <div className="mt-1 w-full rounded-md shadow-lg bg-gray-700 ring-1 ring-gray-600 ring-opacity-50">
              <div className="py-1">
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-600">
                  FAQ
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-600">
                  Privacy Policy
                </button>
              </div>
            </div>
          )}
        </div>
        {/* About Us */}
        <button className="w-full text-left py-2 text-sm text-white hover:text-gray-300">
          About Us
        </button>
        {/* Contact Us */}
        <button className="w-full text-left py-2 text-sm text-white hover:text-gray-300">
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
                onClick={() => toggleDropdown("home")}
                className="py-2 inline-flex items-center cursor-pointer text-sm text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
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
              {dropdowns.home && (
                <div className="absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-gray-400 dark:ring-gray-600 ring-opacity-50 z-50">
                  <div className="py-1">
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600">
                      Main Home
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600">
                      Minimal Home
                    </button>
                  </div>
                </div>
              )}
            </div>
            {/* Shop Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("shop")}
                className="py-2 inline-flex items-center cursor-pointer text-sm text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
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
              {dropdowns.shop && (
                <div className="absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-gray-400 dark:ring-gray-600 ring-opacity-50 z-50">
                  <div className="py-1">
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600">
                      Shop Grid
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600">
                      Shop List
                    </button>
                  </div>
                </div>
              )}
            </div>
            {/* Pages Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("pages")}
                className="py-2 inline-flex items-center cursor-pointer text-sm text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
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
              {dropdowns.pages && (
                <div className="absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-gray-400 dark:ring-gray-600 ring-opacity-50 z-50">
                  <div className="py-1">
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600">
                      FAQ
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600">
                      Privacy Policy
                    </button>
                  </div>
                </div>
              )}
            </div>
            {/* About Us */}
            <button className="py-2 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100">
              About Us
            </button>
            {/* Contact Us */}
            <button className="py-2 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function NavBar() {
  // State for managing dropdowns (location, currency, language)
  const [dropdowns, setDropdowns] = useState({
    settings: false,
    location: false,
    currency: false,
    language: false,
  });

  // State for storing selected options
  const [selections, setSelections] = useState({
    location: "Select Location",
    currency: "Select Currency",
    language: "Select Language",
  });

  // State for mobile sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // State for theme (light/dark)
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  // Ref for sidebar to handle click outside
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Apply theme to document and save to localStorage
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme between light and dark
  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  // Toggle dropdown visibility
  const toggleDropdown = (key: "settings" | "location" | "currency" | "language") => {
    setDropdowns((prev) => ({
      ...prev,
      settings: key === "settings" ? !prev.settings : false,
      location: key === "location" ? !prev.location : false,
      currency: key === "currency" ? !prev.currency : false,
      language: key === "language" ? !prev.language : false,
    }));
  };

  // Handle dropdown option selection
  const handleOptionClick = (type: "location" | "currency" | "language", value: string) => {
    setSelections((prev) => ({ ...prev, [type]: value }));
    setDropdowns({ settings: false, location: false, currency: false, language: false });
  };

  // Toggle mobile sidebar
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
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="bg-white dark:bg-gray-800">
        {/* Mobile Sidebar Toggle Button */}
        {!isSidebarOpen && (
          <div className="sm:hidden fixed top-4 left-4 z-50">
            <button
              onClick={toggleSidebar}
              className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100"
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
          {/* Close Button */}
          <button
            onClick={toggleSidebar}
            className="self-end text-white hover:text-gray-300"
          >
            <FiX className="w-6 h-6" />
          </button>
          {/* User, Heart, Shopping Bag */}
          <div className="flex justify-between items-center mb-4">
            <button className="text-white hover:text-gray-300">
              <FiUser className="w-6 h-6" />
            </button>
            <button>
              <CiHeart className="w-6 h-6 text-white hover:text-gray-300" />
            </button>
            <button className="relative">
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
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="py-2 inline-flex items-center text-sm text-white hover:text-gray-300"
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
          {/* Location, Currency, Language Dropdowns */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("settings")}
              className="py-2 inline-flex items-center text-sm text-white hover:text-gray-300"
            >
              Settings
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
            {dropdowns.settings && (
              <div className="mt-2 w-full rounded-md shadow-lg bg-gray-700 ring-1 ring-gray-600 ring-opacity-50">
                <div className="py-1">
                  <div className="px-4 py-2 text-xs text-gray-400">Location</div>
                  {["New York", "Los Angeles", "Chicago"].map((item) => (
                    <button
                      key={item}
                      onClick={() => handleOptionClick("location", item)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-600"
                    >
                      {item} {selections.location === item && "✓"}
                    </button>
                  ))}
                  <div className="border-t border-gray-600 my-2"></div>
                  <div className="px-4 py-2 text-xs text-gray-400">Currency</div>
                  {["USD", "EUR", "GBP"].map((item) => (
                    <button
                      key={item}
                      onClick={() => handleOptionClick("currency", item)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-600"
                    >
                      {item} {selections.currency === item && "✓"}
                    </button>
                  ))}
                  <div className="border-t border-gray-600 my-2"></div>
                  <div className="px-4 py-2 text-xs text-gray-400">Language</div>
                  {["English", "Spanish", "French"].map((item) => (
                    <button
                      key={item}
                      onClick={() => handleOptionClick("language", item)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-600"
                    >
                      {item} {selections.language === item && "✓"}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* Secondary Navbar (Mobile) */}
          <SecondaryNavBar />
        </div>

        {/* Desktop Navbar */}
        <div className="hidden sm:block">
          {/* Top Navbar: Location, Currency, Language, Sign In/Sign Up */}
          <div
            id="navbar-top"
            className="flex flex-col sm:flex-row justify-between items-center p-4 border-b border-gray-300 text-xs text-gray-500 dark:text-gray-300"
          >
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-2 sm:mb-0 sm:ml-4 md:ml-24">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <CiLocationOn className="w-4 h-4 mr-1" />
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
            </div>
            <div className="flex space-x-4 items-center mr-4 md:mr-24">
              <button className="hover:text-gray-700 dark:hover:text-gray-100">
                Sign In
              </button>
              <button className="hover:text-gray-700 dark:hover:text-gray-100">
                Sign Up
              </button>
              <button
                onClick={toggleTheme}
                className="hover:text-gray-700 dark:hover:text-gray-100"
              >
                {theme === "light" ? <FaMoon className="w-5 h-5" /> : <CiSun className="w-5 h-5" />}
              </button>
            </div>
          </div>
          {/* Main Navbar: Logo, Search, Heart, Shopping Bag */}
          <div
            id="navbar-main"
            className="flex flex-col sm:flex-row justify-between items-center p-4 border-b border-gray-300"
          >
            <div className="ml-4 sm:ml-24 mb-2 sm:mb-0">
              <img src="/Logo/Logo.svg" alt="Logo" className="h-6 sm:h-8" />
            </div>
            <div className="w-full sm:flex-grow sm:max-w-md mx-4 mb-2 sm:mb-0">
              <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md">
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-grow py-2 px-4 rounded-l-md text-sm text-gray-700 dark:text-gray-300 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-r-md text-sm">
                  Search
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4 mr-4 md:mr-24">
              <button>
                <CiHeart className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100" />
              </button>
              <button className="relative">
                <PiShoppingBagLight className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100" />
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
    </ThemeContext.Provider>
  );
}

export default NavBar;