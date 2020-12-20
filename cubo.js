function AddCube(scene, x, y, z, color) {
    var geometry = new THREE.Geometry();
    geometry.vertices.push(
        new THREE.Vector3(-0.5, -0.5, 0.5),  // 0
        new THREE.Vector3(-0.5, 0.5, 0.5),  // 1
        new THREE.Vector3( 0.5, 0.5, 0.5),  // 2
        new THREE.Vector3(0.5, -0.5, 0.5),  // 3
        
        
        new THREE.Vector3(-0.5, -0.5, -0.5),  // 0 4
        new THREE.Vector3(-0.5, 0.5, -0.5),  // 1 5
        new THREE.Vector3( 0.5, 0.5, -0.5),  // 2 6
        new THREE.Vector3( 0.5, -0.5, -0.5),  // 3 7
        
    );
    GenGrid(scene, 0, 15, 15, 1);
    posicion('fro');
    geometry.faces.push(
        //Derecha
        new THREE.Face3(0, 2, 1),
        new THREE.Face3(0, 3, 2),

        
        new THREE.Face3(4, 5, 6),
        new THREE.Face3(4, 6, 7),

        new THREE.Face3(0, 1, 5),
        new THREE.Face3(0, 5, 4),

        new THREE.Face3(3, 6, 2),
        new THREE.Face3(3, 7, 6),

        new THREE.Face3(1, 6, 5),
        new THREE.Face3(1, 2, 6),

        new THREE.Face3(0, 4, 7),
        new THREE.Face3(0, 7, 3)
    
    );
    geometry.faces.forEach((face, ndx) => {
        face.vertexColors = [
            new THREE.Color(color),
            new THREE.Color(color),
            new THREE.Color(color),
            //(new THREE.Color()).setHSL(ndx / 120      , 1, 0.5),
            //(new THREE.Color()).setHSL(ndx / 120 + 0.1, 1, 0.5),
            //(new THREE.Color()).setHSL(ndx / 120 + 0.2, 1, 0.5),
        ];
    });

    const material = new THREE.MeshBasicMaterial({vertexColors: THREE.VertexColors});
    var edges = new THREE.EdgesGeometry( geometry );
    var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );

    const carro = new THREE.Mesh(geometry, material);
    
    line.position.x = x;
    line.position.y = y;
    line.position.z = z;
    carro.position.x = x;
    carro.position.y = y;
    carro.position.z = z;

    scene.add(line);
    scene.add(carro);
}