const soloLetras = /^[a-zA-Z ]+$/; //(con esta expresión se aceptan únicamente las letras del alfabeto, mayúsculas y minúsculas). /[A-Za-z]/
const numyLetras = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9\s]+$/;
const soloNumeros = /^[0-9]+$/;
const mail = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]{2,4}$/;
var nombre = document.getElementById('Nombre')
var edad = document.getElementById('Edad')
var direccion = document.getElementById('Direccion')
var ciudad = document.getElementById('Ciudad')
var telefono = document.getElementById('Telefono')
var email = document.getElementById('Email')
var dni = document.getElementById('Dni')
var codigoPostal = document.getElementById('Cpostal')
var contrasenia = document.getElementById('Contrasenia')
var contrasenia2 = document.getElementById('Contrasenia2')
var boton = document.getElementById('boton')
var titulo = document.getElementById('titulo')


nombre.addEventListener('keyup', modificarTitulo)
boton.addEventListener('click', enviar)
nombre.addEventListener('blur', verErrores)
edad.addEventListener('blur', verErrores)
direccion.addEventListener('blur', verErrores)
ciudad.addEventListener('blur', verErrores)
telefono.addEventListener('blur', verErrores)
email.addEventListener('blur', verErrores)
dni.addEventListener('blur', verErrores)
codigoPostal.addEventListener('blur', verErrores)
contrasenia.addEventListener('blur', verErrores)
contrasenia2.addEventListener('blur', verErrores)

nombre.addEventListener('focus', deshabilitarSpan)
edad.addEventListener('focus', deshabilitarSpan)
direccion.addEventListener('focus', deshabilitarSpan)
ciudad.addEventListener('focus', deshabilitarSpan)
telefono.addEventListener('focus', deshabilitarSpan)
email.addEventListener('focus', deshabilitarSpan)
dni.addEventListener('focus', deshabilitarSpan)
codigoPostal.addEventListener('focus', deshabilitarSpan)
contrasenia.addEventListener('focus', deshabilitarSpan)
contrasenia2.addEventListener('focus', deshabilitarSpan)

function modificarTitulo()
{
    if(nombre.value.length!=0)
    {
        titulo.textContent = 'SUSCRIPCION de ' + nombre.value       
    }
    else {
        titulo.textContent = 'SUSCRIPCION'
    }
}

function verErrores(e)
{ 
    var result = corregir(e.srcElement.id);
    if (result)
    {
        habilitarSpan(e.srcElement.id);
    }
}

function corregir(e)
{ 
    var dat = '';
    var result = false;

    switch (e) {
        case 'Nombre':
            dat = nombre.value;
            if(dat.length != 0 && !(dat.length > 5 && (dat.indexOf(' '))!= -1 && soloLetras.test(dat)))
            {
                result = true;
            }
            break;

        case 'Edad':
            dat = parseInt(edad.value);
            if((edad.value).length != 0 && !(dat> 17 && Number.isInteger(dat)))
            {
                result = true;
            }
            break;

        case 'Direccion':
            dat = direccion.value;
            if(dat.length != 0 && !(dat.length > 4 && (dat.indexOf(' '))!= -1 && numyLetras.test(dat)))
            {
                result = true;
            }
            break;

        case 'Ciudad':
            dat = ciudad.value;
            if(dat.length !=0 && !(dat.length > 2))
            {
                result = true;
            }
            break;

        case 'Telefono':
            dat = parseInt(telefono.value);
            if((telefono.value).length != 0 && !((telefono.value).length > 6 && ((telefono.value).indexOf(' '))==-1 && soloNumeros.test(dat)))
            {
                result = true;
            }
            break;

        case 'Email':
            dat = email.value;
            if(dat.length !=0 && !(mail.test(dat)))
            {
                result = true;
            }
            break;

        case 'Dni':
            dat = dni.value;
            if(dat.length !=0 && !(dat.length > 6 && dat.length < 9 && soloNumeros.test(parseInt(dat))))
            {
                result = true;
            }
            break;

        case 'Cpostal':
            dat = codigoPostal.value;
            if(dat.length!=0 && !(dat.length > 2))
            {
                result = true;
            }
            break;

        case 'Contrasenia':
            dat = contrasenia.value;
            if(dat.length!=0 && !(dat.length > 7 && numyLetras.test(dat)))
            {
                result = true;
            }
            break;
            
        case 'Contrasenia2':
            var pass = document.getElementById('Contrasenia')

            dat = contrasenia2.value;
            if(dat.length !=0 && pass.value != dat)
            {
                result = true;
            }
            break;
    
        default:
            break;
    }

    return result;

}

