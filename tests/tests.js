var expect = chai.expect;

describe("Medida", function() {
    describe("funcion mostrar", function() {
        it("Se debe introducir una medida", function() {
            var medida = new Medida();
            expect(medida.mostrar()).to.equal("Se ha introducido una medida");
        });
    });
});

describe("Temperatura", function() {
    describe("constructor", function() {
        it("Debe tener un valor por defecto", function() {
            var temperatura = new Temperatura();
            expect(temperatura.valor).to.equal("0");
        });
        
        it("Debe pasarle un valor distinto de 0", function() {
            var temperatura = new Temperatura();
            expect(temperatura.valor).not.equal("3.25");
        });
        it("No debe ser otro tipo de medida", function() {
            var temperatura = new Temperatura();
            expect(temperatura.tipo).not.equal("G");
        });
        it("El resultado debe ser un numero", function() {
            var temperatura = new Temperatura();
            expect(temperatura.result).not.to.be.null;
        });
    });
});

describe("Calcular", function() {
    describe("Funcion calcular", function() {
        it("El resultado puede ser una medida", function() {
            var calcular = new calculate();
            expect(calcular.original).a('string');
        });
    });
});

// http://issuu.com/samuelsantos52/docs/backbone.js_testing