import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";

const Box = () => {
  const mesh = useRef(null);

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01 
  });

  return (
      <mesh ref={mesh}>
        <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
        <meshStandardMaterial attach="material" color="black" />
      </mesh>
  );
};

const MoreAboutUs = () => (
  <div className='page'>
    <div className='container'>
      <div className='row'>
        <Canvas colorManagement>
          <ambientLight intensity={0.3} />
          <pointLight position={[-10, 0, -20]} intensity={0.5} />
          <pointLight position={[0, -10, 0]} intensity={1.5} />
          <Box />
        </Canvas>
        <h3 className='h3-mesh'>Three.js</h3>
      </div>
    </div>
  </div>
);

export default MoreAboutUs;