function habilitarSpan(idInput){
    var span = document.getElementById('input'+idInput);
    span.style.display = 'block';

    switch (idInput) {
        case 'Nombre':
            nombre.style.border = '3px solid orange';
            break;

        case 'Edad':
            edad.style.border = '3px solid orange';
            break;

        case 'Direccion':
            direccion.style.border = '3px solid orange';
            break;

        case 'Ciudad':
            ciudad.style.border = '3px solid orange';
            break;

        case 'Telefono':
            telefono.style.border = '3px solid orange';
            break;

        case 'Email':
            email.style.border = '3px solid orange';
            break;

        case 'Dni':
            dni.style.border = '3px solid orange';
            break;

        case 'Cpostal':
            codigoPostal.style.border = '3px solid orange';
            break;

        case 'Contrasenia':
            contrasenia.style.border = '3px solid orange';
            break;
            
        case 'Contrasenia2':
            contrasenia2.style.border = '3px solid orange';
            break;
    
        default:
            break;
    }
}

function deshabilitarSpan(e){
    var span = document.getElementById('input'+ e.srcElement.id);
    span.style.display = 'none';

    switch (e.srcElement.id) {
        case 'Nombre':
            nombre.style.border = '1px solid blue';
            break;

        case 'Edad':
            edad.style.border = '1px solid blue';
            break;

        case 'Direccion':
            direccion.style.border = '1px solid blue';
            break;

        case 'Ciudad':
            ciudad.style.border = '1px solid blue';
            break;

        case 'Telefono':
            telefono.style.border = '1px solid blue';
            break;

        case 'Email':
            email.style.border = '1px solid blue';
            break;

        case 'Dni':
            dni.style.border = '1px solid blue';
            break;

        case 'Cpostal':
            codigoPostal.style.border = '1px solid blue';
            break;

        case 'Contrasenia':
            contrasenia.style.border = '1px solid blue';
            break;
            
        case 'Contrasenia2':
            contrasenia2.style.border = '1px solid blue';
            break;
    
        default:
            break;
    }
}

function enviar(){
    
    var datos = ""
    var array = ['Nombre', 'Dni', 'Edad', 'Email','Direccion','Telefono','Cpostal','Ciudad']
    var span 

   for (let i = 0; i < array.length; i++) {
    span = document.getElementById('input'+ array[i]);

        switch (array[i]) {
            case 'Nombre':
                datos = datos + `*Nombre: ${nombre.value}`

                if(corregir(array[i]))
                {
                    datos = datos + ` -  ${span.textContent}\n`
                }
                else 
                {
                    datos = datos + `\n`
                }
                break;
    
            case 'Edad':
                datos = datos + `*Edad: ${edad.value}`

                if(corregir(array[i]))
                {
                    datos = datos + ` -  ${span.textContent}\n`
                }
                else 
                {
                    datos = datos + `\n`
                }               
                 break;
    
            case 'Direccion':
                datos = datos + `*Direccion: ${direccion.value}`

                if(corregir(array[i]))
                {
                    datos = datos + ` -  ${span.textContent}\n`
                }
                else 
                {
                    datos = datos + `\n`
                }                
                break;
    
            case 'Ciudad':
                datos = datos + `*Ciudad: ${ciudad.value}`

                if(corregir(array[i]))
                {
                    datos = datos + ` -  ${span.textContent}\n`
                }
                else 
                {
                    datos = datos + `\n`
                }                break;
    
            case 'Telefono':
                datos = datos + `*Telefono: ${telefono.value}`

                if(corregir(array[i]))
                {
                    datos = datos + ` -  ${span.textContent}\n`
                }
                else 
                {
                    datos = datos + `\n`
                }                break;
    
            case 'Email':
                datos = datos + `*Email: ${email.value}`

                if(corregir(array[i]))
                {
                    datos = datos + ` -  ${span.textContent}\n`
                }
                else 
                {
                    datos = datos + `\n`
                }                break;
    
            case 'Dni':
                datos = datos + `*Dni: ${dni.value}`

                if(corregir(array[i]))
                {
                    datos = datos + ` -  ${span.textContent}\n`
                }
                else 
                {
                    datos = datos + `\n`
                }                break;
    
            case 'Cpostal':
                datos = datos + `*Código Postal: ${codigoPostal.value}`

                if(corregir(array[i]))
                {
                    datos = datos + ` -  ${span.textContent}\n`
                }
                else 
                {
                    datos = datos + `\n`
                }                
                break;
        
            default:
                break;
        }
    
   }
   alert(datos)
    
}
