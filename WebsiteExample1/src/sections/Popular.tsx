function PopularItems() {
  // Define an array of category objects for dynamic rendering
  const categories = [
    { id: "fresh-fruit", title: "Fresh Fruit", image: "/SectionsImages/PopularCatagoriesImages/FreshFruitCatagory.svg" },
    { id: "vegetables", title: "Fresh Vegetables", image: "/SectionsImages/PopularCatagoriesImages/FreshVegetablesCatagory.svg" },
    { id: "MeatnFish", title: "Meat & Fish", image: "/SectionsImages/PopularCatagoriesImages/Meat&FishCatagory.svg" },
    { id: "snacks", title: "Snacks", image: "/SectionsImages/PopularCatagoriesImages/SnacksCatagory.svg" },
    { id: "Beverages", title: "Beverages", image: "/SectionsImages/PopularCatagoriesImages/BeveragesCatagory.svg" },
    { id: "beautynhealth", title: "Beauty & Health", image: "/SectionsImages/PopularCatagoriesImages/Beauty&HealthCatagory.svg" },
    { id: "breadnbakery", title: "Bread & Bakery", image: "/SectionsImages/PopularCatagoriesImages/Bread&BakeryCatagory.svg" },
    { id: "bakingneeds", title: "Baking Needs", image: "/SectionsImages/PopularCatagoriesImages/BakingNeedsCatagory.svg" },
    { id: "cooking", title: "Cooking", image: "/SectionsImages/PopularCatagoriesImages/CookingCatagory.svg" },
    { id: "DiabeticFood", title: "Diabetic Food", image: "/SectionsImages/PopularCatagoriesImages/DiabeticFoodCatagory.svg" },
    { id: "DishDetergents", title: "Dish Detergents", image: "/SectionsImages/PopularCatagoriesImages/DishDetergentsCatagory.svg" },
    { id: "Oil", title: "Oil", image: "/SectionsImages/PopularCatagoriesImages/OilCatagory.svg" },
  ];

  return (
    <div className="flex flex-col">
      {/* Popular Categories Section */}
      <div className="mt-16 px-6 sm:px-12 md:px-24">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">Popular Categories</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center border border-gray-200 rounded-lg p-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-primary hover:text-primary"
            >
              <img
                src={category.image}
                alt={`${category.title} category`}
                className="w-full h-24 sm:h-32 object-contain mb-2"
              />
              <h2 className="text-sm sm:text-base font-medium text-gray-900">{category.title}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Products Section */}
      <div className="mt-16 px-6 sm:px-12 md:px-24">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">Popular Products</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
          {/* Add your product cards here */}
        </div>
      </div>
    </div>
  );
}

export { PopularItems };