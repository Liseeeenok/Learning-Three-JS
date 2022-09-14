// camera, scene, renderer 
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight);
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

const material1 = new THREE.MeshBasicMaterial({color: 0x00ff00});
const geometryCube = new THREE.BoxGeometry(1, 1, 1);
const cube = new THREE.Mesh(geometryCube, material1);
cube.rotation.x = 0.3;
scene.add(cube);

function animate() {
    requestAnimationFrame(animate);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);

    cube.rotation.y += 0.01;
}

animate();