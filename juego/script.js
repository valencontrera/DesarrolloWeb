const tituloPrin = document.getElementById('titulo');
var tituloPrinTexto = "Simón dice"
var tituloPrinContar = 3
var nivelTitulo = "Nivel"
var nivelNum = 0
const nivel = document.getElementById('nivel');
const comboPuntaje = document.getElementById('comboPuntos');
const puntajeComponente = document.getElementById('puntaje');
const puntajeMaxComponente = document.getElementById('puntajeMax');
var puntajeMax = 0;
var puntaje = 0;
const botonComenzarJuego = document.getElementById('comenzarJuego');
const botonReiniciarJuego = document.getElementById('reiniciarJuego');
var colores=['r','am','az','v']
var secuenciaClick=[]
var secuenciaSistema=[]
const verde = document.getElementById('v');
const azul = document.getElementById('az');
const amarillo = document.getElementById('am');
const rojo = document.getElementById('r');
var timerPrender = 2000;
var timerApagar = 2500;
var turnoJugador=false;
var guardadoViejo = false;

var load = function (reiniciar) 
{
    secuenciaClick=[]
    secuenciaSistema=[]
    puntajeMax = localStorage.getItem('puntajeMax') != null && localStorage.getItem('puntajeMax') != undefined ? parseInt(localStorage.getItem('puntajeMax')) : 0;    
    puntajeMaxComponente.textContent=puntajeMax;
    tituloPrin.textContent=tituloPrinTexto
    botonReiniciarJuego.disabled = true;
    botonComenzarJuego.disabled = false;
    tituloPrinContar = 3
    timerPrender = 2000;
    timerApagar = 2500;

    if(reiniciar)
    {
        nivelNum = 0
        comboPuntaje.style.display='none';
        nivel.style.display='none';
        localStorage.removeItem('puntaje');
        localStorage.removeItem('nivel');
        puntaje = 0;
        puntajeComponente.textContent = puntaje.toString();
    }
    else 
    {
        if((localStorage.getItem('nivel') != null && localStorage.getItem('nivel') != undefined && localStorage.getItem('nivel')>1) && (localStorage.getItem('puntaje') != null && localStorage.getItem('puntaje') != undefined && localStorage.getItem('puntaje')>0)  )
        {   
            guardadoViejo=true;
            nivelNum = parseInt(localStorage.getItem('nivel'));
            nivel.textContent = nivelTitulo + ' ' + nivelNum.toString();
            puntaje = localStorage.getItem('puntaje') != null && localStorage.getItem('puntaje') != undefined ? parseInt(localStorage.getItem('puntaje')) : 0;
            puntajeComponente.textContent = puntaje.toString();
            botonReiniciarJuego.disabled = false;
        }
        else 
        {
            nivelNum = 0
            comboPuntaje.style.display='none';
            nivel.style.display='none';
            localStorage.removeItem('puntaje');
            puntaje = 0;
            puntajeComponente.textContent = puntaje.toString();

        }

    }
    
}

var prenderLuces = function (color) 
{
    switch (color) {
        case 'r':
            rojo.style.backgroundColor='red';
            rojo.style.boxShadow='inset 2px 4px 12px 17px rgb(255 255 255 / 54%)';
            break;
            
        case 'v':
            verde.style.backgroundColor='#08b308';
            verde.style.boxShadow='inset -4px 5px 12px 17px rgb(255 255 255 / 54%)';
            break; 
            
        case 'az':
            azul.style.backgroundColor='blue';
            azul.style.boxShadow='inset -2px -4px 12px 17px rgb(255 255 255 / 54%)';
            break; 
    
        case 'am':
            amarillo.style.backgroundColor='yellow';
            amarillo.style.boxShadow='inset 3px -2px 12px 17px rgb(255 255 255 / 54%)';
            break;
    
        default:
            break;
    }
}

