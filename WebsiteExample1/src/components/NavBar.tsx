import { useState, useEffect, useRef } from "react";
import { CiLocationOn, CiHeart } from "react-icons/ci";
import { PiShoppingBagLight } from "react-icons/pi";
import { FiMenu, FiUser, FiPhone, FiX } from "react-icons/fi";

function SecondaryNavBar() {
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

  const toggleHomeDropdown = () => {
    setIsHomeDropdownOpen(!isHomeDropdownOpen);
  };

  const toggleShopDropdown = () => {
    setIsShopDropdownOpen(!isShopDropdownOpen);
  };

  const togglePagesDropdown = () => {
    setIsPagesDropdownOpen(!isPagesDropdownOpen);
  };

  return (
    <>
      {/* Mobile Secondary Navbar (Integrated into Sidebar) */}
      <div className="sm:hidden flex flex-col space-y-2">
        {/* Home Dropdown */}
        <div className="relative">
          <button
            onClick={toggleHomeDropdown}
            className="w-full text-left py-2 inline-flex items-center cursor-pointer text-sm text-white hover:text-gray-200 transition-colors duration-200"
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
            className={`mt-1 w-full rounded-lg bg-gray-800/90 backdrop-blur-sm ring-1 ring-gray-600/50 ${
              isHomeDropdownOpen ? "block" : "hidden"
            } transition-all duration-200 ease-in-out`}
          >
            <div className="py-1">
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/80 hover:text-white cursor-pointer transition-colors duration-150">
                Main Home
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/80 hover:text-white cursor-pointer transition-colors duration-150">
                Minimal Home
              </button>
            </div>
          </div>
        </div>
        {/* Shop Dropdown */}
        <div className="relative">
          <button
            onClick={toggleShopDropdown}
            className="w-full text-left py-2 inline-flex items-center cursor-pointer text-sm text-white hover:text-gray-200 transition-colors duration-200"
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
            className={`mt-1 w-full rounded-lg bg-gray-800/90 backdrop-blur-sm ring-1 ring-gray-600/50 ${
              isShopDropdownOpen ? "block" : "hidden"
            } transition-all duration-200 ease-in-out`}
          >
            <div className="py-1">
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/80 hover:text-white cursor-pointer transition-colors duration-150">
                Shop Grid
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/80 hover:text-white cursor-pointer transition-colors duration-150">
                Shop List
              </button>
            </div>
          </div>
        </div>
        {/* Pages Dropdown */}
        <div className="relative">
          <button
            onClick={togglePagesDropdown}
            className="w-full text-left py-2 inline-flex items-center cursor-pointer text-sm text-white hover:text-gray-200 transition-colors duration-200"
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
            className={`mt-1 w-full rounded-lg bg-gray-800/90 backdrop-blur-sm ring-1 ring-gray-600/50 ${
              isPagesDropdownOpen ? "block" : "hidden"
            } transition-all duration-200 ease-in-out`}
          >
            <div className="py-1">
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/80 hover:text-white cursor-pointer transition-colors duration-150">
                FAQ
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/80 hover:text-white cursor-pointer transition-colors duration-150">
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
        {/* About Us */}
        <button className="w-full text-left py-2 text-sm text-white hover:text-gray-200 cursor-pointer transition-colors duration-200">
          About Us
        </button>
        {/* Contact Us */}
        <button className="w-full text-left py-2 text-sm text-white hover:text-gray-200 cursor-pointer transition-colors duration-200">
          Contact Us
        </button>
      </div>

      {/* Desktop Secondary Navbar */}
      <div className="hidden sm:block bg-gray-800 border-b border-gray-300 text-gray-300">
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
                    d="M19 9l-7 7-7-7 trombosis"/>
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
  const [isSettingsDropdownOpen, setIsSettingsDropdownOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Select Location");
  const [selectedCurrency, setSelectedCurrency] = useState("Select Currency");
  const [selectedLanguage, setSelectedLanguage] = useState("Select Language");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleSettingsDropdownToggle = () => {
    setIsSettingsDropdownOpen(!isSettingsDropdownOpen);
  };

  const handleLocationDropdownToggle = () => {
    setIsLocationDropdownOpen(!isLocationDropdownOpen);
  };

  const handleCurrencyDropdownToggle = () => {
    setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen);
  };

  const handleLanguageDropdownToggle = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const handleOptionClick = (type: "location" | "currency" | "language", value: string) => {
    if (type === "location") setSelectedLocation(value);
    if (type === "currency") setSelectedCurrency(value);
    if (type === "language") setSelectedLanguage(value);
    setIsSettingsDropdownOpen(false);
    setIsLocationDropdownOpen(false);
    setIsCurrencyDropdownOpen(false);
    setIsLanguageDropdownOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="bg-white">
      {/* Mobile Sidebar Toggle Button */}
      {!isSidebarOpen && (
        <div className="sm:hidden fixed top-4 left-4 z-50">
          <button
            onClick={toggleSidebar}
            className="text-gray-500 hover:text-gray-700 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md transition-transform hover:scale-105"
          >
            <FiMenu className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className={`sm:hidden fixed top-0 left-0 h-full w-80 bg-gray-900/95 backdrop-blur-md transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 p-6 flex flex-col space-y-6 shadow-2xl rounded-r-2xl`}
      >
        {/* Header: Close Button and User Icon */}
        <div className="flex justify-between items-center">
          <button
            onClick={toggleSidebar}
            className="text-white hover:text-gray-300 p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-transform hover:scale-105"
          >
            <FiX className="w-6 h-6" />
          </button>
          <div className="flex space-x-2">
            <button className="text-white hover:text-gray-300 p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-transform hover:scale-105">
              <FiUser className="w-6 h-6" />
            </button>
            <button className="text-white hover:text-gray-300 p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-transform hover:scale-105">
              <CiHeart className="w-6 h-6" />
            </button>
            <button className="relative text-white hover:text-gray-300 p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-transform hover:scale-105">
              <PiShoppingBagLight className="w-6 h-6" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="w-full">
          <div className="flex items-center border border-gray-600/50 rounded-xl bg-gray-800/50 backdrop-blur-sm overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="flex-grow py-3 px-4 text-sm text-gray-200 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-l-xl"
            />
            <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-4 rounded-r-xl text-sm transition-all duration-200">
              Search
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-xs text-gray-400 uppercase tracking-wider mb-2">Navigation</h3>
          <SecondaryNavBar />
        </div>

        {/* Settings Dropdown */}
        <div className="relative">
          <h3 className="text-xs text-gray-400 uppercase tracking-wider mb-2">Settings</h3>
          <button
            onClick={handleSettingsDropdownToggle}
            className="w-full text-left py-3 inline-flex items-center cursor-pointer text-sm text-white hover:text-gray-200 transition-colors duration-200"
          >
            <span>Settings</span>
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
            className={`mt-2 w-full rounded-lg bg-gray-800/90 backdrop-blur-sm ring-1 ring-gray-600/50 ${
              isSettingsDropdownOpen ? "block" : "hidden"
            } transition-all duration-200 ease-in-out`}
          >
            <div className="py-1">
              <div className="px-4 py-2 text-xs text-gray-400">Location</div>
              <button
                onClick={() => handleOptionClick("location", "New York")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/80 hover:text-white cursor-pointer transition-colors duration-150"
              >
                New York {selectedLocation === "New York" && "✓"}
              </button>
              <button
                onClick={() => handleOptionClick("location", "Los Angeles")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/80 hover:text-white cursor-pointer transition-colors duration-150"
              >
                Los Angeles {selectedLocation === "Los Angeles" && "✓"}
              </button>
              <button
                onClick={() => handleOptionClick("location", "Chicago")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/80 hover:text-white cursor-pointer transition-colors duration-150"
              >
                Chicago {selectedLocation === "Chicago" && "✓"}
              </button>
              <div className="border-t border-gray-600/50 my-2"></div>
              <div className="px-4 py-2 text-xs text-gray-400">Currency</div>
              <button
                onClick={() => handleOptionClick("currency", "USD")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/80 hover:text-white cursor-pointer transition-colors duration-150"
              >
                USD {selectedCurrency === "USD" && "✓"}
              </button>
              <button
                onClick={() => handleOptionClick("currency", "EUR")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/80 hover:text-white cursor-pointer transition-colors duration-150"
              >
                EUR {selectedCurrency === "EUR" && "✓"}
              </button>
              <button
                onClick={() => handleOptionClick("currency", "GBP")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/80 hover:text-white cursor-pointer transition-colors duration-150"
              >
                GBP {selectedCurrency === "GBP" && "✓"}
              </button>
              <div className="border-t border-gray-600/50 my-2"></div>
              <div className="px-4 py-2 text-xs text-gray-400">Language</div>
              <button
                onClick={() => handleOptionClick("language", "English")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/80 hover:text-white cursor-pointer transition-colors duration-150"
              >
                English {selectedLanguage === "English" && "✓"}
              </button>
              <button
                onClick={() => handleOptionClick("language", "Spanish")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/80 hover:text-white cursor-pointer transition-colors duration-150"
              >
                Spanish {selectedLanguage === "Spanish" && "✓"}
              </button>
              <button
                onClick={() => handleOptionClick("language", "French")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/80 hover:text-white cursor-pointer transition-colors duration-150"
              >
                French {selectedLanguage === "French" && "✓"}
              </button>
            </div>
          </div>
        </div>

        {/* Support Phone Number */}
        <div className="mt-auto">
          <a
            href="tel:+1-800-555-1234"
            className="flex items-center text-sm text-white hover:text-gray-200 relative group"
          >
            <FiPhone className="w-5 h-5 mr-2" />
            +1-800-555-1234
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden sm:block">
        {/* Top Navbar: Location, Currency, Language, Sign In/Sign Up, Support Phone */}
        <div
          id="navbar-top"
          className="flex flex-col sm:flex-row justify-between items-center p-4 border-b border-gray-300 text-xs text-gray-500"
        >
          {/* Location, Currency, Language */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-2 sm:mb-0 sm:ml-4 md:ml-24">
            <div className="flex items-center">
              <span>
                <CiLocationOn className="w-4 h-4" />
              </span>
              {/* Location drop down */}
              <div className="relative inline-block text-left ml-1">
                <span className="text-gray-500 mr-2">Store Location:</span>
                <button
                  onClick={handleLocationDropdownToggle}
                  className="py-2 inline-flex items-center cursor-pointer"
                >
                  <span>{selectedLocation}</span>
                  <svg
                    className="w-3 h-3 ml-1 mt-0.9"
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
                  className={`origin-top-right absolute left-0 mt-2 w-40 sm:w-48 rounded-md shadow-lg bg-white ring-1 ring-gray-400 ring-opacity-1 ${
                    isLocationDropdownOpen ? "block" : "hidden"
                  }`}
                >
                  <div className="py-1">
                    <button
                      onClick={() => handleOptionClick("location", "New York")}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      New York
                    </button>
                    <button
                      onClick={() => handleOptionClick("location", "Los Angeles")}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      Los Angeles
                    </button>
                    <button
                      onClick={() => handleOptionClick("location", "Chicago")}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      Chicago
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Currency drop down */}
            <div className="relative inline-block text-left">
              <button
                onClick={handleCurrencyDropdownToggle}
                className="py-2 inline-flex items-center cursor-pointer"
              >
                <span>{selectedCurrency}</span>
                <svg
                  className="w-3 h-3 ml-1 mt-0.9"
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
                className={`origin-top-right absolute left-0 mt-2 w-40 sm:w-48 rounded-md shadow-lg bg-white ring-1 ring-gray-400 ring-opacity-1 ${
                  isCurrencyDropdownOpen ? "block" : "hidden"
                }`}
              >
                <div className="py-1">
                  <button
                    onClick={() => handleOptionClick("currency", "USD")}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    USD
                  </button>
                  <button
                    onClick={() => handleOptionClick("currency", "EUR")}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    EUR
                  </button>
                  <button
                    onClick={() => handleOptionClick("currency", "GBP")}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    GBP
                  </button>
                </div>
              </div>
            </div>
            {/* Language drop down */}
            <div className="relative inline-block text-left">
              <button
                onClick={handleLanguageDropdownToggle}
                className="py-2 inline-flex items-center cursor-pointer"
              >
                <span>{selectedLanguage}</span>
                <svg
                  className="w-3 h-3 ml-1 mt-0.9"
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
                className={`origin-top-right absolute left-0 mt-2 w-40 sm:w-48 rounded-md shadow-lg bg-white ring-1 ring-gray-400 ring-opacity-1 ${
                  isLanguageDropdownOpen ? "block" : "hidden"
                }`}
              >
                <div className="py-1">
                  <button
                    onClick={() => handleOptionClick("language", "English")}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleOptionClick("language", "Spanish")}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    Spanish
                  </button>
                  <button
                    onClick={() => handleOptionClick("language", "French")}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    French
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Sign In / Sign Up / Support Phone */}
          <div className="flex space-x-4 items-center mr-4 md:mr-24">
            <button className="cursor-pointer">Sign In</button>
            <button className="cursor-pointer">Sign Up</button>
            <a
              href="tel:+1-800-555-1234"
              className="flex items-center cursor-pointer"
            >
              <FiPhone className="w-4 h-4 mr-1" />
              +1-800-555-1234
            </a>
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
            <div className="flex items-center border border-gray-300 Rounded-md">
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

export default App;