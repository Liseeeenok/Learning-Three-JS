// camera, scene, renderer 
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color(0xdddddd);
document.body.appendChild(renderer.domElement);

camera.position.z = 50;

console.log(scene);
console.log(camera);
console.log(renderer);

const points = [
    new THREE.Vector2(1,1),
    new THREE.Vector2(2,3),
]

//const materialCube = new THREE.MeshBasicMaterial({color: 0x7fffb7});
const materialCube = new THREE.MeshNormalMaterial();
const geometryCube = new THREE.BoxGeometry(5, 5, 5);
const group = new THREE.Object3D();

for (var i=0; i<100; i++) {
    const cube = new THREE.Mesh(geometryCube, materialCube);
    cube.position.x=Math.random()*100-50;
    cube.position.y=Math.random()*100-50;
    cube.position.z=Math.random()*100-50;
    group.add(cube);
}

scene.add(group)

function animate() {
    requestAnimationFrame(animate);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    group.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();