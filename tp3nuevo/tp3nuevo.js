// Colapaolo Franco Daniel
// Comisión 5
// https://youtu.be/qDMtN0GzpQs

let img;
let x, y, w, h;
let colorActual = 0;
let contadorColor = 0, tiempoEjecutado = 0;
let agrandar = true;

function preload() {
  img = loadImage("data/tp3imagen.png");
}

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(255);         
  image(img, 0, 0, 400, 400);  
  noStroke();

  if (agrandar === false && millis() - tiempoEjecutado > 1000) {
    agrandar = true;
  }

  // Llamamos a las funciones para las columnas
  columnas1(405, 58, 21, 32, 64, 35);  
  columnas1(425, 24, 21, 32, 64, 35);
  columnas1(510, 58, 18, 32, 64, 28);
  columnas1(525, 24, 18, 32, 64, 28);
  columnas1(593, 58, 10, 32, 64, 20);
  columnas1(602, 24, 10, 32, 64, 20);
  columnas1(650, 58, 5, 32, 64, 10);
  columnas1(655, 24, 5, 32, 64, 10);

  // Columnas del centro
  columnasChicas(681, 24, 2, 30, 64);
  columnasChicas(679, 58, 2, 30, 64);
  columnasChicas(686, 24, 2, 30, 64);
  columnasChicas(684, 58, 2, 30, 64);

  // Las que siguen
  columnasChicas(695, 24, 4, 30, 64);
  columnasChicas(691, 58, 4, 30, 64);
  columnasChicas(710, 24, 8, 30, 64);
  columnasChicas(702, 58, 8, 30, 64); 

  // Ultimas columnas
  columnas1(720, 58, 18, 32, 64, 28);
  columnas1(732, 24, 18, 32, 64, 28);
}

function mousePressed() {
  contadorColor++;  // cambia de color por click
  if (contadorColor == 1) {
    colorActual = color(40, 40, 40);
  } else if (contadorColor == 2) {
    colorActual = color(65, 70, 85);
  } else if (contadorColor == 3) {
    colorActual = color(90, 100, 120);
  } else if (contadorColor == 4) {
    colorActual = color(110, 125, 150);
  } else if (contadorColor == 5) {
    colorActual = color(120, 140, 180);
  } else if (contadorColor == 6) {
    colorActual = color(100, 120, 210);
  } else if (contadorColor == 7) {
    colorActual = color(80, 100, 230);
  } 
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    contadorColor = 0;
    colorActual = color(0);  
    agrandar = false; 
    tiempoEjecutado = millis(); 
  }
}
