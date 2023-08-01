//declaracion de variables
const soloLetras = /^[a-zA-Z ]+$/; //(con esta expresión se aceptan únicamente las letras del alfabeto, mayúsculas y minúsculas). /[A-Za-z]/
const numyLetrasSioSi = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9\s]+$/;
const numYletras = /^(?=.*[a-zA-Z0-9]).*$/;
const soloNumeros = /^[0-9]+$/;
const mail = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]{2,4}$/;
const nombre = document.getElementById('Nombre');
const edad = document.getElementById('Edad');
const direccion = document.getElementById('Direccion');
const telefono = document.getElementById('Telefono');
const email = document.getElementById('Email');
const dni = document.getElementById('Dni');
const boton = document.getElementById('boton');
const body = document.getElementById('bodyForm');
const comentario = document.getElementById('Comentario');
const formulario = document.getElementById('formulario');

//metodo que me dice si el input tiene errores
var corregir = function (e)
{
    var dat = '';
    var result = false;
    switch (e) 
    {
        case 'Nombre':
            dat = nombre.value;
            if((dat.length != 0 && !(dat.length > 0 && numYletras.test(dat))) || dat.length == 0)
            {
                result = true;
            }
            break;
        case 'Edad':
            dat = parseInt(edad.value);
            if(((edad.value).length != 0 && !(dat> 17 && Number.isInteger(dat)))||(edad.value).length == 0)
            {
                result = true;
            }
            break;
        case 'Direccion':
            dat = direccion.value;
            if((dat.length != 0 && !(dat.length > 4 && (dat.indexOf(' '))!= -1 && numyLetrasSioSi.test(dat))) || dat.length == 0)
            {
                result = true;
            }
            break;
        case 'Telefono':
            dat = parseInt(telefono.value);
            if(((telefono.value).length != 0 && !((telefono.value).length > 6 && ((telefono.value).indexOf(' '))==-1 && soloNumeros.test(dat))) || (telefono.value).length == 0)
            {
                result = true;
            }
            break;
        case 'Email':
            dat = email.value;
            if((dat.length !=0 && !(mail.test(dat))) || dat.length == 0)
            {
                result = true;
            }
            break;
        case 'Dni':
            dat = dni.value;
            if((dat.length !=0 && !(dat.length > 6 && dat.length < 9 && soloNumeros.test(parseInt(dat)))) || dat.length == 0)
            {
                result = true;
            }
            break;
        case 'Comentario':
            dat = comentario.value;
            if(dat.length == 0 || (dat.length !=0 && !(dat.length>4)))
            {
                result = true;
            }
            break;
        default:
            break;
    }
    return result;
}

//metodo que muestra el error debajo del input del formulario
var habilitarSpan = function (idInput)
{
    var span = document.getElementById('input'+idInput);
    span.classList.remove('ocultar');
    switch (idInput) 
    {
        case 'Nombre':
            nombre.classList.remove('bordeSinError');
            nombre.classList.add('bordeError');
            break;

        case 'Edad':
            edad.classList.remove('bordeSinError');
            edad.classList.add('bordeError');
            break;

        case 'Direccion':
            direccion.classList.remove('bordeSinError');
            direccion.classList.add('bordeError');
            break;

        case 'Telefono':
            telefono.classList.remove('bordeSinError');
            telefono.classList.add('bordeError');
            break;

        case 'Email':
            email.classList.remove('bordeSinError');
            email.classList.add('bordeError');
            break;

        case 'Dni':
            dni.classList.remove('bordeSinError');
            dni.classList.add('bordeError');
            break; 

        case 'Comentario':
            comentario.classList.remove('bordeSinError');
            comentario.classList.add('bordeError');
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

//metodo que desaparece el error debajo del input del formulario
var deshabilitarSpan = function (e)
{
    var span = document.getElementById('input'+ e.srcElement.id);
    span.classList.add('ocultar');
    switch (e.srcElement.id) 
    {
        case 'Nombre':
            nombre.classList.remove('bordeError');
            nombre.classList.add('bordeSinError');
            break;
        case 'Edad':
            edad.classList.remove('bordeError');
            edad.classList.add('bordeSinError');
            break;
        case 'Direccion':
            direccion.classList.remove('bordeError');
            direccion.classList.add('bordeSinError');
            break;
        case 'Telefono':
            telefono.classList.remove('bordeError');
            telefono.classList.add('bordeSinError');
            break;
        case 'Email':
            email.classList.remove('bordeError');
            email.classList.add('bordeSinError');
            break;
        case 'Dni':
            dni.classList.remove('bordeError');
            dni.classList.add('bordeSinError');
            break;
        case 'Comentario':
            comentario.classList.remove('bordeError');
            comentario.classList.add('bordeSinError');
            break;
        default:
            break;
    }
}

//metodo que se ejecuta al apretar enviar
var enviar = function (event)
{
    event.preventDefault();
    var asunto = 'Jugué al Simon Dice y tengo una consulta';
    var mailtoLink = `mailto:${email.value}?subject=${asunto}&body=${comentario.value}`;
    window.location.href = mailtoLink;
}    

//metodo que habilita el boton enviar del formulario
var habiltiarBoton = function ()
{
    var input = ['Nombre', 'Dni', 'Edad', 'Email','Direccion','Telefono', 'Comentario'];
    var habilitarBoton = true;
    for (let i = 0; i < input.length; i++) 
    {
        if(corregir(input[i]))
        {
            habilitarBoton = false;
        }
    }
    if(habilitarBoton)    
    {
        boton.disabled = false;
    }
    else 
    {
        boton.disabled = true;
    }
}

//metodo que se ejecuta al cargar la pagina
var cargar = function () 
{
    boton.disabled = true;
}

//eventos
formulario.addEventListener('keyup', habiltiarBoton);
formulario.addEventListener('submit', enviar.bind(this));
window.addEventListener('load', cargar());
boton.addEventListener('click', enviar);
nombre.addEventListener('blur', verErrores);
edad.addEventListener('blur', verErrores);
direccion.addEventListener('blur', verErrores);
telefono.addEventListener('blur', verErrores);
email.addEventListener('blur', verErrores);
dni.addEventListener('blur', verErrores);
comentario.addEventListener('blur', verErrores);
nombre.addEventListener('focus', deshabilitarSpan);
edad.addEventListener('focus', deshabilitarSpan);
direccion.addEventListener('focus', deshabilitarSpan);
telefono.addEventListener('focus', deshabilitarSpan);
email.addEventListener('focus', deshabilitarSpan);
dni.addEventListener('focus', deshabilitarSpan);
comentario.addEventListener('focus', deshabilitarSpan);