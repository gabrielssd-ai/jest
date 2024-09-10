const Calculadora = require('./Calculadora');

describe("Calculadora", () => {

  it("Criar nova calculadora", () => {
    const calculadora = new Calculadora();
    expect(calculadora).toBeDefined();
    expect(calculadora.resultado).toBeDefined();
    expect(typeof calculadora.resultado).toBe("number");
    expect(calculadora.resultado).toBe(0);
  });

  it("Obtém resultado", () => {
    const calculadora = new Calculadora();
    expect(calculadora.resultado).toBeDefined();
    expect(typeof calculadora.resultado).toBe("number");
  });

  it("Atribui um novo valor à calculadora", () => {
    const calculadora = new Calculadora();
    expect(() => calculadora.resultado = "Texto").toThrow(TypeError);
    expect(() => calculadora.resultado = "Texto")
      .toThrow("O argumento deve ser um número válido");
    expect(calculadora.resultado).toBe(0);
    expect(() => calculadora.resultado = "5").not.toThrow(TypeError);
    expect(calculadora.resultado).toBe(5);
  });

  it("Soma um valor ao resultado", () => {
    const calculadora = new Calculadora();
    calculadora.resultado = 10;
    calculadora.soma(5);
    expect(calculadora.resultado).toBe(15);
    calculadora.soma("10"); 
    expect(calculadora.resultado).toBe(25);
  });

  it("Subtrai um valor do resultado", () => {
    const calculadora = new Calculadora();
    calculadora.resultado = 20;
    calculadora.subtracao(5);
    expect(calculadora.resultado).toBe(15);
    calculadora.subtracao("10");  
    expect(calculadora.resultado).toBe(5);
  });

  it("Multiplica o valor do resultado", () => {
    const calculadora = new Calculadora();
    calculadora.resultado = 5;
    calculadora.multiplicacao(3);
    expect(calculadora.resultado).toBe(15);
    calculadora.multiplicacao("2");  
    expect(calculadora.resultado).toBe(30);
  });

  it("Divide o valor do resultado", () => {
    const calculadora = new Calculadora();
    calculadora.resultado = 20;
    calculadora.divisao(5);
    expect(calculadora.resultado).toBe(4);
    calculadora.divisao("2");  
    expect(calculadora.resultado).toBe(2);
    expect(() => calculadora.divisao(0)).toThrow("divisão ilegal por zero");
  });

  it("Inverte o valor do resultado", () => {
    const calculadora = new Calculadora();
    calculadora.resultado = 10;
    calculadora.inversao();
    expect(calculadora.resultado).toBe(-10);
    calculadora.inversao();  
    expect(calculadora.resultado).toBe(10);
  });
});
