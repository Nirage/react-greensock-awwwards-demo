import React, { useRef, useState, useEffect } from 'react';
import GSAP from "gsap";

const Case = ({item, imageLoaded}) => {
  let imgRef = useRef();
  const [mouseAnimation, setMouseAnimation] = useState();

  useEffect(() => {
    const tl = GSAP.timeline();

    setMouseAnimation(
      tl.to(imgRef, 0.8, {
        scale: 2,
        ease: "expo.inOut"
      }).pause()
    );
  },[]);

  return (
    <a
      href={item.url}
      target='_blank'
      rel='noopener noreferrer'
      onMouseEnter={() => mouseAnimation.play()}
      onMouseLeave={() => mouseAnimation.play().reverse()}
      key={item.id}
      className='case'
    >
      <div className='case-details'>
        <span>{`Author ${item.id}`}</span>
        <h2>{item.author}</h2>
      </div>
      <div className='case-image'>
        <img
          ref={element => {
            imgRef = element;
          }}
          onLoad={imageLoaded}
          src={item.download_url}
          alt={item.author}
        />
      </div>
    </a>
  )
}

export default Case;
