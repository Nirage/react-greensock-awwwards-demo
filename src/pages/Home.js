import React, { useRef, useEffect, useState } from 'react';

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

    fetch('https://picsum.photos/v2/list?page=4&limit=3')
      .then(response => response.json())
      .then(data => {
        // Resize the image files
        const updateData = data.map(obj => {
          return Object.assign(obj, { download_url: `https://picsum.photos/id/${obj.id}/600/400` });
        });
        setData(updateData);
      })
      .catch(error => console.log("Sorry something went wrong", error));
  }, [loaded]);

  return (
    <div className={loaded ? "loaded" : "loading"}>
      {!animationComplete && <Overlay />}
      {loaded ? <Banner /> : <div className="loader"></div>}
      <Cases cases={cases} imageLoaded={imageLoaded} />
    </div>
  )
}

export default Home;
