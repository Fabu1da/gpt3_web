import React from "react";
import { Brand, Navbar } from "./components";
import {
  Blog,
  Features,
  Footer,
  Header,
  Whatgbt3,
  Posibility,
  Cta,
} from "./containers";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgbt3 />
      <Features />
      <Posibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
