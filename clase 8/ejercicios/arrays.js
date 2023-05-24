//3) Arrays
console.log('EJERCICIO 3: Array')

//a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
var a1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log('a. Posición 5 del array "' + a1[5] + '" y posición 11 "' + a1[11] + '"')

//b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
a1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
a1.sort()
console.log('b. El array ordenado alfabéticamente = ' + a1)

//c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
a1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
a1.unshift('Los meses')
a1.push('son 12')
console.log('c. El array = ' + a1)

//d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
a1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
a1.pop()
a1.shift()
console.log('d. El array = ' + a1)

//e. Invertir el orden del array (utilizar reverse).
a1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
a1.reverse()
console.log('e. El array = ' + a1)

//f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
a1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
var result = a1.join(' - ')
console.log('f. El array = ' + result)

//g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
a1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
result = a1.slice(4,11)
console.log('g. El array = ' + result)