if (WEBGL.isWebGLAvailable()) {
	init();
	setUpListeners();
    animate();
} else {
	var warning = WEBGL.getWebGLErrorMessage();
	document.getElementById( 'container' ).appendChild( warning );
}
var camera, scene, renderer, geometry, material, mesh, cubo, rotacion, gridX, gridY, plane, plane2, cameras;

function setUpListeners() {
	document.addEventListener("keydown", (e) => {
        console.log(e.key);
        var ValRotation = 0.1;
        switch(e.key){
            case 'ArrowUp':
                scene.rotation.x -= ValRotation;
                break;
            case 'ArrowRight':
                scene.rotation.y += ValRotation;
                break;
            case 'ArrowDown':
                scene.rotation.x += ValRotation;
                break;        	    
            case 'ArrowLeft':
                scene.rotation.y -= ValRotation;
                break;    	    
            case 'w':
                camera.position.z -= ValRotation;
                break;    	    
            case 's':
                camera.position.z += ValRotation;
                break;
            }
	});
}

function init() {
	rotacion = true;
    camera = new THREE.PerspectiveCamera( 72, window.innerWidth / window.innerHeight, 0.01, 100 );
    //var controls = new OrbitControls( camera, renderer.domElement );

    camera.position.set(0, 0, 10);
    //  controls.update();

    scene = new THREE.Scene();
    
    //GetCarro(scene);
    var obj = [
        [0,0,0, 'red'],
        [0,0,1, 'red'],
        [0,0,2, 'red'],
        [0,0,3, 'red'],
        [0,0,4, 'red'],
    ];

    for (const cube of obj) {
        AddCube(scene, cube[0], cube[1], cube[2], cube[3]);
    }

    

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild(renderer.domElement);
    
    
    scene.rotation.x = 0.4;
    //x0.4
}
var loopCount = 0;
function animate() {
	if(rotacion) {
        Rotacion();
	}
    loopCount++;
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
function fix(a) {
	return Math.round(a*100)/100;
}
function LogPos(scene) {
    /*console.log("x: " + fix(scene.rotation.x) + 
		"\ny: " + fix(scene.rotation.y) + 
		"\nz: " + fix(scene.rotation.z) + 
		"\nStep: " + loopCount);*/
}