import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import StatsSection from "./Components/StatsSection";
import DigitalToolsSection from "./Components/DigitalToolsSection";
import { ToastContainer } from "react-toastify";
import GetStartedSection from "./Components/GetStartedSection";

function App() {
  const [section, setSection] = useState("products");
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <DigitalToolsSection
        section={section}
        setSection={setSection}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <GetStartedSection />
      <ToastContainer />
    </>
  );
}

export default App;
