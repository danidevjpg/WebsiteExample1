import { GoArrowRight } from "react-icons/go"; // Import right arrow icon for buttons
import { HiOutlineTruck, HiOutlineSupport, HiOutlineShoppingBag, HiOutlineCube } from "react-icons/hi"; // Import icons for underbar features

// Define the HeroSection component, which combines a hero banner and an underbar feature section
function HeroSection() {
  // Define an array of feature objects for the underbar section
  const features = [
    {
      icon: <HiOutlineTruck className="h-12 w-12 text-primary" aria-label="Free Shipping Icon" />, // Truck icon for free shipping
      title: "Free Shipping", // Feature title
      description: "Free shipping on all your orders", // Feature description
    },
    {
      icon: <HiOutlineSupport className="h-12 w-12 text-primary" aria-label="Customer Support Icon" />, // Support icon for customer support
      title: "Customer Support",
      description: "24/7 dedicated customer support",
    },
    {
      icon: <HiOutlineShoppingBag className="h-12 w-12 text-primary" aria-label="Secure Checkout Icon" />, // Shopping bag icon for secure checkout
      title: "Secure Checkout",
      description: "Safe and secure payment process",
    },
    {
      icon: <HiOutlineCube className="h-12 w-12 text-primary" aria-label="Quality Products Icon" />, // Cube icon for quality products
      title: "Quality Products",
      description: "100% organic and fresh products",
    },
  ];

  return (
    // Main container for the entire component, using flex column to stack hero and underbar sections
    <div className="flex flex-col">
      {/* Hero Section: Displays the main promotional banner with images and text */}
      <section className="flex flex-col md:flex-row justify-center items-center p-6 sm:p-12 md:p-24">
        {/* Left side: Large hero image with overlaid text and button */}
        <div className="relative w-full md:w-1/2">
          {/* Main hero image, takes full width of its container */}
          <img src="/SectionsImages/HeaderSection.svg" alt="Hero Section" className="w-full" />
          {/* Overlay container for text and button, positioned absolutely over the image */}
          <div className="absolute inset-0 flex flex-col mt-16 sm:mt-24 md:mt-36 ms-4 sm:ms-8 md:ms-16 overflow-hidden">
            {/* Main headline, responsive font sizes for different screens */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-white dark:text-gray-100">
              Fresh & Healthy
              <br />
              Organic Food
            </h1>
            {/* Promotional text with a highlighted sale offer */}
            <div className="mt-4 sm:mt-6 text-lg sm:text-xl border-l-2 border-softprimary">
              <p className="ms-3 text-white">
                Sale up to{" "}
                <mark className="p-1 sm:p-2 rounded text-white bg-warning">30% OFF</mark> {/* Highlighted sale text */}
              </p>
              <p className="ms-3 text-xs mt-2 text-gray-300">Free shipping on all your order.</p>
            </div>
            {/* Call-to-action button with hover animation */}
            <button
              className="mt-6 sm:mt-8 flex items-center px-3 sm:px-4 py-2 text-primary bg-white rounded-full font-bold transition-transform duration-300 hover:scale-105 hover:bg-primary hover:text-white w-fit text-sm sm:text-base"
              aria-label="Shop now for organic food"
            >
              Shop now
              <GoArrowRight className="ml-2" /> {/* Right arrow icon */}
            </button>
          </div>
        </div>
        {/* Right side: Two smaller promotional images stacked vertically */}
        <div className="flex flex-col justify-center mt-6 md:mt-0 md:ms-6 w-full md:w-1/4">
          {/* First small image: Summer Sale promotion */}
          <div className="relative mb-1">
            <img
              src="/SectionsImages/HeroSectionImageSmall1.svg"
              alt="Summer Sale"
              className="w-full"
            />
            {/* Overlay text and button for the first small image */}
            <div className="absolute top-2 left-2 text-sm p-2">
              <p>SUMMER SALE</p>
              <h2 className="text-2xl sm:text-3xl mt-1">75% OFF</h2>
              <p className="mt-2 text-xs text-gray-600">Only Fruit & Vegetable</p>
              <button
                className="mt-3 flex items-center text-primary font-bold transition-transform duration-300 hover:scale-105"
                aria-label="Shop now for summer sale"
              >
                Shop now
                <GoArrowRight className="ml-2 sm:ml-3" />
              </button>
            </div>
          </div>
          {/* Second small image: Deal of the Month promotion */}
          <div className="relative">
            <img
              src="/SectionsImages/HeroSectionImageSmall2.svg"
              alt="Deal of the Month"
              className="w-full"
            />
            {/* Overlay text and button, centered on the second small image */}
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <div className="flex flex-col items-center text-center p-2">
                <p className="text-xs">BEST DEAL</p>
                <p className="text-2xl sm:text-3xl font-bold mt-1">
                  Special Products
                  <br />
                  Deal of the Month
                </p>
                <button
                  className="mt-3 flex items-center text-primary font-bold transition-transform duration-300 hover:scale-105"
                  aria-label="Shop now for deal of the month"
                >
                  Shop now
                  <GoArrowRight className="ml-2 sm:ml-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UnderBar Section: Single card displaying four feature highlights */}
      <section className="pt-2 sm:pt-4 md:pt-6 px-6 sm:px-12 md:px-24">
        {/* Single card container with a grid layout for features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-white rounded-lg shadow-2xl p-4 sm:p-6">
          {features.map((feature, index) => (
            // Each feature item, displayed in a grid cell
            <div key={index} className="flex items-center">
              {feature.icon} {/* Feature icon */}
              <div className="ms-3 sm:ms-4">
                <p className="text-sm font-bold text-gray-900">{feature.title}</p>
                <p className="text-xs text-gray-400 mt-1">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HeroSection;