var posA= prompt("Ingrese el piso en el que se encuentra el elevador A.");

var posB= prompt("Ingrese el piso en el que se encuentra el elevador B.");

var pisoGama= prompt("Ingrese el piso en el que se encuentra usted.");

var posAA= parseInt(posA);

var posBB= parseInt(posB);

var pisooGama= parseInt(pisoGama);

if (posAA>pisooGama) {
  v1=posAA-pisooGama;
}
else{
  v1=pisooGama-posAA;
}


if (posBB>pisoGama) {
  v2=posBB-pisooGama;
}
else{
  v2=pisooGama-posBB;
}



if (v1==v2) {
  alert("Los elevadores quedan a la misma distancia.");
}
else if (v1>v2) {
  alert("El elevador B está más cerca.");
}
else if (v1<v2) {
  alert("El elevador A está más cerca.");
}
