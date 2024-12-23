import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Challenge from "./Components/Challenge";
import Plans from "./Components/Plans";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <React.Fragment>
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content with sections */}
      <div className="h-auto w-full">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="challenge">
          <Challenge />
        </section>
        <section id="plans">
          <Plans />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </React.Fragment>
  );
};

export default App;
