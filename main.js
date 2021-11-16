import "./style.css";

import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// 1. scene
// 2. camera
// 3. renderer

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(30);

renderer.render(scene, camera);

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

animate();
