let body = document.getElementById("body");

let boton = document.getElementById("mouseover");

let doble = document.getElementById("double");

let soltar = document.getElementById("soltar");

let leave = document.getElementById("leave");

let key = document.getElementById("key");

let move = document.getElementById("move");


let puntaje=document.getElementById("div");

let clicks=0;

boton.addEventListener("mouseover", (event)=>{
  body.classList.remove("Blanco");
  body.classList.add("Colorcitos");
})

boton.addEventListener("mouseout", (event)=>{
  body.classList.remove("Colorcitos");
  body.classList.add("Blanco");
})

doble.addEventListener("dblclick", (event)=>{
  clicks++;
  if (clicks%2) {
    body.classList.add("Colorcitos");
  }
  else {
    body.classList.remove("Colorcitos");
  }
})

soltar.addEventListener("mouseup", (evant)=>{
  body.classList.remove("Colorcitos");
})

soltar.addEventListener("mousedown", (event)=>{
  body.classList.add("Colorcitos");
})

leave.addEventListener("mouseleave", (event)=>{
  alert("Regresaaaa. No te vayas!!!");
})

key.addEventListener("keypress", ()=>{
  alert("Presionaste una tecla.");
})

move.addEventListener('mousemove', function() {
  move.classList.add("move");
})
let focus = document.querySelector("#focus");
focus.addEventListener("focus",()=>{
  focus.removeAttribute("id")
  focus.setAttribute("id","focus2");
})
let keydown =document.querySelector(".keydown");
keydown.addEventListener("keydown",()=>{
  keyup.removeAttribute("class");
  keydown.classList.toggle("keydown2");
})
let keyup = document.querySelector(".keyup");
keyup.addEventListener("keyup",()=>{
  keyup.removeAttribute("class");
  keyup.classList.add("keyup2");
})
let change = document.getElementById("change");
  change.addEventListener("change",()=>{
  console.log("change");
  alert("Tu mamá no te enseño a no modificar lo que no es tuyo :(");
})