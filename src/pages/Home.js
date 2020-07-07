import React, { useEffect, useState } from 'react';
import GSAP from "gsap";

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
  const completeAnimation = () => setanimationComplete(true);

  useEffect(() => {
    homeAnimation(completeAnimation);
  }, []);

  return (
    <>
      {!animationComplete && <Overlay />}
      <Banner />
      <Cases />
    </>
  )
}

export default Home;
