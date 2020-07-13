import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";
import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg";
import Case from "./Case";

const Cases = ({cases, imageLoaded, dimensions}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goBackHandler = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const goForwardHandler = () => {
    setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    gsap.timeline().to('.slider', 1, {
      x: -currentIndex * dimensions.width,
      ease: 'expo.inOut'
    });
  }, [currentIndex, dimensions.width]);

  return (
    <section className='cases'>
      <div className='container-fluid'>
        <div className='cases-navigation'>
          <button
            type='button'
            onClick={goBackHandler}
            className='cases-arrow prev'
            disabled={currentIndex === 0}
          >
            <CasesPrev />
          </button>
          <button
            type='button'
            onClick={goForwardHandler}
            className='cases-arrow next'
            disabled={currentIndex === (cases.length / 3) - 1}
          >
            <CasesNext />
          </button>
        </div>
        <div className='slider row'>
          {cases.map(item => (
            <Case item={item} key={item.id} imageLoaded={imageLoaded} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
