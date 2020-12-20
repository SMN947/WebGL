function posicion(pos) {
    LogPos(scene)
    switch (pos) {
        case "fre":
            scene.rotation.x = 0,scene.rotation.y = 1.57,scene.rotation.z = 0
            plane.rotation.x = 0,plane.rotation.y = 1.57,plane.rotation.z = 0
            break;
        case "der":
            scene.rotation.x = 0,scene.rotation.y = 0,scene.rotation.z = 0
            plane.rotation.x = 0,plane.rotation.y = 0,plane.rotation.z = 0
            break;
        case "atr":
            scene.rotation.x = 0,scene.rotation.y = -1.57,scene.rotation.z = 0
            plane.rotation.x = 0,plane.rotation.y = -1.57,plane.rotation.z = 0
            break;
        case "izq":
            scene.rotation.x = 0,scene.rotation.y = 3.14,scene.rotation.z = 0
            plane.rotation.x = 0,plane.rotation.y = 3.14,plane.rotation.z = 0
            break;
        case "arr":
            scene.rotation.x = 1.57,scene.rotation.y = 0,scene.rotation.z = 0
            plane.rotation.x = 1.57,plane.rotation.y = 0,plane.rotation.z = 0
            break;
        case "aba":
            scene.rotation.x = -1.57,scene.rotation.y = 0,scene.rotation.z = 0
            plane.rotation.x = -1.57,plane.rotation.y = 0,plane.rotation.z = 0
            break;
    }
}
function Rotacion() {
	console.log("x: " + fix(scene.rotation.x) + 
		"\ny: " + fix(scene.rotation.y) + 
		"\nz: " + fix(scene.rotation.z) + 
		"\nStep: " + loopCount);
	scene.rotation.y += 0.02;
    var random = Math.floor(Math.random() * (+2 - +0)) + +0;
    switch (random) {
    	//case 1:scene.rotation.x += 0.05;break;
    }
}