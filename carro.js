function GetCarro(scene, x, y, z) {
    var geometry = new THREE.Geometry();
    geometry.vertices.push(
        new THREE.Vector3(-4,-2, 2),  // 0
        new THREE.Vector3( 4,-2, 2),  // 1
        new THREE.Vector3( 4, 2, 2),  // 2
        new THREE.Vector3(-1, 2, 2),  // 3
        new THREE.Vector3(-2, 0, 2),  // 4 
        new THREE.Vector3(-4, 0, 2),  // 5

        new THREE.Vector3(-4,-2,-2),  // 6
        new THREE.Vector3( 4,-2,-2),  // 7
        new THREE.Vector3( 4, 2,-2),  // 8
        new THREE.Vector3(-1, 2,-2),  // 9
        new THREE.Vector3(-2, 0,-2),  // 10 
        new THREE.Vector3(-4, 0,-2),  // 11

        //Lantas
        new THREE.Vector3(-3.33, -1.66, 2.2),  // 12
        new THREE.Vector3(-2.66, -1.66, 2.2),  // 13
        new THREE.Vector3(-2.66, -2.33, 2.2),  // 14
        new THREE.Vector3(-3.32, -2.33, 2.2),  // 15
        
        new THREE.Vector3(-3.33, -1.66, 1.8),  // 16
        new THREE.Vector3(-2.66, -1.66, 1.8),  // 17
        new THREE.Vector3(-2.66, -2.33, 1.8),  // 18
        new THREE.Vector3(-3.32, -2.33, 1.8),  // 19
        //Lantas
        new THREE.Vector3(3.33, -1.66, 2.2),  // 11
        new THREE.Vector3(2.66, -1.66, 2.2),  // 11
        new THREE.Vector3(2.66, -2.33, 2.2),  // 11
        new THREE.Vector3(3.32, -2.33, 2.2),  // 11
    );


    GenGrid(scene, -99999991.009, 20, 20, 6);
    posicion('aba');
    geometry.faces.push(
        //Derecha
        new THREE.Face3(0, 4, 5),
        new THREE.Face3(0, 1, 4),
        new THREE.Face3(1, 2, 3),
        new THREE.Face3(1, 3, 4),
        //Izquierda
        new THREE.Face3(6, 11, 10),
        new THREE.Face3(6, 10, 7),
        new THREE.Face3(7, 9, 8),
        new THREE.Face3(10, 9, 7),
        //Atras
        new THREE.Face3(1, 7, 2),
        new THREE.Face3(7, 8, 2),
        /*/Abajo
        new THREE.Face3(6, 7, 0),
        new THREE.Face3(0, 7, 1),
        //Arriba
        new THREE.Face3(3, 2, 8),
        new THREE.Face3(3, 8, 9),
        //Capo
        new THREE.Face3(5, 4, 10),
        new THREE.Face3(5, 10, 11),*/
        //Parachoque
        new THREE.Face3(6, 0, 5),
        new THREE.Face3(6, 5, 11),
        //Vidrio
        new THREE.Face3(10, 4, 3),
        new THREE.Face3(10, 3, 9),
        //Llanta DelDer
        new THREE.Face3(14, 13, 12),
        new THREE.Face3(14, 12, 15),
        new THREE.Face3(16, 17, 18),
        new THREE.Face3(16, 18, 19),
        new THREE.Face3(),
        new THREE.Face3(),
        
        
        new THREE.Face3(20, 21, 22),
        new THREE.Face3(20, 22, 23),
        new THREE.Face3(),
        new THREE.Face3(),
        new THREE.Face3(),
        new THREE.Face3(),
        new THREE.Face3(),
        new THREE.Face3(),
        new THREE.Face3(),
        new THREE.Face3(),
        new THREE.Face3(),
        new THREE.Face3(),
        new THREE.Face3(),
        new THREE.Face3(),
        
        /*
        new THREE.Face3(),
        new THREE.Face3(),
        */
    );

    geometry.faces.forEach((face, ndx) => {
        face.vertexColors = [
            (new THREE.Color()).setHSL(ndx / 120      , 1, 0.5),
            (new THREE.Color()).setHSL(ndx / 120 + 0.1, 1, 0.5),
            (new THREE.Color()).setHSL(ndx / 120 + 0.2, 1, 0.5),
        ];
    });

    const material = new THREE.MeshBasicMaterial({vertexColors: THREE.VertexColors});

    var edges = new THREE.EdgesGeometry( geometry );
    var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xff0000 } ) );

    const carro = new THREE.Mesh(geometry, material);
    
    var xP = 0;
    var yP = 0;

    line.position.x = xP;
    line.position.y = yP;
    carro.position.x = xP;
    carro.position.y = yP;

    scene.add(line);
    scene.add(carro);
}