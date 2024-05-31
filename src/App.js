import React from "react";
import Header from "./Header"; // Import the Header component
import Nav from "./Nav"; // Import the Nav component
import Main from "./Main"; // Import the Main component
import Footer from "./Footer"; // Import the Footer component
import "./App.css";

function App() {
  return (
    <>
      <Header /> {/* Use the Header component */}
      <Nav /> {/* Use the Nav component */}
      <Main /> {/* Use the Main component */}
      <Footer /> {/* Use the Footer component */}
    </>
  );
}

export default App;
