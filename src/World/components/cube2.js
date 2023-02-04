import { BoxBufferGeometry, Mesh, MeshStandardMaterial } from 'three';

function createCube2() {
  // create a geometry
  const geometry = new BoxBufferGeometry(1, 1, 1);

  // create a default (white) Basic material
  const material = new MeshStandardMaterial({ color: "yellow" });

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);
  
  cube.rotation.set(-0.5, -0.1, 0.8);
  cube.position.set(1, 1, 1)
  
  return cube;
}

export { createCube2 };