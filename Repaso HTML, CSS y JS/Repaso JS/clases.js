class Coche {
  constructor(modelo, velocidad, antiguedad) {
    this.modelo = modelo;
    this.velocidad = velocidad;
    this.antiguedad = antiguedad;
  }

  acelerar() {
    this.velocidad++;
  }
  frenar() {
    this.velocidad = 0;
  }
}

class Autobus extends Coche {
  constructor(modelo, velocidad, antiguedad, altura) {
    super(modelo, velocidad, antiguedad);
    this.altura = altura;
  }
  mostrarAltura() {
    console.log(this.altura);
  }
}

let coche1 = new Coche("vmw", 200, 2021);
coche1.acelerar();
coche1.acelerar();
coche1.acelerar();

console.log(coche1);
coche1.frenar();
console.log(coche1);
coche1.acelerar();
console.log(coche1);

let autobus1 = new Autobus("Rapidos", 500, 2020, 10);
console.log(autobus1);
autobus1.mostrarAltura();
