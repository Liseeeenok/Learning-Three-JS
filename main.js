// camera, scene, renderer 
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color(0xdddddd);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;

console.log(scene);
console.log(camera);
console.log(renderer);

const points = [
    new THREE.Vector2(1,1),
    new THREE.Vector2(2,3),
]

//const materialCube = new THREE.MeshBasicMaterial({color: 0x7fffb7});
const materialCube = new THREE.MeshNormalMaterial();
const geometryCube = new THREE.BoxGeometry(1, 1, 1);
const cube = new THREE.Mesh(geometryCube, materialCube);
cube.rotation.x = 0.3;
scene.add(cube);

const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(ambientLight);

function animate() {
    requestAnimationFrame(animate);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
    camera.aspect = window.innerWidth / window.innerHeight;
    cube.rotation.y += 0.01;
}

animate();