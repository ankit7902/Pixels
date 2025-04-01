import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ setSearch }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Categories for buttons
  const categories = [
    { name: "Nature", value: "nature", color: "warning" },
    { name: "Travel", value: "travel", color: "primary" },
    { name: "City", value: "city", color: "info" },
    { name: "Car", value: "car", color: "secondary" },
    { name: "Fashion", value: "fashion", color: "warning" },
    { name: "Animals", value: "animals", color: "light" },
    { name: "Technology", value: "technology", color: "dark" },
    { name: "Business & Finance", value: "finance", color: "warning" },
    { name: "Tokyo", value: "tokyo", color: "primary" },
    { name: "Dubai", value: "dubai", color: "info" },
  ];

  // Handle category click
  const handleCategoryClick = (category) => {
    setSearch(category);
    navigate("/");
  };

  // Handle Saved/Home button click
  const handleSavedHomeClick = () => {
    navigate(location.pathname === "/saved" ? "/" : "/saved");
  };

  return (
    <>
      <div className="nav mt-3 d-flex flex-wrap justify-content-start">
        {categories.map((category) => (
          <button
            key={category.value}
            className={`btn btn-outline-${category.color} mx-2 my-1`}
            onClick={() => handleCategoryClick(category.value)}
            aria-label={`Search for ${category.name}`}
          >
            {category.name}
          </button>
        ))}

        {/* Toggle between Home and Saved based on current route */}
        <button
          className="btn btn-warning mx-2 my-1"
          onClick={handleSavedHomeClick}
          aria-label={location.pathname === "/saved" ? "Go to Home" : "Go to Saved"}
        >
          {location.pathname === "/saved" ? "Home" : "Saved"}
        </button>
      </div>

      {/* Search input on the home page */}
      {location.pathname === "/" && (
        <div className="container my-4 d-flex justify-content-center">
          <div className="mb-3" style={{ maxWidth: "780px", width: "100%" }}>
            <input
              type="text"
              className="form-control bg-dark text-light"
              placeholder="Search categories"
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search categories"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
