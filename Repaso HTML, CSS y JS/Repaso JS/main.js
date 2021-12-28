const divDatos = document.getElementById("datos");

const MuestraNombre = (nombre, altura) => {
  divDatos.innerHTML = `
<h1>Hola soy ${nombre}</h1>
<h3>Mido ${altura} cm</h3>`;

  if (altura > 100) {
    divDatos.innerHTML += `<p>Eres alto</p>`;
  } else {
    divDatos.innerHTML += `<p>Eres bajito</p>`;
  }
};

MuestraNombre("Pedro", 172);

/* for (let index = 0; index < 20; index++) {
  divDatos.innerHTML += `<h5> Numero: ${index}</h5>`;
} */

let coche = {
  model: "Ferrari",
  maxSpeed: 500,
  old: 2020,
  showData() {
    console.log(this.model, this.maxSpeed, this.old);
  },
};

console.log(coche.showData());

//Promsises
let saludar = new Promise((resolve, reject) => {
  setTimeout(() => {
    let saludo = "Hola mundo";
    saludo = false;
    if (saludo) {
      resolve(saludo);
    } else {
      reject("No hay saludo disponible");
    }
  }, 2000);
});

saludar
  .then((result) => {
    alert(result);
  })
  .catch((err) => {
    alert(err);
  });
