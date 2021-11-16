import './style.css'

import * as THREE from 'three';

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

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({
  color: 0x00ff00, 
});
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

scene.add(pointLight);


const ambientLight = new THREE. AmbientLight(0xffffff);

const LightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 5 -0);
scene.add(LightHelper, gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);
function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloat(-100, 100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);

const spaceTexture = new THREE.TextureLoader(). load ("space.jpg");
scene.background = spaceTexture;

function animate() {
  requestAnimationFrame(animate);
  
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;
  torus.rotation.z += 0.01;
  
  pointLight.position.x = Math.sin(Date.now() * 0.001) * 10;
  
  controls.update();

  renderer.render(scene, camera);
}

animate()