import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import Component from "./components/NavBar";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import SectionOne from "./components/SectionOne";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <NavBar />
      <Hero />
      <SectionOne />
    </>
  );
}

export default App;
