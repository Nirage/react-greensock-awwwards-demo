import React, { useRef, useState, useEffect } from 'react';
import GSAP from "gsap";

const Case = ({item}) => {
  let imgRef = useRef();
  const [mouseAnimation, setMouseAnimation] = useState();

  useEffect(() => {
    const tl = GSAP.timeline();

    setMouseAnimation(
      tl.to(imgRef, 0.8, {
        scale: 1.4,
        ease: "expo.inOut"
      }).pause()
    );
  },[]);

  return (
    <div
      onMouseEnter={() => mouseAnimation.play()}
      onMouseLeave={() => mouseAnimation.play().reverse()}
      key={item.id}
      className='case'
    >
      <div className='case-details'>
        <span>{item.subtitle}</span>
        <h2>{item.title}</h2>
      </div>
      <div className='case-image'>
        <img
          ref={element => {
            imgRef = element;
          }}
          src={require(`../assets/${item.img}.png`)}
          alt={item.title}
        />
      </div>
    </div>
  )
}

export default Case;
