function movimiento() {
  /* Checa su no se ha mordido */
  if (Snake[0]<90 && Snake[0]>10)
  if (cells[Snake[0] + direction].classList.contains('snake' + image)) {
    let cookie=document.cookie;
    cookie=parseInt(cookie);
    let c =new Date();
    let presente=c.getTime();
    let Tiempo=(presente-cookie)/1000;
    Tiempo=Tiempo.toFixed();
    alert("Te mordiste, perdiste porque te envenenaste");
    alert("Sobreviviste "+Tiempo+" segundos");
    return clearInterval(intervalo);
  }
  /* El último elemento es la colita */
  let colita = Snake.pop();
  cells[colita].classList.remove('snake' + image);
  Snake.unshift(Snake[0] + direction);

  //Efecto PacMan(faltan detalles)
  serpiente = Snake[0] + "";
  if (direction == 1) {
    if (serpiente.match(/0$/gm) != null) {
      cells[colita].classList.remove('snake' + image);
      Snake[0] -= 10;
    }
  }
  if (direction == -1) {
    if (serpiente.match(/9$/gm) != null) {
      cells[colita].classList.remove('snake' + image);
      Snake[0] += 10
    }
  }
  if (direction == -lado) {
    if (serpiente.match(/^-\d$/gm) != null) {
      cells[colita].classList.remove('snake' + image);
      Snake[0] += 100;
    }
  }
  if (direction == lado) {
    if (serpiente.match(/^10\d$/gm) != null) {
      cells[colita].classList.remove('snake' + image);
      Snake[0] -= 100;
    }
  }
  /* Generador de frutis cuando snake come */
  if (cells[Snake[0]].classList.contains('frutis')) {
    cells[Snake[0]].classList.remove('frutis');
    cells[colita].classList.add('snake' + image);
    Snake.push(colita);
    frutirandom();
    puntaje += 1;
    printPunt.textContent = puntaje;
    clearInterval(intervalo);
    intervalo = setInterval(movimiento, 1000);
  }
  cells[Snake[0]].classList.add('snake' + image);
}
/* Revisar si se comió la frutilupi */
function frutirandom() {
  do {
    frutilupi = Math.floor(Math.random() * cells.length);
  }
  while (cells[frutilupi].classList.contains('snake' + image))
  cells[frutilupi].classList.add('frutis');
}
/* Teclas personalizadas < > ^*/
function keys(dir) {
  if (dir.keyCode === 39) {
    direction = 1; /* derecha */
  }
  else if (dir.keyCode === 38) {
    direction = -lado; /* arriba */
  }
  else if (dir.keyCode === 37) {
    direction = -1; /* izq */
  }
  else if (dir.keyCode === 40) {
    direction = +lado; /* abajo */
  }
}
/* Jugar de nuez */
function Jugar() {
  getTexture();
  Snake.forEach(cell => cells[cell].classList.remove('snake'+image));
  document.getElementById("choose-images").style.display = "none";
  cells[frutilupi].classList.remove('frutis');
  clearInterval(intervalo);
  puntaje = 0;
  frutirandom();
  printPunt.textContent = puntaje;
  direction = 1;
  Snake = [2, 1, 0];
  Snake.forEach(cell => cells[cell].classList.add('snake'+image));
  intervalo = setInterval(movimiento, 1000);
}

function getTexture() {
    let img = document.querySelector("input[name='img']:checked");
    image = img.value;
}
let lado = 10;
/* Obtenemos el body */
let body = document.getElementsByTagName("body");
/* Contenedor plastico */
let cubierta = document.createElement("div");
cubierta.classList.add("cubierta");
body[0].appendChild(cubierta);
/* Contenedor pantalla negra */
let consola = document.createElement("div");
consola.classList.add("consola");
cubierta.appendChild(consola);
/* Creamos puntaje */
let punt = document.createElement("span");
punt.setAttribute("id", "puntaje");
consola.appendChild(punt);
/* Creamos contenedor mayor */
let container = document.createElement("div");
container.classList.add("grid");
consola.appendChild(container);
let divs = document.querySelectorAll(".grid div");
let div = [];
for (var i = 0; i < lado * lado; i++) {
  div[i] = document.createElement("div");
  //Meter divs en container
  container.appendChild(div[i]);
}
/* Creamos botón jugar */
let botonJugar = document.createElement("button");
botonJugar.classList.add("play");
botonJugar.textContent = "S T A R T";
consola.appendChild(botonJugar);

let image;
let info = document.querySelector('#info');
let cells = document.querySelectorAll('.grid div');
let printPunt = document.querySelector('#puntaje');
let iniciarJuego = document.querySelector('.play');
let frutilupi = 0;
let Snake = [2, 1, 0];
let direction = 1;
let puntaje = 0;
let intervalo = 0;
document.addEventListener('keyup', keys);
iniciarJuego.addEventListener('click', Jugar);
//Play
if (iniciarJuego) {
  var fdate = new Date();
  var inicioT=fdate.getTime();
  document.cookie=inicioT;
}
/* Crear contenedor de botones */
let botoness = document.createElement("div");
botoness.classList.add("botoness");
cubierta.appendChild(botoness);
/* Crear contenedor de flechitas */
let flechitas = document.createElement("div");
flechitas.classList.add("flechitas");
botoness.appendChild(flechitas);
/* Contenedor arriba */
let flechaUp = document.createElement("div");
flechaUp.classList.add("flechaUp");
flechitas.appendChild(flechaUp);
/* Contenedor derecha */
let flechaRight = document.createElement("div");
flechaRight.classList.add("flechaRight");
flechitas.appendChild(flechaRight);
/* Contenedor derecha */
let flechaCenter = document.createElement("div");
flechaCenter.classList.add("flechaCenter");
flechitas.appendChild(flechaCenter);
/* Contenedor izquierda */
let flechaLeft = document.createElement("div");
flechaLeft.classList.add("flechaLeft");
flechitas.appendChild(flechaLeft);
/* Contenedor abajo */
let flechaDown = document.createElement("div");
flechaDown.classList.add("flechaDown");
flechitas.appendChild(flechaDown);
//Botones 
let boton2 = document.createElement("button");
boton2.classList.add("controlFlecha","Izquierda");
flechaLeft.appendChild(boton2);
boton2.onclick = function () {
  let btn = document.getElementById("Izquierda");
  direction = -1;
};
let boton3 = document.createElement("button");
boton3.classList.add("controlFlecha","Abajo");
flechaDown.appendChild(boton3);
boton3.onclick = function () {
  let btn = document.getElementById("Abajo");
  direction = lado;
};

let boton4 = document.createElement("button");
boton4.classList.add("centrar","controlFlecha");
flechaUp.appendChild(boton4);
boton4.onclick = function () {
  let btn = document.getElementById("Arriba");
  direction = -lado;
};

let boton = document.createElement("button");
boton.classList.add("controlFlecha","Derecha");
flechaRight.appendChild(boton);
boton.onclick = function () {
  let btn = document.getElementById("Derecha");
  direction = 1;
};