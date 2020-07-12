import React, { useRef, useEffect, useState } from 'react';

import { ReactComponent as Loader } from "../assets/loader.svg";
import { homeAnimation } from "../animations/animations";
import Overlay from "../components/Overlay"; 
import Banner from "../components/Banner";
import Cases from "../components/Cases";

const Home = () => {
  const [animationComplete, setanimationComplete] = useState(false);
  const [cases, setData] = useState([]);
  const completeAnimation = () => setanimationComplete(true);

  const [loaded, setLoaded] = useState(false);
  const counter = useRef(0);
  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= cases.length) {
      setLoaded(true);
    }
  }

  useEffect(() => {
    loaded && homeAnimation(completeAnimation);
    
    fetch('https://picsum.photos/v2/list?page=3&limit=3')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log("Sorry something went wrong", error));
  }, [loaded]);

  return (
    <>
      {!loaded && <Loader />}
      {!animationComplete && <Overlay />}
      {loaded && <Banner />}
      <Cases cases={cases} imageLoaded={imageLoaded} />
    </>
  )
}

export default Home;
