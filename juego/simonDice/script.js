//declaracion de variables
const tituloPrin = document.getElementById('titulo');
var tituloPrinTexto = 'Simón dice';
var tituloPrinContar = 3;
var nivelTitulo = 'Nivel';
var nivelNum = 0;
const nivel = document.getElementById('nivel');
const comboPuntaje = document.getElementById('comboPuntos');
const puntajeComponente = document.getElementById('puntaje');
const puntajeMaxComponente = document.getElementById('puntajeMax');
var puntajeMax = 0;
var puntaje = 0;
const botonComenzarJuego = document.getElementById('comenzarJuego');
const botonReiniciarJuego = document.getElementById('reiniciarJuego');
var colores=['r','am','az','v'];
var secuenciaClick=[];
var secuenciaSistema=[];
const verde = document.getElementById('v');
const azul = document.getElementById('az');
const amarillo = document.getElementById('am');
const rojo = document.getElementById('r');
var timerPrender = 1800;
var timerApagar = 2050;
var turnoJugador=false;
var guardadoViejo = false;
const soloLetras = /^[a-zA-Z ]+$/; //con esta expresión se aceptan únicamente las letras del alfabeto, mayúsculas y minúsculas
const nombre = document.getElementById('nombre');
const contenedorForm = document.getElementById('contenedorNombre');
const contenedorBotones = document.getElementById('contenedorBotones');
const botonEnviar = document.getElementById('enviar');
var nombreJugador = '';

//metodo que se ejecuta al cargar o recargar la pagina, precarga los datos del localstorage, resetea todas las variables y configura ciertas otras
var cargar = function (reiniciar) 
{
    secuenciaClick=[];
    secuenciaSistema=[];
    puntajeMax = localStorage.getItem('puntajeMax') != null && localStorage.getItem('puntajeMax') != undefined ? parseInt(localStorage.getItem('puntajeMax')) : 0;    
    puntajeMaxComponente.textContent=puntajeMax;
    tituloPrin.textContent=tituloPrinTexto;
    botonReiniciarJuego.disabled = true;
    botonComenzarJuego.disabled = false;
    tituloPrinContar = 3;
    timerPrender = 1800;
    timerApagar = 2050;
    nombreJugador = localStorage.getItem('nombreJugador')!='' ? localStorage.getItem('nombreJugador') : '';

    if(reiniciar)
    {
        nivelNum = 0;
        comboPuntaje.classList.remove('mostrar');
        comboPuntaje.classList.add('ocultar');
        nivel.classList.remove('mostrar');
        nivel.classList.add('ocultar');
        localStorage.removeItem('puntaje');
        localStorage.removeItem('nivel');
        localStorage.removeItem('velocidad');
        localStorage.removeItem('secuencia');
        localStorage.removeItem('nombreJugador');
        localStorage.removeItem('fecha');
        nombre.value ='';
        puntaje = 0;
        puntajeComponente.textContent = puntaje.toString();
        contenedorForm.classList.remove('ocultar');
        contenedorForm.classList.add('mostrar');
        contenedorBotones.classList.remove('mostrar');
        contenedorBotones.classList.add('ocultar');
        botonEnviar.disabled = true;
    }
    else 
    {
        if((localStorage.getItem('nivel') != null && localStorage.getItem('nivel') != undefined && localStorage.getItem('nivel')>1) 
        && (localStorage.getItem('puntaje') != null && localStorage.getItem('puntaje') != undefined )
        && (localStorage.getItem('velocidad') != null && localStorage.getItem('velocidad') != undefined )
        && (localStorage.getItem('secuencia') != null && localStorage.getItem('secuencia') != undefined )  
        && (localStorage.getItem('nombreJugador') != null && localStorage.getItem('nombreJugador') !=undefined))
        {   
            nivelNum = parseInt(localStorage.getItem('nivel'));
            nivel.textContent = nivelTitulo + ' ' + nivelNum.toString();
            puntaje = localStorage.getItem('puntaje') != null && localStorage.getItem('puntaje') != undefined ? parseInt(localStorage.getItem('puntaje')) : 0;
            puntajeComponente.textContent = puntaje.toString();
            botonReiniciarJuego.disabled = false;
            timerPrender = parseInt(localStorage.getItem('velocidad'));
            timerApagar = timerPrender + 250;
            secuenciaSistema = JSON.parse(localStorage.getItem('secuencia'));
            contenedorForm.classList.remove('mostrar');
            contenedorForm.classList.add('ocultar');
            contenedorBotones.classList.remove('ocultar');
            contenedorBotones.classList.add('mostrar');
        }
        else 
        {
            nivelNum = 0;
            comboPuntaje.classList.remove('mostrar');
            comboPuntaje.classList.add('ocultar');
            nivel.classList.remove('mostrar');
            nivel.classList.add('ocultar');
            localStorage.removeItem('puntaje');
            localStorage.removeItem('nivel');
            localStorage.removeItem('velocidad');
            localStorage.removeItem('secuencia');
            localStorage.removeItem('fecha');
            puntaje = 0;
            puntajeComponente.textContent = puntaje.toString();

            if(nombreJugador!='' && nombreJugador!=null && nombreJugador!=undefined)
            {
                contenedorForm.classList.remove('mostrar');
                contenedorForm.classList.add('ocultar');
                contenedorBotones.classList.remove('ocultar');
                contenedorBotones.classList.add('mostrar');
            }
            else 
            {
                contenedorForm.classList.remove('ocultar');
                contenedorForm.classList.add('mostrar');
                contenedorBotones.classList.remove('mostrar');
                contenedorBotones.classList.add('ocultar');
            }
            botonEnviar.disabled = true;
        }
    }
}

