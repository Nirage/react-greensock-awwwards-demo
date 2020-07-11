import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import GSAP from "gsap";

import "./styles/App.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";
import Approach from "./pages/Approach";
import Services from "./pages/Services";
import About from "./pages/About"; 
import Navigation from "./components/Navigation";

const routes = [
  {path: '/', name: 'Home', Component: Home},
  {path: '/case-studies', name: 'Case Studies', Component: CaseStudies},
  {path: '/approach', name: 'Approach', Component: Approach},
  {path: '/services', name: 'Services', Component: Services},
  {path: '/about', name: 'About', Component: About}  
];

function debounce (fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const App = () => {
  const [dimensions, setdimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  // Wait until resources have loaded
  GSAP.to("body", 0, {visibility: "visible"});

  useEffect(() => {
    // Grab inner height of window for mobile reasons when dealing with vh
    let vh = dimensions.height * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // Resize window 
    const debounceHandleResize = debounce(function handleResize (){
      setdimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1000);

    window.addEventListener('resize', debounceHandleResize);

    return () => window.removeEventListener('resize', debounceHandleResize);

  }, [dimensions.height]);

  return (
    <>
      <Header />
      <div className="App">
        {routes.map(({path, Component}) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </div>
      <Navigation />
    </>
  );
}

export default App;
