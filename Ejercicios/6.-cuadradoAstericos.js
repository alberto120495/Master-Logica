/*
Dibujar un cuadrado hueco con asteriscos.
*/

const drawHorizontal = (sides) => {
  let horizontal = "";
  for (let index = 0; index < sides; index++) {
    horizontal += "*";
  }
  return horizontal;
};

const drawVertical = (sides) => {
  let vertical = "";
  for (let index = 0; index < sides - 2; index++) {
    vertical += "*";
    for (let index = 0; index < sides - 2; index++) {
      vertical += " ";
    }
    vertical += "*\n";
  }
  return vertical;
};

const square = (sides) => {
  let completeSquare = "";
  completeSquare += drawHorizontal(sides) + "\n";
  completeSquare += drawVertical(sides);
  completeSquare += drawHorizontal(sides);
  return completeSquare;
};

console.log(square(4));

/*
OUTPUT:
  ****
  *  *
  *  *
  ****  
*/
