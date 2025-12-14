// Colapaolo Franco Daniel
// Comisión 5
//https://www.youtube.com/watch?v=dmh_P8K1l0U

let juegoCompleto;
let imagenFondo;
let imagenReverso;
let imagenFrente = [];
let audioFondo;
let audioPar;
let audioBoton;
let fuente;
let imagenGanaste;
let imagenPerdiste;
let boton;

function preload() {
  imagenFondo = loadImage('data/escena24.png');
  imagenReverso = loadImage('data/reverso.png');
  imagenGanaste = loadImage('data/ganaste.png');
  imagenPerdiste = loadImage('data/perdiste.png');
  boton = loadImage('data/boton.png');
  
  audioFondo = loadSound('audio/audio0.mp3');
  audioPar = loadSound('audio/par.mp3');
  audioBoton = loadSound('audio/boton.mp3');
  
  imagenFrente[0] = loadImage('data/mem0.png');
  imagenFrente[1] = loadImage('data/mem1.png');
  imagenFrente[2] = loadImage('data/mem2.png');
  imagenFrente[3] = loadImage('data/mem3.png');
  imagenFrente[4] = loadImage('data/mem4.png');
  imagenFrente[5] = loadImage('data/mem5.png');
  
  fuente = loadFont("fonts/Little-Mermaid-por-Kustren.ttf");
}

function setup() {
  createCanvas(640, 480);
  textFont(fuente); 
  textSize(18);
  textAlign(CENTER, CENTER);
  juegoCompleto = new JuegoCompleto();
}

function draw() {
  juegoCompleto.mostrar();
}

function mousePressed() {
  juegoCompleto.click(mouseX, mouseY);
}
