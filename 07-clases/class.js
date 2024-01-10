// Es recomendable nombrar a las clases con UpperCammelCase
class Persona {
    nombre = ''
    apellido = ''
    edad = ''
    comida = ''

    constructor(nombre, apellido, edad) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }

    set setComidaFavorita(comida) {
        this.comida = comida;
    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi apellido es ${this.apellido}`)
    }
}

const pedro = new Persona('Pedro', 'Doe', 35);

const john = new Persona('John', 'Doe', 25);
console.log(john);

pedro.quienSoy();

pedro.setComidaFavorita = 'Manzana';
console.log(pedro);

console.log(pedro.getComidaFavorita);