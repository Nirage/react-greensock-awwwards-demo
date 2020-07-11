import React, { useEffect } from "react";
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

const App = () => {

  useEffect(() => {
    // Grab inner height of window for mobile reasons when dealing with vh
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // Wait until resources have loaded
    GSAP.to("body", 0, {visibility: "visible"});
  }, []);

  return (
    <>
     <Header />
     {routes.map(({path, Component}) => (
       <Route key={path} exact path={path}>
         <Component />
       </Route>
     ))}
     <Navigation />
    </>
  );
}

export default App;
