//5) For
console.log('EJERCICIO 5: For')

//a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
var a1 = ["perro", "gato", "vaca", "chancho", "mono"]
for (let i = 0; i < a1.length; i++) {
    console.log('a. En el indice: ' + i + ' = ' + a1[i])
}

//b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
var l1
var demasLetras
for (let i = 0; i < a1.length; i++) {
    l1 = a1[i].substring(0,1)
    demasLetras = a1[i].substring(1)
    a1[i] = l1.toUpperCase() + demasLetras
    console.log('b. En el indice: ' + i + ' = ' + a1[i])
}
//c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a. recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.
var sentence = ''
for (let i = 0; i < a1.length; i++) {
    sentence= sentence + a1[i]
    if(i != a1.length - 1)
    {
        sentence = sentence + ', '
    }
}
console.log('c. ' + sentence)

//d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log)
a1 = []

for (let i = 0; i < 10; i++) {
    a1.push(i)
}

console.log('d. ' + a1)
