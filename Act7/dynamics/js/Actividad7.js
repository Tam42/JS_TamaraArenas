//  Respuesta del usuario
var respuesta= prompt ("Teclee un número mayor a 0.");
respond= parseInt(respuesta);

//Valida que el número ingresado sea mayor a 0
if(respond>0){
    //Crea tabla
let body = document.getElementsByTagName("body");
let main = document.createElement("table");
main.classList.add("table");
body[0].appendChild(main);

//Funcion para crear elemtos de la tabla
function container(){
  //Crea tr
  for (let i=0; i<respond; i++){
    const tr = document.createElement("tr");
    let trnum = i;
    main.appendChild(tr);
    //Crea td
    for(let m=0; m<respond; m++){
     const td = document.createElement("td");
     let tdnum = m;
     //Validaciones para colores
     if(trnum%2 == 0){
      if(tdnum%2==0){
        td.classList.add("square1");
      }
      else{
        td.classList.add("square2");
      } 
     }
     else{
       if(tdnum%2!=0){
        td.classList.add("square1");
      }
      else{
        td.classList.add("square2");
      } 
     }
     tr.appendChild(td);
    }
  }
}

container();
}
else{
  alert("Ups, número incorrecto.")
}