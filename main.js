// camera, scene, renderer 
let scene;
let camera;
let renderer;
let group;

let textureCube;
let loader;

init();
animate();

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    renderer = new THREE.WebGLRenderer();

    scene.background = new THREE.Color(0xdddddd);
    document.body.appendChild(renderer.domElement);

    camera.position.z = 50;

    console.log(scene);
    console.log(camera);
    console.log(renderer);

    //const materialCube = new THREE.MeshBasicMaterial({color: 0x7fffb7});
    //const materialCube = new THREE.MeshNormalMaterial();
    const geometryCube = new THREE.BoxGeometry(5, 5, 5);
    group = new THREE.Object3D();

    textureCube = new THREE.TextureLoader().load('texture/crate2.jpg');

    const materialCube = new THREE.MeshBasicMaterial({map: textureCube, overdraw: true});

    for (var i=0; i<100; i++) {
        const cube = new THREE.Mesh(geometryCube, materialCube);
        cube.position.x=Math.random()*100-50;
        cube.position.y=Math.random()*100-50;
        cube.position.z=Math.random()*100-50;
        group.add(cube);
    }

    scene.add(group)
}
function animate() {
    requestAnimationFrame(animate);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    group.rotation.y += 0.01;
    renderer.render(scene, camera);
}