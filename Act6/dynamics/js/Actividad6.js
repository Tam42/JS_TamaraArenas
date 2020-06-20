//Crear el contenedor y su clase
let body = document.getElementsByTagName("body");
let main = document.createElement("div");
main.classList.add("div");
body[0].appendChild(main);
//Crear elemento h1 y su contenido
let h1 = document.createElement("h1");
h1.innerHTML = "<a href='#'>Soy el más grande...</a>";
main.appendChild(h1);
//Crear elemento h2 y su contenido
let h2 = document.createElement("h2");
h2.innerText = "Curso Web 2020";
main.appendChild(h2);
//Crear elemento h3 y su contenido
let h3 = document.createElement("h3");
h3.innerHTML = "<a href='#'>Mediano</a>";
main.appendChild(h3);
//Crear elemento h4, su clase y su contenido
let h4 = document.createElement("h4");
h4.innerText = "Jelou";
h4.classList.add("h4");
main.appendChild(h4);
//Crear segundo elemento h4 y su contenido
let h5 = document.createElement("h4");
h5.innerText = "Estoy medio chiquito :(";
main.appendChild(h5);