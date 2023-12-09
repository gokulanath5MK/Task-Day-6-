class Movie {
    constructor(title, genre, releaseYear) {
        this.title = title;
        this.genre = genre;
        this.releaseYear = releaseYear;
    }

    getTitle() {
        return this.title;
    }

    getGenre() {
        return this.genre;
    }

    getReleaseYear() {
        return this.releaseYear;
    }
}

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getRadius() {
        return this.radius;
    }

    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}


const movie = new Movie("Inception", "Sci-Fi", 2010);
const circle = new Circle(5);

console.log(`${movie.getTitle()} is a ${movie.getGenre()} movie released in ${movie.getReleaseYear()}.`);
console.log(`The area of a circle with radius ${circle.getRadius()} is ${circle.calculateArea().toFixed(2)}.`);
