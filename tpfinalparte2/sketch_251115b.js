// Colapaolo Franco Daniel
// Comisión 5
//https://youtu.be/uFRWDEbqOWM

let carta;
let tablero;
let jugador; 
let juego;
let imagenFondo;
let imagenReverso;
let imagenFrente = [];
let audioFondo;
let audioPar;
let audioBoton;
let estado = 0;
let fuente;
let imagenGanaste;
let imagenPerdiste;
let boton;

// variables botones de decision
let boton1X = 0, boton1Y = 0, boton1W = 0, boton1H = 0, boton1Destino = 0;
let boton2X = 0, boton2Y = 0, boton2W = 0, boton2H = 0, boton2Destino = 0;
let imagenesListas = false;
let musicaIniciada = false;

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
  imagenesListas = true;
}

function draw() {
  if (estado === 0) {
    pantallaInicio(imagenFondo, "Jugar", 1);
  } else if (estado === 1) {
    escena(imagenFondo, 
      "Encuentra todos los pares antes de que se acaben tus turnos.\n" +
      "Cada par que descubras representa un objeto del mundo humano o submarino que Ariel reconoce y valora:\n" +
      "el tridente de Tritón que simboliza el poder y la protección de su padre,\n" +
      "un tenedor que la conecta con la cultura humana,\n" +
      "un barco que le recuerda aventuras y su deseo de explorar nuevos horizontes.\n" +
      "Cada vez que encuentres un par, Ariel da un paso más para cumplir el hechizo mágico y convertirse en humana.", 
      "Siguiente", 2);
  } else if (estado === 2) {
    // resetea botones  en el juego
    boton1Destino = 0;
    boton2Destino = 0;
    
    if (!juego && imagenesListas) {
      juego = new Juego(15);
    }
       
    image(imagenFondo, 0, 0, width, height);
  
    
    if (juego) {
      juego.mostrar();
      image(boton, 580, 10, 50, 50);
      if (juego.jugador.paresEncontrados >= 6) {
        estado = 3;
        juego = null;
      } else if (juego.jugador.turnosRestantes <= 0) {
        estado = 4;
        juego = null;
      }
    }
  } else if ( estado === 3) {
    pantallaFin(imagenGanaste, "Reiniciar", 1, "Creditos", 5);
  } else if (estado === 4) {
    pantallaFin(imagenPerdiste, "Reiniciar", 1, "Creditos", 5);  
  } else if (estado === 5) {
    pantallaCreditos(imagenFondo,
      "Creado por: Franco Daniel Colapaolo\n" +
      "Autor original: Hans Christian Andersen\n" +
      "Imagenes: Google Gemini\n" +
      "Música: Compositor Alan Menken\n" +
      "Fuente: Little Mermaid por Kustren\n" +
      "¡Gracias por jugar!");
  }
}

function mousePressed() {
  
  if (!musicaIniciada && audioFondo) {
    audioFondo.loop();
    audioFondo.setVolume(0.3);
    musicaIniciada = true;
  }
  
 
  if (estado === 2) {
  if (mouseX > width - 60 && mouseX < width - 10 &&
      mouseY > 10 && mouseY < 60) {
    reinicio();
    if (audioBoton) audioBoton.play();
    return;
  }
}
  
  if (estado === 2 && juego) {
    juego.click(mouseX, mouseY);
    return;
  }
  
  if (boton1Destino > 0 &&
      mouseX > boton1X && mouseX < boton1X + boton1W &&
      mouseY > boton1Y && mouseY < boton1Y + boton1H) {
    estado = boton1Destino;
    if (audioBoton) audioBoton.play();
  }
  
 
  if (boton2Destino > 0 &&
      mouseX > boton2X && mouseX < boton2X + boton2W &&
      mouseY > boton2Y && mouseY < boton2Y + boton2H) {
    estado = boton2Destino;
    if (audioBoton) audioBoton.play();
  }
}
function reinicio() {
  
  juego = new Juego(15);
 
  boton1Destino = 0;
  boton2Destino = 0;
  estado = 2;
}
