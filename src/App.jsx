import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Routes and Route
import Dashboard from "./components/pages/Dashboard";
import About from "./components/pages/About";
import Comment from "./components/pages/Comment"; // Ensure casing matches the file name
import Analytics from "./components/pages/Analytics";
import Product from "./components/pages/Product";
import ProductList from "./components/pages/ProductList";
import ProfileSettings from "./components/pages/ProfileSettings.jsx"; // New page for Profile Settings
import Sidebar from "./components/Sidebar";
import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false); // Set initial state to false

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    document.body.className = darkMode
      ? "bg-gray-900 text-white"
      : "bg-white text-gray-900";
  }, [darkMode]); // Update body class on darkMode change

  return (
    <BrowserRouter>
      <Sidebar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode} // Pass toggle function to Sidebar
      >
        <Routes>
          {/* Main Routes */}
          <Route
            path="/"
            element={
              <Dashboard
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode} // Pass toggle function to Dashboard
              />
            }
          />
          <Route
            path="/about"
            element={
              <About darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            path="/comment"
            element={
              <Comment darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            path="/analytics"
            element={
              <Analytics darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route path="/product" element={<Product />} />
          <Route path="/productlist" element={<ProductList />} />

          {/* Dropdown Item Routes */}
          <Route path="/setting" element={<ProfileSettings />} />
          {/* <Route path="/settings/account" element={<AccountSettings />} />
          <Route path="/settings/privacy" element={<PrivacySettings />} /> */}
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
