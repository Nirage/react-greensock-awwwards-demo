import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { Canvas, useFrame } from "react-three-fiber";

import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

const Box = () => {
  const mesh = useRef(null);

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
      <mesh ref={mesh} position={[-1, 0, 3.5]}>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color="black" />
      </mesh>
  );
};

const Banner = () => {

  return (
    <section className='main'>
      <div className='container'>
        <div className='row'>
          <h2>
            <div className='line'>
              <span>Creating unique brands is</span>
            </div>
            <div className='line'>
              <span>what we do.</span>
            </div>
            <div className='btn-row'>
              <NavLink to='/more-about-us'>
                More about us <RightArrow />
              </NavLink>
            </div>
          </h2>
          <Canvas className='rotating-cube' colorManagement>
            <ambientLight intensity={0.3} />
            <pointLight position={[-10, 0, -20]} intensity={0.5} />
            <pointLight position={[0, -10, 0]} intensity={1.5} />
            <Box />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Banner;
