/**
Escena, distZ, CantX, CantY, CantSeparadores
*/
function GenGrid(scene, z, x, d) {
	var y = x;
	var z1 = (z<0)?(z-0.02):(z+0.02);
	var z2 = (z<0)?(z-0.01):(z+0.01);

	
	plane = new THREE.Mesh(
		new THREE.PlaneGeometry(x, y*1, x, y),
		new THREE.MeshBasicMaterial( {
			color: 0xff00ff,
			wireframe: true
		} )
	);
	planex = new THREE.Mesh(
		new THREE.PlaneGeometry(x, y*1, x, y),
		new THREE.MeshBasicMaterial( {
			color: 0xff0000,
			wireframe: true
		} )
	);
	planey = new THREE.Mesh(
		new THREE.PlaneGeometry(x, y*1, x, y),
		new THREE.MeshBasicMaterial( {
			color: 0x00ff00,
			wireframe: true
		} )
	);
	planez = new THREE.Mesh(
		new THREE.PlaneGeometry(x, y*1, x, y),
		new THREE.MeshBasicMaterial( {
			color: 0x0000ff,
			wireframe: true
		} )
	);

	//scene.add(plane);
	scene.add(planex);
	scene.add(planey);
	scene.add(planez);
	
	
	planex.rotation.x = 1.57,planex.rotation.y = 0,planex.rotation.z = 0
	planey.rotation.x = 0,planey.rotation.y = 1.57,planey.rotation.z = 0
}