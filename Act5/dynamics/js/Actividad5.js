//Mensaje del usuario
var respond = prompt('Ingrese el texto');

//Regex
let regex1 = new RegExp(/\<script\>.*\<\/script\>/,'gm');
let regex2 = new RegExp(/.*(equisde.*){5}/,'gm');
let regex3 = new RegExp(/\<script\>.*(equisde.*){5}\<\/script\>/,'gm');
//Buscar si se encuentran coincidencias
var bob = respond.search(regex1);
var wade = respond.search(regex2);
var oso = respond.search(regex3);
//Mensaje dependiendo de las coincidencias que se encontraron.
if (oso != "-1") {
  alert("Oso oso mentirosos, vete lejos antes de que te lance mis calcetines olor a queso");
}
else if (bob != "-1" || wade != "-1") {
  alert("¿Bob?\n¿Wade?");
}