// Es recomendable nombrar a las clases con UpperCammelCase
class Persona {

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log(this.nombre);
        console.log('Object');
    }

    nombre = '';
    apellido = '';
    edad = '';
    comida = '';

    constructor(nombre, apellido, edad) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad

        Persona._conteo++;
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

console.log('Conteo statico', Persona._conteo);

console.log(Persona.conteo);

Persona.mensaje();

Persona.propiedadExterna = 'Hola mundo';
console.log(Persona);