console.log('Hello World');

const bd = [
    { 
        url: "imagenes/prof1.PNG",
        nombre: "Eva Aranda",
        cargo: "Profesora"
    },
    {
        url: "imagenes/prof2.PNG",
        nombre: "Carlos Arrebola",
        cargo: "Profesor"
    },
    {
        url: "imagenes/prof3.PNG",
        nombre: "Carles Cardelo",
        cargo: "Profesor"
    },
    {
        url: "imagenes/prof4.PNG",
        nombre: "Juan Domingo",
        cargo: "Profesor"
    },
    {
        url: "imagenes/prof5.PNG",
        nombre: "Fran Mendez",
        cargo: "Profesor"
    },
    {
        url: "imagenes/prof6.PNG",
        nombre: "Juan Montero",
        cargo: "Profesor"
    },
    {
        url: "imagenes/prof7.PNG",
        nombre: "Albert Arrebola",
        cargo: "Profesor"
    },
    {
        url: "imagenes/prof8.PNG",
        nombre: "Oscar García",
        cargo: "Profesor"
    },
    {
        url: "imagenes/prof9.PNG",
        nombre: "Anna Rovira",
        cargo: "Profesor"
    },
    {
        url: "imagenes/prof10.PNG",
        nombre: "Patricia Salinas",
        cargo: "Profesor"
    },
    {
        url: "imagenes/prof11.PNG",
        nombre: "Juan Luis",
        cargo: "Profesor"
    },
    {
        url: "imagenes/prof12.PNG",
        nombre: "Raul Sánchez",
        cargo: "Profesor"
    },
    {
        url: "imagenes/prof13.PNG",
        nombre: "Francisca Triviño",
        cargo: "Profesor"
    },
    {
        url: "imagenes/secre1.PNG",
        nombre: "Rosa",
        cargo: "Secretaria"
    },
    {
        url: "imagenes/secre2.PNG",
        nombre: "Jesús Tàpies",
        cargo: "Direccion Tecnica"
    }
];
console.log(bd);

const container = document.createElement("div");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.justifyContent = "center";
container.style.margin = "0 auto";

for (let i = 0; i < bd.length; i++) {
    const profesor = bd[i];
    console.log(profesor);

    const card = document.createElement("div");
    card.classList.add("card");
    card.style.margin = "10px"; // Espaciado entre tarjetas
    card.style.textAlign = "center"; // Centrar contenido de la tarjeta
    card.style.border = "1px solid #ccc"; // Borde añadido para que quede mejor
    card.style.borderRadius = "8px"; // Bordes redondeados
    card.style.padding = "10px"; // Espaciado interno
    card.style.width = "150px"; // Ancho fijo para las tarjetas

    card.innerHTML = `
        <img src="${profesor.url}" alt="${profesor.nombre}" style="width: 100%; border-radius: 8px;">
        <h2 style="font-size: 16px; margin: 10px 0;">${profesor.nombre}</h2>
        <p style="font-size: 14px; color: #555;">${profesor.cargo}</p>
    `;

    container.appendChild(card);
}

// Agregar el contenedor al DOM
document.body.appendChild(container);