/*
Dado un array de objetos de películas
(Título, director , vista) 
mostrar todas las películas indicando cuál has visto y cuál no 

Ejemplo:
myMovies(peliculas)

OUTPUT:
Ya has visto: "El señor de los anillos"
Te falta por ver: "La liga de la justicia"

*/
const movies = [
  {
    title: "El señor de los anillos",
    directedBy: "Peter Jackson",
    vista: true,
  },
  {
    title: "La liga de la justicia",
    directedBy: "Zack Snyder",
    vista: false,
  },
  {
    title: "Avengers End Game",
    directBy: "Joe Russo",
    vista: true,
  },
  {
    title: "Batman vs superman",
    directBy: "Zack Snyder",
    vista: false,
  },
];

const myMovies = (object) => {
  const vistas = [];
  const noVistas = [];
  for (const key in object) {
    const element = object[key];
    if (element.vista) {
      vistas.push(element.title);
    } else {
      noVistas.push(element.title);
    }
  }

  return `Ya has visto: ${vistas.toString()}\nTe falta por ver: ${noVistas.toString()} `;
};

//console.log(myMovies(movies));

//!Solucion Curso

const misPeliculas = (peliculas) => {
  for (const pelicula of peliculas) {
    let paraMostrar = `"${pelicula.title} de ${pelicula.directedBy}"`;
    if (pelicula.vista) {
      console.log("Ya has visto:", paraMostrar);
    } else {
      console.log("Te falta por ver:", paraMostrar);
    }
  }
};

console.log(misPeliculas(movies));