//pone el color del triangulo más claro, asi simula una luz
var prenderLuces = function (color) 
{
    switch (color) 
    {
        case 'r':
            rojo.classList.remove('apagarRojo');
            rojo.classList.add('prenderRojo');
            break;
        case 'v':
            verde.classList.remove('apagarVerde');
            verde.classList.add('prenderVerde');
            break; 
        case 'az':
            azul.classList.remove('apagarAzul');
            azul.classList.add('prenderAzul');
            break; 
        case 'am':
            amarillo.classList.remove('apagarAmarillo');
            amarillo.classList.add('prenderAmarillo');
            break;
        default:
            break;
    }
}

//pone el color del triangulo más oscuro, asi simula que se apaga la luz
var apagarLuces = function (color) 
{
    switch (color) 
    {
        case 'r':
            rojo.classList.remove('prenderRojo');
            rojo.classList.add('apagarRojo');
            break;
        case 'v':
            verde.classList.remove('prenderVerde');
            verde.classList.add('apagarVerde');
            break; 
        case 'az':
            azul.classList.remove('prenderAzul');
            azul.classList.add('apagarAzul');
            break; 
        case 'am':
            amarillo.classList.remove('prenderAmarillo');
            amarillo.classList.add('apagarAmarillo');
            break;
        default:
            break;
    }
}

//inserta un color aleatorio a la secuencia
var setearSecuencia = function () 
{
    indiceColor = Math.floor(Math.random() * 4);
    secuenciaSistema.push(colores[indiceColor]);         
}

//incrementa el nivel en uno, acelera la velocidad de prender y apagar
var cambioNivel = function ()
{
    tituloPrin.textContent=tituloPrinTexto;
    secuenciaClick=[];
    nivelNum++;
    nivel.textContent = nivelTitulo + ' ' + nivelNum.toString();
    if((timerPrender-100) > 100)
    {
        timerPrender = timerPrender - 100;
        timerApagar = timerPrender + 250;
    }
    mostrarSecuencia()
}

//toma el evento del jugador, hace las validaciones correspondientes para luego incrementar el nivel, gurdar en el localstorage o mostrar cartel de perdida
var clickSimon = function (color) 
{
    if(turnoJugador)
    {
        var sumaPunto= false;
        secuenciaClick.push(color);
        turnoJugador=false;
        prenderLuces(color);
        setTimeout(()=>
        {
            apagarLuces(color)
            for (let i = 0; i < secuenciaClick.length; i++) 
            {
                if(secuenciaClick[i] == secuenciaSistema[i])
                {
                    sumaPunto=true;
                }
                else 
                {
                    sumaPunto=false;
                }
            }
            if(sumaPunto)
            {
                puntaje++;
                puntajeComponente.textContent = puntaje.toString();
                if(secuenciaClick.length == secuenciaSistema.length)
                {
                    turnoJugador=false;
                    localStorage.setItem('puntaje', puntaje);
                    localStorage.setItem('nivel', nivelNum+1);
                    localStorage.setItem('secuencia',  JSON.stringify(secuenciaSistema));
                    localStorage.setItem('velocidad', timerPrender);
                    localStorage.setItem('fecha', new Date(Date.now()));
                    setTimeout(cambioNivel, 1500);
                }
                if(puntaje>puntajeMax)
                {
                    puntajeMax = puntaje;
                    localStorage.setItem('puntajeMax', puntajeMax);
                    puntajeMaxComponente.textContent=puntajeMax;
                }
            }
            else 
            {
                alert('Fallaste, vuelve a comenzar de cero');
                cargar(true);
            }
            turnoJugador=true;

        }, 500);
    }
}

//metodo para realizar el '3 2 1' al comenzar a jugar
var cuentaRegresiva = function ()
{
    tituloPrin.textContent=tituloPrinTexto + ' ' + tituloPrinContar.toString();
    tituloPrinContar--;
}

