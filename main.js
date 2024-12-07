// camera, scene, renderer 
let scene;
let camera;
let renderer;
let group;
let sun, sun_geom, sun_mat;
let earth, earth_geom, earth_mat;
let textureCube;
let stars;
let controls;

init();
animate();

document.addEventListener('mousedown', function(event) {
    console.log(event.buttons)
    if (event.buttons = 1) {
        addEventListener("mousemove", moved);
    }
})

function moved(event) {
    if (event.buttons != 1) {
        removeEventListener("mousemove", moved);
    } else {
        /*
        group.rotation.x += (parseInt(event.movementY) * 0.002);
        group.rotation.y += (parseInt(event.movementX) * 0.002);
        camera.lookAt(sun.position);
        */
        theta = - ( ( event.clientX - onMouseDownPosition.x ) * 0.5 ) + onMouseDownTheta;
        phi = ( ( event.clientY - onMouseDownPosition.y ) * 0.5 ) + onMouseDownPhi;

        phi = Math.min( 180, Math.max( 0, phi ) );

        camera.position.x = radious * Math.sin( theta * Math.PI / 360 ) * Math.cos( phi * Math.PI / 360 );
        camera.position.y = radious * Math.sin( phi * Math.PI / 360 );
        camera.position.z = radious * Math.cos( theta * Math.PI / 360 ) * Math.cos( phi * Math.PI / 360 );
        camera.updateMatrix();
    }
}

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, parseInt(window.innerWidth) / parseInt(window.innerHeight), 1, 10000);
    renderer = new THREE.WebGLRenderer();
    group = new THREE.Object3D();
    stars = new THREE.Object3D();

    scene.background = new THREE.Color(0xdddddd);
    document.body.appendChild(renderer.domElement);

    camera.position.z = 6300;

    sun_geom = new THREE.SphereGeometry(430, 30, 30);
    sun_mat = new THREE.MeshNormalMaterial();
    sun = new THREE.Mesh(sun_geom, sun_mat);
    group.add(sun);

    earth_geom = new THREE.SphereGeometry(50, 20, 20);
    earth_mat = new THREE.MeshNormalMaterial();
    earth = new THREE.Mesh(earth_geom, earth_mat);
    earth.position.x = 1500;
    group.add(earth);

    const geometryCube = new THREE.BoxGeometry(5, 5, 5);
    textureCube = new THREE.TextureLoader().load('texture/crate1.jpg');
    const materialCube = new THREE.MeshBasicMaterial({map: textureCube});
    
    for (var i=0; i<1000; i++) {
        const earth = new THREE.Mesh(earth_geom, earth_mat);
        earth.position.x=Math.random()*3000-1500;
        earth.position.z=Math.random()*1400-700;
        group.add(earth);
    }
    scene.add(group);
}
function animate() {
    requestAnimationFrame(animate);
    renderer.setSize(parseInt(window.innerWidth), parseInt(window.innerHeight));
    camera.aspect = parseInt(window.innerWidth) / parseInt(window.innerHeight);
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
}