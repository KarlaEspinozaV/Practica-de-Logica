let username = prompt("Ingresa tu nombre");
let age = prompt("Ingresa tu edad");
let favoriteMovies = prompt(
	"Ingresa tus 3 peliculas favoritas, cada una separadas por comas",
);

let moviesList = favoriteMovies.split(",");

console.log(`Tu nombre es: ${username}`);
console.log(`Tu edad es: ${age}`);

console.log("Estas son tus películas favoritas");
moviesList.forEach(function (movie) {
	console.log(`La película'${movie.trim()}' es una de mis favoritas`);
});
