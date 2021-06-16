let Fangio = document.getElementById('Fangio');
let NikiLauda = document.getElementById('NikiLauda');
let AyrtonSenna = document.getElementById('AyrtonSenna');

let preguntaUno = document.getElementById('uno');
let preguntaDos = document.getElementById('dos');

let Alemania = document.getElementById('Alemania');
let España = document.getElementById('España');
let Francia = document.getElementById('Francia');

let correcto = document.getElementById('correcto');
let incorrecto = document.getElementById('incorrecto');
let correcto2 = document.getElementById('correcto2');
let incorrecto2 = document.getElementById('incorrecto2');

let puntaje = 0;

Fangio.addEventListener("click", function(e){
    e.preventDefault();
    Fangio.style.background = "red";
    incorrecto.style.display = "block";
    setTimeout(function(){
        preguntaUno.style.display = "none";
        preguntaDos.style.display = "block";
    }, 1000);
})

NikiLauda.addEventListener("click", function(e){
    e.preventDefault();
    NikiLauda.style.background = "green";
    correcto.style.display = "block";
    puntaje++;
    setTimeout(function(){
        preguntaUno.style.display = "none";
        preguntaDos.style.display = "block";
    }, 1000)
})

AyrtonSenna.addEventListener("click", function(e){
    e.preventDefault();
    AyrtonSenna.style.background = "red";
    incorrecto.style.display = "block";
    setTimeout(function(){
        preguntaUno.style.display = "none";
        preguntaDos.style.display = "block";
    }, 1000);
})

Alemania.addEventListener("click", function(e){
    e.preventDefault();
    Alemania.style.background = "green";
    correcto2.style.display = "block";
    puntaje++;
    setTimeout(function(){
        document.write('<h1> Tu puntaje es ' + puntaje + '</h1>');
    }, 1000)
})

España.addEventListener("click", function(e){
    e.preventDefault();
    España.style.background = "red";
    incorrecto2.style.display = "block";
    setTimeout(function(){
        document.write('<h1> Tu puntaje es ' + puntaje + '</h1>');
    }, 1000)
})

Francia.addEventListener("click", function(e){
    e.preventDefault();
    Francia.style.background = "red";
    incorrecto2.style.display = "block";
    setTimeout(function(){
        document.write('<h1> Tu puntaje es ' + puntaje + '</h1>');
    }, 1000)
})
