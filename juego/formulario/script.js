const soloLetras = /^[a-zA-Z ]+$/; //(con esta expresión se aceptan únicamente las letras del alfabeto, mayúsculas y minúsculas). /[A-Za-z]/
const numyLetras = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9\s]+$/;
const soloNumeros = /^[0-9]+$/;
const mail = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]{2,4}$/;
const nombre = document.getElementById('Nombre');
const edad = document.getElementById('Edad');
const direccion = document.getElementById('Direccion');
const ciudad = document.getElementById('Ciudad');
const telefono = document.getElementById('Telefono');
const email = document.getElementById('Email');
const dni = document.getElementById('Dni');
const codigoPostal = document.getElementById('Cpostal');
const contrasenia = document.getElementById('Contrasenia');
const contrasenia2 = document.getElementById('Contrasenia2');
const boton = document.getElementById('boton');
const titulo = document.getElementById('titulo');
const body = document.getElementById('bodyForm');

var modificarTitulo = function () 
{
    if(document.getElementsByTagName('body')[0].id == 'bodyForm')
    {
        if(nombre.value.length!=0)
        {
            titulo.textContent = 'SUSCRIPCION de ' + nombre.value       
        }
        else {
            titulo.textContent = 'SUSCRIPCION'
        }
    }
}


var setearDatos = function () 
{   
    if(document.getElementsByTagName('body')[0].id == 'bodyForm')
    {

        if(localStorage.getItem('Nombre') != null && localStorage.getItem('Nombre') != undefined)
        {
            nombre.value = localStorage.getItem('Nombre');
        }

        if(localStorage.getItem('Edad') != null && localStorage.getItem('Edad') !=  undefined)
        {
            edad.value = parseInt(localStorage.getItem('Edad'));
        }

        if(localStorage.getItem('Direccion') != null && localStorage.getItem('Direccion') !=  undefined)
        {
            direccion.value = localStorage.getItem('Direccion');
        }

        if(localStorage.getItem('Ciudad') != null && localStorage.getItem('Ciudad') !=  undefined)
        {
            ciudad.value = localStorage.getItem('Ciudad');
        }

        if(localStorage.getItem('Telefono') != null && localStorage.getItem('Telefono') !=  undefined)
        {
            telefono.value = parseInt(localStorage.getItem('Telefono'));
        }

        if(localStorage.getItem('Email') != null && localStorage.getItem('Email') !=  undefined)
        {
            email.value = localStorage.getItem('Email');
        }

        if(localStorage.getItem('Dni') != null && localStorage.getItem('Dni') !=  undefined)
        {
            dni.value = parseInt(localStorage.getItem('Dni'));
        }

        if(localStorage.getItem('Cpostal') != null && localStorage.getItem('Cpostal') !=  undefined)
        {
            codigoPostal.value = localStorage.getItem('Cpostal');
        }

        if(localStorage.getItem('Contrasenia') != null && localStorage.getItem('Contrasenia') !=  undefined)
        {
            contrasenia.value = localStorage.getItem('Contrasenia');
        }

        if(localStorage.getItem('Contrasenia2') != null && localStorage.getItem('Contrasenia2') !=  undefined)
        {
            contrasenia2.value = localStorage.getItem('Contrasenia2');
        }
    }
}

var guardarLocalStrage = function (json) 
{
    localStorage.setItem('Nombre', json.Nombre);
    localStorage.setItem('Edad', json.Edad);
    localStorage.setItem('Direccion', json.Direccion);
    localStorage.setItem('Ciudad', json.Ciudad);
    localStorage.setItem('Telefono', json.Telefono);
    localStorage.setItem('Email', json.Email);
    localStorage.setItem('Dni', json.Dni);
    localStorage.setItem('Cpostal', json.Cpostal);
    localStorage.setItem('Contrasenia', json.Contrasenia);
    localStorage.setItem('Contrasenia2', json.Contrasenia2);
}

var insertarDatos = function ()
{
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            Nombre: nombre.value,
            Edad:parseInt(edad.value),
            Direccion: direccion.value,
            Ciudad: ciudad.value,
            Telefono: parseInt(telefono.value),
            Email: email.value,
            Dni: parseInt(dni.value),
            Cpostal: codigoPostal.value,
            Contrasenia:contrasenia.value,
            Contrasenia2:contrasenia2.value
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
  .then((resp) => resp.json())
  .then((json) =>  
    {
        if(JSON.stringify(json) != undefined && JSON.stringify(json) != null && JSON.stringify(json) != '')
        {
            alert('SUSCRIPCION EXITOSA\n' + JSON.stringify(json))
            guardarLocalStrage(json)
        }
        else
        {
            alert('SUSCRIPCION ERRONEA')
        }
    }
  );
}

var corregir = function (e)
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


var habilitarSpan = function (idInput){
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

var verErrores = function (e)
{ 
    var result = corregir(e.srcElement.id);
    if (result)
    {
        habilitarSpan(e.srcElement.id);
    }
}

var deshabilitarSpan = function (e){
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

var enviar = function (){
    var flagOk = true
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
                    flagOk = false
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
                    flagOk = false
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
                    flagOk = false
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
                    flagOk = false
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
                    flagOk = false
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
                    flagOk = false
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
                    flagOk = false
                    datos = datos + ` -  ${span.textContent}\n`
                }
                else 
                {
                    datos = datos + `\n`
                }                
                break;
    
            case 'Cpostal':
                datos = datos + `*Código Postal: ${codigoPostal.value}`

                if(corregir(array[i]))
                {
                    flagOk = false
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

   if(flagOk)
   {
    insertarDatos()
   }
   else 
   {
    alert(datos)
   }
}


window.addEventListener('load', setearDatos());
nombre.addEventListener('keyup', modificarTitulo);
boton.addEventListener('click', enviar);
nombre.addEventListener('blur', verErrores);
edad.addEventListener('blur', verErrores);
direccion.addEventListener('blur', verErrores);
ciudad.addEventListener('blur', verErrores);
telefono.addEventListener('blur', verErrores);
email.addEventListener('blur', verErrores);
dni.addEventListener('blur', verErrores);
codigoPostal.addEventListener('blur', verErrores);
contrasenia.addEventListener('blur', verErrores);
contrasenia2.addEventListener('blur', verErrores);

nombre.addEventListener('focus', deshabilitarSpan);
edad.addEventListener('focus', deshabilitarSpan);
direccion.addEventListener('focus', deshabilitarSpan);
ciudad.addEventListener('focus', deshabilitarSpan);
telefono.addEventListener('focus', deshabilitarSpan);
email.addEventListener('focus', deshabilitarSpan);
dni.addEventListener('focus', deshabilitarSpan);
codigoPostal.addEventListener('focus', deshabilitarSpan);
contrasenia.addEventListener('focus', deshabilitarSpan);
contrasenia2.addEventListener('focus', deshabilitarSpan);