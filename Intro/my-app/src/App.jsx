import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Aboutme from "./components/Aboutme";

function App() {
  const [count, setCount] = useState(0);
  const nav = ["Home", "About Me", "Servise", "Contact"];
  const header = {
    title: "Welcome to My Website",
    discreption: "Hello , I am Muhammet Ali Karakurt  a full stack developer.",
  };

  const aboutme = {
    title: "About Me",
    h: ["Bacground", "Education"],
    discreption: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Saepe molestias unde tempora asperiores debitis necessitatibus dolores eaqueenim nam facilis et sunt, quis exercitationem accusantium.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe molestias unde tempora asperiores debitis necessitatibus dolores eaqueenim nam facilis et sunt, quis exercitationem accusantium.",
    ],
  };

  return (
    <>
      <Navbar nav={nav} />
      <Header header={header} />
      <Aboutme aboutme = {aboutme}/>
    </>
  );
}

export default App;