var apagarLuces = function (color) 
{
    switch (color) {
        case 'r':
            rojo.style.backgroundColor='#7c0202';
            rojo.style.boxShadow='none';
            break;
            
        case 'v':
            verde.style.backgroundColor='#025802';
            verde.style.boxShadow='none';
            break; 
            
        case 'az':
            azul.style.backgroundColor='#030381';
            azul.style.boxShadow='none';
            break; 
    
        case 'am':
            amarillo.style.backgroundColor='#858503';
            amarillo.style.boxShadow='none';
            break;
    
        default:
            break;
    }
}

var setearSecuencia = function () 
{
    if(guardadoViejo)
    {
        for (let i = 0; i < nivelNum; i++) {
            indiceColor = Math.floor(Math.random() * 4);
            secuenciaSistema.push(colores[indiceColor]);        
        }
        guardadoViejo=false;
    }
    else 
    {
        indiceColor = Math.floor(Math.random() * 4);
        secuenciaSistema.push(colores[indiceColor]);        
    }
       
    
}

var cambioNivel = function (){

    tituloPrin.textContent=tituloPrinTexto;
    secuenciaClick=[]
    nivelNum++;
    nivel.textContent = nivelTitulo + ' ' + nivelNum.toString();

    if((timerPrender-100) > 100)
    {
        timerPrender = timerPrender - 100;
        timerApagar = timerPrender + 500
    }
    mostrarSecuencia()
}

var clickSimon = function (color) 
{
    
    if(turnoJugador)
    {
        var sumaPunto= false;
        secuenciaClick.push(color);
        turnoJugador=false

        prenderLuces(color);
        setTimeout(()=>
        {
            apagarLuces(color)
                
            for (let i = 0; i < secuenciaClick.length; i++) {
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
                    turnoJugador=false
                    localStorage.setItem('puntaje', puntaje)
                    localStorage.setItem('nivel', nivelNum+1)
                    setTimeout(cambioNivel, 1500);
                    
                }

                if(puntaje>puntajeMax)
                {
                    puntajeMax = puntaje
                    localStorage.setItem('puntajeMax', puntajeMax)
                    puntajeMaxComponente.textContent=puntajeMax;
                }
            }
            else 
            {
                alert('Fallaste, vuelve a comenzar de 0')
                load(true)
            }
            turnoJugador=true;

        }, 500);
    }
}

var cuentaRegresiva = function ()
{
    tituloPrin.textContent=tituloPrinTexto + ' ' + tituloPrinContar.toString();
    tituloPrinContar--;
}

var mostrarSecuencia = function (){

    botonReiniciarJuego.disabled = true;
    turnoJugador=false;

    setTimeout(()=>{
        tituloPrin.textContent=tituloPrinTexto;
        setearSecuencia(nivelNum);
        for (let i = 0; i < secuenciaSistema.length; i++) {
            setTimeout(() => {
                prenderLuces(secuenciaSistema[i]);
                setTimeout(() => {
                    apagarLuces(secuenciaSistema[i]);
                    if(i == secuenciaSistema.length-1)
                    {
                        tituloPrin.textContent='Tu turno';
                        botonReiniciarJuego.disabled = false;
                        turnoJugador=true;
                    }
                }, timerPrender);
            }, timerApagar * i);
        }
    },1500)

}


var comenzarJuego = function ()
{
    turnoJugador=false;
    botonReiniciarJuego.disabled = false;
    botonComenzarJuego.disabled = true;

    if(nivelNum == 0)
    {
        nivelNum++;
        nivel.textContent = nivelTitulo + ' ' + nivelNum.toString();
        nivel.style.display='block';
        comboPuntaje.style.display='block';
    }
    
    setTimeout(cuentaRegresiva,1500)
    setTimeout(cuentaRegresiva,3000)
    setTimeout(() => {
        cuentaRegresiva()
        mostrarSecuencia()
    }, 4500);

    
}

var reiniciarJuego = function ()
{
    load(true)
}


window.addEventListener('load', load(false));