import { createContext, useState, useEffect, useRef, useCallback } from "react";
import { CiLocationOn, CiHeart, CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { PiShoppingBagLight } from "react-icons/pi";
import { FiMenu, FiUser, FiX } from "react-icons/fi";

// Theme Context
const ThemeContext = createContext<{ theme: string; toggleTheme: () => void }>({
  theme: "light",
  toggleTheme: () => {},
});

// Dropdown Component
type DropdownProps = {
  label: string;
  items: string[];
  isOpen: boolean;
  toggle: () => void;
  onSelect: (type: string, value: string) => void;
  type: string;
  selected: string;
};

const Dropdown = ({ label, items, isOpen, toggle, onSelect, type, selected }: DropdownProps) => (
  <div className="relative">
    <button
      onClick={toggle}
      className="flex items-center text-xs text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
    >
      {label}
      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
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

// Navigation Item Component
type NavItemProps = {
  label: string;
  items?: string[];
  isOpen: boolean;
  toggle: () => void;
  isMobile?: boolean;
};

const NavItem = ({ label, items, isOpen, toggle, isMobile }: NavItemProps) => (
  <div className="relative">
    <button
      onClick={toggle}
      className={`flex items-center ${isMobile ? "w-full text-left py-2 text-sm text-white" : "py-2 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"}`}
    >
      {label}
      {items && (
        <svg className="w-3 h-3 ml-1 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      )}
    </button>
    {items && isOpen && (
      <div className={`mt-1 ${isMobile ? "w-full" : "absolute left-0 w-40"} rounded-md shadow-lg ${isMobile ? "bg-gray-700 ring-1 ring-gray-600" : "bg-white dark:bg-gray-700 ring-1 ring-gray-400 dark:ring-gray-600"} ring-opacity-50 z-50`}>
        <div className="py-1">
          {items.map((item) => (
            <button
              key={item}
              className={`block w-full text-left px-4 py-2 text-sm ${isMobile ? "text-gray-300 hover:bg-gray-600" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    )}
  </div>
);

function NavBar() {
  // Unified dropdown state
  const [dropdowns, setDropdowns] = useState({
    settings: false,
    location: false,
    currency: false,
    language: false,
    home: false,
    shop: false,
    pages: false,
  });

  // Selections state
  const [selections, setSelections] = useState({
    location: "Select Location",
    currency: "Select Currency",
    language: "Select Language",
  });

  // Sidebar and theme states
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Toggle theme
  const toggleTheme = useCallback(() => setTheme((prev) => (prev === "light" ? "dark" : "light")), []);

  // Toggle dropdown
  const toggleDropdown = useCallback((key: keyof typeof dropdowns) => {
    setDropdowns((prev) => ({
      ...Object.keys(prev).reduce<{ [K in keyof typeof prev]: boolean }>((acc, k) => ({ ...acc, [k]: false }), {} as { [K in keyof typeof prev]: boolean }),
      [key]: !prev[key],
    }));
  }, []);

  // Handle dropdown selection
  const handleOptionClick = useCallback((type: string, value: string) => {
    setSelections((prev) => ({ ...prev, [type]: value }));
    setDropdowns((prev) => ({ ...prev, settings: false, location: false, currency: false, language: false }));
  }, []);

  // Toggle sidebar
  const toggleSidebar = useCallback(() => setIsSidebarOpen((prev) => !prev), []);

  // Apply theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

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

  // Navigation items
  const navItems: { label: string; items?: string[]; key?: keyof typeof dropdowns }[] = [
    { label: "Home", items: ["Main Home", "Minimal Home"], key: "home" },
    { label: "Shop", items: ["Shop Grid", "Shop List"], key: "shop" },
    { label: "Pages", items: ["FAQ", "Privacy Policy"], key: "pages" },
    { label: "About Us" },
    { label: "Contact Us" },
  ];

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="bg-white dark:bg-gray-800">
        {/* Mobile Sidebar Toggle */}
        {!isSidebarOpen && (
          <div className="sm:hidden fixed top-4 left-4 z-50">
            <button onClick={toggleSidebar} className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100">
              <FiMenu className="w-6 h-6" />
            </button>
          </div>
        )}

        {/* Mobile Sidebar */}
        <div
          ref={sidebarRef}
          className={`sm:hidden fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 z-40 p-4 flex flex-col space-y-4`}
        >
          <button onClick={toggleSidebar} className="self-end text-white hover:text-gray-300">
            <FiX className="w-6 h-6" />
          </button>
          <div className="flex justify-between mb-4">
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
          <button
            onClick={toggleTheme}
            className="flex items-center text-sm text-white hover:text-gray-300"
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
          <div className="relative">
            <button
              onClick={() => toggleDropdown("settings")}
              className="flex items-center text-sm text-white hover:text-gray-300"
            >
              Settings
              <svg className="w-3 h-3 ml-1 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
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
                  <div className="border-t border-gray-600 my-2" />
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
                  <div className="border-t border-gray-600 my-2" />
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
          <div className="flex flex-col space-y-2">
            {navItems.map(({ label, items, key }) => (
              <NavItem
                key={label}
                label={label}
                items={items}
                isOpen={key ? dropdowns[key] : false}
                toggle={() => key && toggleDropdown(key)}
                isMobile
              />
            ))}
          </div>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden sm:block">
          <div className="flex flex-row justify-between items-center p-4 border-b border-gray-300 text-xs text-gray-500 dark:text-gray-300">
            <div className="flex items-center space-x-4 ml-4 md:ml-24">
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
            <div className="flex space-x-4 items-center mr-4 md:mr-24">
              <button className="hover:text-gray-700 dark:hover:text-gray-100">Sign In</button>
              <button className="hover:text-gray-700 dark:hover:text-gray-100">Sign Up</button>
              <button
                onClick={toggleTheme}
                className="hover:text-gray-700 dark:hover:text-gray-100"
              >
                {theme === "light" ? <FaMoon className="w-5 h-5" /> : <CiSun className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center p-4 border-b border-gray-300">
            <img src="/Logo/Logo.svg" alt="Logo" className="ml-4 sm:ml-24 h-6 sm:h-8" />
            <div className="flex-grow max-w-md mx-4">
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
          <div className="bg-white border-b border-gray-300">
            <div className="flex justify-center items-center p-4">
              <div className="flex space-x-8">
                {navItems.map(({ label, items, key }) => (
                  <NavItem
                    key={label}
                    label={label}
                    items={items}
                    isOpen={key ? dropdowns[key] : false}
                    toggle={() => key && toggleDropdown(key)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default NavBar;