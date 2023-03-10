import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createCube2 } from './components/cube2.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/lights.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;

class World {
  
  // 1. Create an instance of the World app
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);

    const cube = createCube();
    // const cube2 = createCube2();
    const light = createLights();

     scene.add(cube, light);
    // scene.add(cube2,light);

    const resizer = new Resizer(container, camera, renderer);
  }
  
  // 2. Render the scene
  render() {
    renderer.render(scene, camera);
  }
  }
  
  export { World };