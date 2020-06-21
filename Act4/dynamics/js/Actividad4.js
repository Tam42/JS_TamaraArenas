var number=prompt("Ingresa el número que deseas dividir.");
var c=0;
var array=[];

for (i=1; i<=number; i++) {
    if (number % i == 0) {
      c++;
      array.push(i);
    }
 }
 
  if (c>2 || a==1) {
     console.log("Entrada: "+number);
     console.log("Salida: "+array);
   }
    else {
     console.log("Entrada: "+number);
     console.log("Salida: "+array);
    }