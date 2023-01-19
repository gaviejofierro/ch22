console.log("Sesion js02");

/*
Funciones declaradas / funciones definidas
(function declaration / function statement)

Una caracteristica de las funciones declaradas
es que tiene hoisting (elevacion).

*/
console.log( "El resultado de 5 * 10 es = " + multiplica(5, 10));

function multiplica(a, b){
    return a * b;
}

/*
Funciones Expresadas

Las funciones expresadas (function expressions) son funciones
que son declaradas dentro de la asignacion de una variable.

Estas funciones pueden ser anonimas (no tienen nombre).
Las funciones expresadas no tienen hoisting.

*/

/**
 * Suma dos valores
 * @param {number} a primer operador para sumar
 * @param {number} b segundo operador para sumar
 * @returns resultado de a + b;
 */

const suma = function ( a, b ) { 
    const result = a + b;
    return result;
}

console.log("La sumatoria de 4 + 6 = " + suma(4, 6));

/*
Funciones autoinvocadas.

Las funciones autoinvocadas ( selft-invoking functions ) 
son funciones que se ejecutan en su definicion.
Pueden ser anonimas.
*/

( function saludo(){
    console.log("Hola, me estoy autoinvocando");
})();

/*
Funciones Flecha

Una funcion flecha( arrow functions ) son similares
a las funciones expresadas, pero no requiere la palabra
function. Ademas, si solo tiene una instruccion y es el retorno,
no requiere la instruccion reutn y las llaves {}.

Las funciones flecha no tienen hoisting.
*/

const restaExpresada = function (a, b){
    return a-b;
}

const resta = ( a, b ) => a - b;
console.log("La resta de 20 - 2 = " + resta(20,2));

const exponente = ( a, b ) => {
    const result = a ** b;
    return result;

}

console.log("El numero 4^3 = " + exponente(4,3));

const exponenteAlCuadrado = ( a ) => a ** 2;
console.log("El numero 4^2 = " + exponenteAlCuadrado(4));

const imprimeSaludo = () => console.log("Holi crayoli");
imprimeSaludo();

/*
Funciones con parametros inicializados.
*/
function divide( a=3, b=1 ){
    return a/b;
}

console.log("La division de 3/1 = " + divide(5));

/*
Rest Parameters
El parametro rest nos permite representar una serie de valores
indefinidos en los argumentos como un array.
*/
function sumatoriaIndefinida( a, b, ...restoDatos ){
    let sumatoria = a + b;
    for (let i = 0; i < restoDatos.length; i++){
        sumatoria += restoDatos[i]; // sumatoria = sumatoria + restoDatos[i];    
    }
    return sumatoria;
}
console.log("Sumar varios numeros: " + sumatoriaIndefinida(2,3,4,5));

/*
Funciones Recursivas.
Es una funcion que se llama a si misma.
*/
// Factorial de 0 = 1
// Factorial de 3 = 3 * 2 * 1; //6
// Factorial de 5 = 5 * 4 * 3 * 2 * 1; // 120
function factorialConCicloFor( a ){
    let total = 1;
    for (i=1; i<=a; i++) {
        total *= i;
    }
    return total;
}

function factorial( number ){
    if( number < 1 )
     return 1;
    return number * factorial( number - 1 )
}

console.log("Factorial 3 = " + factorialConCicloFor(3) ); //6
console.log("Factorial 5 = " + factorialConCicloFor(5) ); //120
console.log("Factorial 3 = " + factorial(3) ); //6
console.log("Factorial 5 = " + factorial(5) ); //120

// Hacer una recursion que muestre en consola un saludo como:
/*
Saludo 1
Saludo 2
Saludo 3 ... Saludo 10

saludo(10);
*/


function saludo( cantidad, iteracion=1 ){
    console.log("saludo" + iteracion);
    if( iteracion >= cantidad) 
        return 1;
    return saludo( cantidad, iteracion+1 );
}
saludo(10);

