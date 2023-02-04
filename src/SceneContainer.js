import {useLayoutEffect, useRef, useState, useEffect} from 'react';

import { World } from './World/World.js';

function SceneContainer() {

  // determine width of current element. 
  // From here: https://bobbyhadz.com/blog/react-get-width-of-element
  const ref = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
    setHeight(ref.current.offsetHeight);
  }, []);

  

  useEffect(() => {
    const world = new World(ref.current);
    world.render();
  },[])
  


  return <div ref={ref} id="scene-container">

  </div>
}
export default SceneContainer;