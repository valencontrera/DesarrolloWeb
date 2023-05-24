//1)Variables
console.log('EJERCICIO 1: Variables')

// a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.
var num1 = 5
var num2 = 6
var result = num1 + num2
console.log('a. ' + num1 + ' + ' + num2 + ' = ' + result)

// b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una3er variable.
var pal1 = 'Hola'
var pal2 = 'Mundo'
result = pal1 + pal2
console.log('b. ' + pal1 + ' + ' + pal2 + ' = ' + result)

// c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad deletras del string) guardando el resultado de la suma en una 3er variable (utilizarlength).
pal1 = 'Hello'
pal2 = 'World'
result = pal1.length + pal2.length
console.log('c. La suma de la longitud de las palabras ' + pal1 + ' y ' + pal2 + ' es ' + result)