class Calculadora {
    #resultado;

    constructor() {
        this.#resultado = 0;
    }

    get resultado() {
        return this.#resultado;
    }

    set resultado(numero) {
        const numConvertido = Number(numero);

        if (isNaN(numConvertido) || typeof numConvertido !== 'number') {
            throw new TypeError("O argumento deve ser um número válido");
        }
        this.#resultado = numConvertido;
    }


    soma(valor) {
        this.#validarEntrada(valor);
        this.#resultado += Number(valor);
    }


    subtracao(valor) {
        this.#validarEntrada(valor);
        this.#resultado -= Number(valor);
    }


    multiplicacao(valor) {
        this.#validarEntrada(valor);
        this.#resultado *= Number(valor);
    }


    divisao(valor) {
        this.#validarEntrada(valor);
        const numero = Number(valor);

        if (numero === 0) {
            throw new Error("divisão ilegal por zero");
        }

        this.#resultado /= numero;
    }


    inversao() {
        this.#resultado = -this.#resultado;
    }


    #validarEntrada(valor) {
        if (arguments.length !== 1) {
            throw new Error("A função deve receber apenas um argumento");
        }

        const numConvertido = Number(valor);
        if (isNaN(numConvertido) || typeof numConvertido !== 'number') {
            throw new TypeError("O argumento deve ser um número válido");
        }
    }
}

module.exports = Calculadora;
