import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import StatsSection from "./Components/StatsSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection />
    </>
  );
}

export default App;