//ejecuta los metodos prender y apagar de las luces
var mostrarSecuencia = function ()
{
    botonReiniciarJuego.disabled = true;
    turnoJugador=false;
    setTimeout(()=>
    {
        tituloPrin.textContent=tituloPrinTexto;
        setearSecuencia();
        for (let i = 0; i < secuenciaSistema.length; i++) 
        {
            setTimeout(() => 
            {
                prenderLuces(secuenciaSistema[i]);
                setTimeout(() => 
                {
                    apagarLuces(secuenciaSistema[i]);
                    if(i == secuenciaSistema.length-1)
                    {
                        tituloPrin.textContent='Tu turno' + ' ' + nombreJugador;
                        botonReiniciarJuego.disabled = false;
                        turnoJugador=true;
                    }
                }, timerPrender);
            }, timerApagar * i);
        }
    },1500)
}

//metodo que se ejcuta al presionar jugar, ejecuta los metodos para el '3 2 1' y el metodo que prende y apaga las luces
var comenzarJuego = function ()
{
    turnoJugador=false;
    botonReiniciarJuego.disabled = true;
    botonComenzarJuego.disabled = true;
    if(nivelNum == 0)
    {
        nivelNum++;
        nivel.textContent = nivelTitulo + ' ' + nivelNum.toString();
        nivel.classList.remove('ocultar');
        nivel.classList.add('mostrar');
        comboPuntaje.classList.remove('ocultar');
        comboPuntaje.classList.add('mostrar');
    }
    setTimeout(cuentaRegresiva,1000);
    setTimeout(cuentaRegresiva,2000);
    setTimeout(() => 
    {
        cuentaRegresiva();
        botonReiniciarJuego.disabled = false;
        mostrarSecuencia();
    }, 3000);
}

//reinicia todas las variables y comienza de cero el juego
var reiniciarJuego = function ()
{
    cargar(true);
}

//metodo que chequea que se complete con letras el nombre del jugador
var corregir = function (e)
{ 
    var result = false;
    var dat = nombre.value;
    if(dat.length != 0 && !(dat.length > 2  && soloLetras.test(dat)))
    {
        result = true;
    }
    return result;
}

//metodo que muestra el error debajo del input del formulario
var habilitarSpan = function (idInput)
{
    var span = document.getElementById('input'+idInput);
    span.classList.remove('ocultar');
    span.classList.add('mostrar');
    nombre.classList.remove('bordeSinError');
    nombre.classList.add('bordeError'); 
    botonEnviar.classList.remove('bordeSinErrorBoton');
    botonEnviar.classList.add('bordeErrorBoton');
}

//metodo que llama al corregir par ver si hay error y luego llama el metodo que habilita el error 
var verErrores = function (e)
{ 
    var result = corregir(e.srcElement.id);
    if (result)
    {
        habilitarSpan(e.srcElement.id);
    }
}

//metodo que desaparece el error debajo del input del formulario
var deshabilitarSpan = function ()
{
    var span = document.getElementById('inputnombre');
    span.classList.remove('mostrar');
    span.classList.add('ocultar');
    botonEnviar.classList.remove('bordeErrorBoton');
    botonEnviar.classList.add('bordeSinErrorBoton');
    nombre.classList.remove('bordeError');
    nombre.classList.add('bordeSinError');
}

//metodo que habilita el boton jugar del formulario solo si esta completo y correcto el nommbre del jugador
var habiltiarBoton = function ()
{
    if(nombre.value.length>2)
    {
        botonEnviar.disabled = false;
    }
    else 
    {
        botonEnviar.disabled = true;
    }
}

//metodo que se ejecuta al presionar jugar luego de completar el formulario
var jugar = function()
{
    nombreJugador = nombre.value;
    localStorage.setItem('nombreJugador', nombreJugador);
    contenedorForm.classList.remove('mostrar');
    contenedorForm.classList.add('ocultar');
    contenedorBotones.classList.remove('ocultar');
    contenedorBotones.classList.add('mostrar');
    comenzarJuego();
}

//eventos
window.addEventListener('load', cargar(false));
nombre.addEventListener('focus', deshabilitarSpan);
nombre.addEventListener('blur', verErrores);
nombre.addEventListener('keyup', habiltiarBoton);
botonEnviar.addEventListener('click', jugar);
verde.addEventListener('click', ()=> { clickSimon('v') });
azul.addEventListener('click', ()=> { clickSimon('az') });
amarillo.addEventListener('click',()=> { clickSimon('am') });
rojo.addEventListener('click', ()=> { clickSimon('r') });
botonComenzarJuego.addEventListener('click', ()=> { comenzarJuego() });
botonReiniciarJuego.addEventListener('click', ()=> { reiniciarJuego() });
