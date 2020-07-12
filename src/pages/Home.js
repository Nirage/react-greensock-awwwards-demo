import React, { useRef, useEffect, useState } from 'react';

import Overlay from "../components/Overlay"; 
import Banner from "../components/Banner";
import Cases from "../components/Cases";

const tl = GSAP.timeline();
const homeAnimation = (completeAnimation) => {
  tl.from('.line span', 1.8, {
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      stagger: { amount: 0.3 }
    })
    .to('.overlay-top', 1.6, {
      height: 0,
      ease: 'expo.inOut',
      stagger: 0.4
    })
    .to('.overlay-bottom', 1.6, {
      width: 0,
      ease: 'expo.inOut',
      delay: -0.8,
      stagger: 0.4
    })
    .to('.overlay', 0, { display: 'none'})
    .from('.case-image img', 1.6, {
      scale: 1.4,
      ease: 'expo.inOut',
      delay: -2,
      stagger: 0.4,
      onComplete: completeAnimation
    });
};

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
    console.log(loaded);
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
