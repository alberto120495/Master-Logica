/*
Hacer un reloj que en tiempo real vaya mostrando la hora a cada segundo

Solo puedes usar el obejto date para 
conseguir la hora por primera vez, pero no para actualizar la hora

EJEMPLO:
let miReloj = new Reloj();
miReloj.encender()

OUTPUT:
14:20:16

*/

//!Clase
class Reloj {
  constructor() {
    this.fecha = new Date();
    this.horas = this.fecha.getHours();
    this.minutos = this.fecha.getMinutes();
    this.segundos = this.fecha.getSeconds();
  }

  update(segundos) {
    this.segundos += segundos;

    if (this.segundos >= 60) {
      this.minutos++;
      this.segundos = 0;
    }
    if (this.minutos >= 60) {
      this.horas++;
      this.minutos = 0;
    }
    if (this.horas >= 24) {
      this.horas = 0;
    }
  }

  show() {
    this.update(1);
    console.log(`${this.horas}:${this.minutos}:${this.segundos}`);
  }

  encender() {
    setInterval(() => {
      this.show();
    }, 1000);
  }
}

let miReloj = new Reloj();
console.log(miReloj.encender());

//!Funcion
const relojRapido = () => {
  setInterval(() => {
    let date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
  }, 1000);
};

//console.log(relojRapido());
