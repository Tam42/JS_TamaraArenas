let body = document.getElementsByTagName("body");
let main = document.createElement("div");
main.classList.add("div");
body[0].appendChild(main);
let h1 = document.createElement("h1");
h1.innerHTML = "<a href='#'>Soy el más grande...</a>";
main.appendChild(h1);
let h2 = document.createElement("h2");
h2.innerText = "Curso Web 2020";
main.appendChild(h2);
let h3 = document.createElement("h3");
h3.innerHTML = "<a href='#'>Mediano</a>";
main.appendChild(h3);
let h4 = document.createElement("h4");
h4.innerText = "Jelou";
h4.classList.add("h4");
main.appendChild(h4);
let h5 = document.createElement("h4");
h5.innerText = "Estoy medio chiquito :(";
main.appendChild(h5);