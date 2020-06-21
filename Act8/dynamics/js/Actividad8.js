var fdate = new Date();
var inicioT=fdate.getTime();
document.cookie=inicioT;
let body = document.getElementsByTagName("body");
let container = document.createElement("div");
let item1 = document.createElement("div");
let item2 = document.createElement("div");
let item3 = document.createElement("div");
let item11 = document.createElement("div");
let item12 = document.createElement("div");
let item13 = document.createElement("div");
let item14 = document.createElement("div");
let item15 = document.createElement("div");
let w = document.createElement("div");
container.classList.add("grid");
item1.setAttribute("id","item1");
item2.setAttribute("id","item2");
item3.setAttribute("id","item3");
item15.setAttribute("id","aro5");
item14.setAttribute("id","aro4");
item13.setAttribute("id","aro3");
item12.setAttribute("id","aro2");
item11.setAttribute("id","aro1");
w.setAttribute("id","w");
body[0].appendChild(container);
body[0].appendChild(w);
container.appendChild(item1);
container.appendChild(item2);
container.appendChild(item3);
item1.appendChild(item11);
item1.appendChild(item12);
item1.appendChild(item13);
item1.appendChild(item14);
item1.appendChild(item15);
let count = item3.childNodes;
let count2 = item2.childNodes;
console.log(count);
console.log(count2);
let interval = setInterval(() => {
    if(count.length<5 && count2.length<5){
        
        count = item3.childNodes;
        count2 = item2.childNodes;
        let torre1 = prompt("¿De qué torre quiere mover la pieza?");
        let torre2 = prompt("¿A qué torre quiere moverla?");
        let regex = /^[1-3]$/gm;
        let countTorre1 = torre1.match(regex);
        let countTorre2 = torre2.match(regex);
        if(countTorre1>0 && countTorre2>0){
            torre1 = parseInt(torre1)-1;
            torre2 = parseInt(torre2)-1;
            let torrei=container.childNodes[torre1];
            let torref=container.childNodes[torre2];
            let elem = torrei.lastChild;
            let before = torref.lastChild;
            let childt = torref.childNodes;
            if(childt.length>0){
                let widthBefore = elem.clientWidth;
                let widthAfter = before.clientWidth;
                if(widthAfter<widthBefore){
                    alert("Movimiento no permitido. Intentaste mover una pieza sobre una de mayor tamaño!")
                }
                else{
                    torrei.removeChild(elem);
                    torref.appendChild(elem);
                }               
            }
            else{
                torrei.removeChild(elem);
                torref.appendChild(elem);
            }
        }
        else{
            alert("Ingrese dos números entre 1 y 3 por favor")
        }    
    }
    else{
      let cookie=document.cookie;
      cookie=parseInt(cookie);
      let c =new Date();
      let presente=c.getTime();
      let Tiempo=(presente-cookie)/1000;
      console.log(Tiempo);
      Tiempo=Tiempo.toFixed();
        alert("Ganaste");
        alert("Tardaste: "+ Tiempo+ " segundos");
        clearInterval(interval);
    }
}, 1000);    