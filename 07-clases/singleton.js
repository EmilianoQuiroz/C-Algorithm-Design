// Un singleton es una instancia unica de mi clase

class Singleton {

    static instancia; //Por defecto es undefined
    nombre = '';

    constructor(nombre = '') {

        const a = undefined;
        console.log(a);
        console.log(!a);
        console.log(!!a);

        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;
    }
}

const instancia1 = new Singleton('Santiago');

console.log(instancia1);