//2)String
console.log('EJERCICIO 2: String')

// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
var pal1 = 'Hola Mundo'
var result = pal1.toUpperCase()
console.log('a. ' + pal1 + ' = ' + result)

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
pal1 = 'Hola Mundo'
result = pal1.substring(0,5)
console.log('b. Los primeros 5 caracteres de "' + pal1 + '" son "' + result +'"')

// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable(utilizar substring).
pal1 = 'Hola Mundo'
result = pal1.substring(7)
console.log('c. Los últimos 3 caracteres de "' + pal1 + '" son "' + result +'"')

// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
pal1 = 'HOLA MUNDO'
var l1 = pal1.substring(0,1)
var l2 = pal1.substring(1)
var primerLetra = l1.toUpperCase()
var demasLetras = l2.toLowerCase()
result = primerLetra + demasLetras
console.log('d. ' + pal1 + ' = ' + result)


// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
pal1 = 'Hola Mundo'
result = pal1.indexOf(' ')
console.log('e. En "' + pal1 + '" la posición del espacio es ' + result)

// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring,toUpperCase, toLowerCase y el operador +).
pal1 = 'BIENVENIDOS AMIGOS'
l1 = pal1.substring(0,1)
var indexEspacio = pal1.indexOf(' ')
l2 = pal1.substring(parseInt(indexEspacio) + 1, parseInt(indexEspacio) + 2)
var letras1 = pal1.substring(1,indexEspacio)
var letras2 = pal1.substring(parseInt(indexEspacio) + 2)
result = l1.toLocaleUpperCase() + letras1.toLocaleLowerCase() + ' ' + l2.toLocaleUpperCase() + letras2.toLocaleLowerCase()
console.log('d. "' + pal1 + '" = "' + result + '"')