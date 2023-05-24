//6) Function
console.log('EJERCICIO 6: Function')

// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor dedicha variable en la consola del navegador.
var suma = function suma(p1, p2) {
    return p1 + p2
}
var result = suma(4, 6)

console.log('a. ' + result)
// b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

var suma2 = function suma2(p1, p2) {
    var res = 0
    if(isNaN(p1) || isNaN(p2))
    {
        res = 'NaN'
    }
    else 
    {
        res = p1 + p2
    }

    return res
}
result = suma2('f', 6)

console.log('b. ' + result)

// c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
var validateInteger = function validateInteger(num) {
   var res = false
    if(Number.isInteger(num))
    {
        res=true
    }

    return res
}
result = validateInteger(6.5)

console.log('c. ' + result)

// d. A la función suma del ejercicio b. agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
var suma3 = function suma3(p1, p2) {
    var res = 0
    if(isNaN(p1) || isNaN(p2))
    {
        res = 'NaN'
    }
    else 
    {
        if(!(validateInteger(p1)) && !(validateInteger(p2)))
        {
            res = 'ERROR: ' + p1 + ' y ' + p2 +' no son enteros, sus enteros serían ' + Math.round(p1) + ' y ' + Math.round(p2)

        }
        else {
            if(!(validateInteger(p1)))
            {
                res = 'ERROR: ' + p1 + ' no es entero, su entero sería ' + Math.round(p1)
            }
            else 
            {
                if(!(validateInteger(p2)))
                {
                    res = 'ERROR: ' + p2 + ' no es entero, su entero sería ' + Math.round(p2)

                }
                else 
                {
                    res = p1 + p2

                }
            }
        }
        
    }

    return res
}
result = suma3(6.3, 2.2)

console.log('d. ' + result)

// e. Convertir la validación del ejercicio 6 d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
//LA HABIA CREQADO YA EN EJERCICIO 6 c.
validateInteger = function validateInteger(num) {
    var res = false
     if(Number.isInteger(num))
     {
         res=true
     }
 
     return res
 }

if(validateInteger(6.3) && validateInteger(2.23))
{
    result = suma2(6.3, 2.2)
}
else 
{
    result = 'error uno o ambos números no son enteros'
}

console.log('e. ' + result)