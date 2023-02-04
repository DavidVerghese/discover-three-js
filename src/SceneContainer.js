import {
  Camera,
  Material,
  Texture,
  BoxBufferGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';

import {useEffect, useLayoutEffect, useRef, useState} from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


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
    if (width > 0 && height > 0) {
      // Get a reference to the container element that will hold our scene
      // create a Scene
      const scene = new Scene();

      // Set the background color
      scene.background = new Color('skyblue');
      // Create a camera
      const fov = 35; // AKA Field of View
      const aspect = width / height;
      // console.log(width, container.clientWidth);
      const near = 0.1; // the near clipping plane
      const far = 100; // the far clipping plane

      const camera = new PerspectiveCamera(fov, aspect, near, far);

      // every object is initially created at ( 0, 0, 0 )
      // move the camera back so we can view the scene
      camera.position.set(0, 0, 10);

      // create a geometry
      const geometry = new BoxBufferGeometry(2, 2, 2);

      // create a default (white) Basic material
      const material = new MeshBasicMaterial();

      // create a Mesh containing the geometry and material
      const cube = new Mesh(geometry, material);

      // add the mesh to the scene
      scene.add(cube);

      // create the renderer
      const renderer = new WebGLRenderer();

      // next, set the renderer to the same size as our container element
      renderer.setSize(width,height);

      // finally, set the pixel ratio so that our scene will look good on HiDPI displays
      renderer.setPixelRatio(window.devicePixelRatio);

      // add the automatically created <canvas> element to the page
      ref.current.append(renderer.domElement);

      // render, or 'create a still image', of the scene
      renderer.render(scene, camera);
    }
  },[width, height])

  return <div ref={ref} id="scene-container">

  </div>
}
export default SceneContainer;