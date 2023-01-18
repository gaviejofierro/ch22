console.log("Sesion js01");

/*Son 7 datos primitivos de JavaScript
- String ( "Hola mundo" )
- Number ( 1800.22 )
    Los numeros se utilizan 64 bits para almacenarlo
    pero solo se usan 53 bits para representar el numero
- BigInt ( 1800n )
    Convertir un dato numerico a BigInt
    let bigIntVar = BigInt( maxNumber );
    bigIntVar + 1n
- Boolean ( true/false )
- Undefined ( Undefined )
    Un dato no se define el tipo de dato, solo se declara.
- Null
- Symbol

Tipos de datos object:
-Object
    let myObject = [];
-Array

Funciones

*/  


let myObject = {clave: "valor", edad: 18, 5:5};
console.log( myObject.edad );
const propiedad = 'edad';
console.log( myObject[ propiedad ] );
console.log( myObject[ '5' ] );