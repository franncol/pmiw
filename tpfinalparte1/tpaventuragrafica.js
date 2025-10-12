// Colapaolo Franco Daniel
// Comisión 5
// https://www.youtube.com/watch?v=z06Id9yy_2c

let estado = 0;
let imagenes = [];
let audio = [];
let fuente;
// variables botones de decision
let boton1X, boton1Y, boton1W, boton1H, boton1Destino;
let boton2X, boton2Y, boton2W, boton2H, boton2Destino; // para decisiones

const audionombres = [
  "boton.mp3",          //0
  "casamiento.mp3",    //1
  "celebracion.mp3",    //2
  "creditosaudio.mp3", //3
  "espuma.mp3",         //4
  "regresa.mp3",  //5
  "audio0.mp3"    //6
];


function preload() {
  for (let i = 0; i < 25; i++) {
    imagenes[i] = loadImage('data/escena' + i + '.png');
  }
 
  for (let i = 0; i < 7 ; i++) {
    audio[i] = loadSound('audio/' + audionombres[i]);
     audio[i].setVolume(0.1); 
  fuente = loadFont('fonts/Little-Mermaid-por-Kustren.ttf');
}  

}
function setup() {
  createCanvas(640, 480);
  textFont(fuente);
  textSize(18);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  
  
 
  boton1X = boton1Y = boton1W = boton1H = boton1Destino = 0;
  boton2X = boton2Y = boton2W = boton2H = boton2Destino = 0;

  
  if (estado === 0) {
    audio[0].stop();
    audio[1].stop();
    audio[2].stop();
    audio[3].stop();
    audio[4].stop();
    audio[5].stop();
    audio[6].stop();
    pantallaInicio(imagenes[0], "Jugar", 1);
  } else if (estado === 1) {
     if (!audio[6].isPlaying()) {
            audio[6].loop(); }
    escena(imagenes[1],
      "En su cueva secreta, Ariel observa los tesoros del mundo humano." +
      "Un espejo, un tenedor, una cajita de música que ya no suena...\n\n" +
      "“¿Cómo será vivir allá arriba?”, se pregunta mientras el brillo del mar tiembla sobre su rostro.", "Siguiente", 2);
  } else if (estado === 2) {
    escena(imagenes[2], "Tritón aparece de repente y frunce el ceño." +
    "—Ariel, no deberías pensar en la superficie —dice con voz firme—. " +
    "Es peligroso allá arriba. Los humanos no entienden nuestro mundo.\n\n", "Siguiente", 3);
  } else if (estado === 3) {
    escena(imagenes[3], "Ariel nada lentamente en su cueva, mirando los objetos humanos y pensando en la superficie.\n\n" +
    "Su corazón late rápido mientras duda entre obedecer y seguir su curiosidad.", "Siguiente", 4);
  } else if (estado === 4) {
    escenaDecision(imagenes[4], "Ariel suspira, mirando los objetos humanos y luego a Sebastián, que la observa preocupado.\n" +
    "—Debemos terminar los preparativos para la gran celebración del reino —advierte Sebastián—.\n" +
    "¿Seguirá Ariel su consejo… o dejará que la curiosidad la guíe hacia la superficie?",
    "Explorar la superficie", 6,
    "Seguir con la preparación", 5);
  } else if (estado === 5) {
  if (audio[6].isPlaying()) {
            audio[6].stop();
        }
    if (!audio[2].isPlaying()) {
            audio[2].loop();  }
    escena(imagenes[5], "El tiempo pasa y Ariel crece. " +
"Su pueblo la aprecia y su padre la respeta, " +
"haciéndose un ejemplo para todos.", "Final", 23);     //FINAL
  } else if (estado === 6) {
    escena(imagenes[6], "Ariel mira a su padre y se da cuenta de que su vida se está marchitando bajo el mar. " +
"Se levanta y siente una furia fría. No es solo curiosidad lo que la mueve, " +
"sino una urgencia desesperada por salvarse a sí misma.", "Siguiente", 7);
  } else if (estado === 7) {
    escena(imagenes[7], "Ariel decide subir en secreto y observar a los humanos. " +
"Ve pasar un barco sobre las olas, con gente que ríe y conversa, " +
"y siente una mezcla de curiosidad y emoción por el mundo que aún no conoce.", "Siguiente", 8);
  } else if (estado === 8) {
    escena(imagenes[8], "Una tormenta azota el barco que Ariel estaba espiando, con olas que golpean violentamente " +
"y truenos que retumban sobre el agua, mientras ella observa desde las profundidades, " +
"mezclando miedo y fascinación por lo que ocurre en la superficie.", "Siguiente", 9);
  } else if (estado === 9) {
    escenaDecision(imagenes[8], "Ariel lucha contra las olas y logra rescatar al príncipe de la tormenta. Su corazón late rápido mientras observa su mundo desconocido, lleno de curiosidad y asombro.\n" +
"—¿Debería convertirse en humana para explorar este mundo… o quedarse en el océano y protegerse a salvo? —se pregunta con mezcla de miedo y deseo.",
  "Ir a Úrsula y convertirse en humana", 12, 
  "Quedarse en el océano", 10);
  } else if (estado === 10) {
    escenaDecision(imagenes[10], "El tiempo ha pasado y la confusión del príncipe Eric se resuelve con una boda inminente. Ariel observa todo desde su mundo submarino y siente un nudo en el corazón: ¿debería intervenir antes de la boda o retirarse discretamente antes de ser descubierta?", 
    "Intervenir", 12,
    "Retirarse sin ser vista", 11); 
  } else if (estado === 11) {
      if (audio[6].isPlaying()) {
            audio[6].stop();
        }
    if (!audio[5].isPlaying()) {
            audio[5].loop();  }            
    escena(imagenes[11], "Ariel observa cómo el príncipe Eric se casa y siente cómo su corazón se rompe. Con tristeza y nostalgia, decide regresar al mar antes de ser descubierta.", "Final", 23); //FINAL
  } else if (estado === 12) {
    escena(imagenes[12], "Ariel visita a Úrsula. La bruja del mar le propone un pacto: piernas humanas a cambio de su voz. Decidida a conocer al príncipe Eric y descubrir el mundo humano, Ariel acepta, pero sabe que para que el hechizo funcione él debe darle un beso de verdadero amor antes del atardecer", "Siguiente", 13);
  } else if (estado === 13) {
    escena(imagenes[13],  "Ariel se convierte en humana. El príncipe la encuentra a orillas del mar y, aunque no recuerda quién es, siente una extraña familiaridad con ella y la lleva al palacio.",
      "Siguiente", 14)
  } else if (estado === 14) {
    escena(imagenes[14], "El príncipe está confundido tras la tormenta y no recuerda quién lo salvó. Mientras tanto, Úrsula, en forma humana y con la voz de Ariel, sigue amenazando dentro del palacio.",
      "Siguiente", 15)
  } else if (estado === 15) {
     escenaDecision(imagenes[15], "Ariel se encuentra en el salón principal del palacio. El sol está a punto de ocultarse. El Príncipe Eric está a su lado, pero su mirada está fija en la mujer misteriosa, Úrsula disfrazada, que canta usando la voz de Ariel.",
      "Intentar tomar el broche de Eric", 16,
      "Hacer un gesto para llamar su atención", 20,); 
  } else if (estado === 16) {
      escenaDecision(imagenes[16], "Ariel extiende su mano para tomar el broche de Eric y atraer su atención antes de que caiga bajo el hechizo de Úrsula. Sabe que debe actuar rápido para mantener la atención y que Eric recuerde quién lo salvó.", 
    "Quitarle el broche", 17,
    "Manchar a Úrsula con vino", 19); 
  } else if (estado === 17) {
    escena(imagenes[17], "Ariel se inclina para tocar el broche de Eric, intentando recordarle la voz y el mar, pero Eric interpreta su gesto como un pedido de consuelo. Úrsula aprovecha y le quita el broche.", 
    "Siguiente", 18); 
  } else if (estado === 18) {
    if (audio[6].isPlaying()) {
            audio[6].stop();
        }
    if (!audio[4].isPlaying()) {
            audio[4].loop();  }    
    escena(imagenes[18], "Él le da la espalda suavemente, volviendo hacia Úrsula. Ese segundo de rechazo sella su destino. Ariel se convierte en espuma de mar.", "Final", 23); //FINAL
  } else if (estado === 19) {
    escena(imagenes[19], "Ariel ve una copa de vino cerca y, antes de que el sol se oculte, la golpea con su broche, salpicando a la mujer misteriosa. El hechizo de Úrsula se rompe por un instante, revelando a la bruja.", "Siguiente", 21);
  } else if (estado === 20) {
    escena(imagenes[20], "Ariel decide actuar para que Eric recuerde el rescate. Recrea el momento con gestos y movimientos, intentando despertar su memoria emocional.", "Siguiente" , 21);
  } else if (estado === 21) {
    escena(imagenes[21], "El príncipe finalmente comprende que Ariel fue quien lo salvó. La besa, rompiendo el hechizo y devolviendo la armonía al reino.", "Siguiente", 22);
  } else if (estado === 22) {
    if (audio[6].isPlaying()) {
            audio[6].stop();
        }
    if (!audio[1].isPlaying()) {
            audio[1].loop();  }  
    escena(imagenes[22], "Úrsula es derrotada. Ariel se casa con el príncipe y finalmente vive en la superficie, disfrutando de su nueva vida entre humanos y el mar.", "Final", 23); //FINAL
  }
  else if (estado === 23) {
    pantallaFin(imagenes[23], "Inicio", 0, "Créditos", 24);
}  else if (estado === 24) {
    audio[0].stop();
    audio[1].stop();
    audio[2].stop();
    audio[4].stop();
    audio[5].stop();
    audio[6].stop();
     if (audio[6].isPlaying()) {
            audio[6].stop();
        }
    if (!audio[3].isPlaying()) {
            audio[3].loop();  }  
    pantallaCreditos(imagenes[24],
`Creado por: Franco Daniel Colapaolo
  Autor original: Hans Christian Andersen
  Imagenes: Google Gemini
  Música: Compositor Alan Menken
  Fuente: Little Mermaid por Kustren
  ¡Gracias por jugar!`) //creditos
}

}

function mousePressed() {
  if (estado === 24) {
    estado = 0;
  } else {
    if (mouseX > boton1X && mouseX < boton1X + boton1W &&
        mouseY > boton1Y && mouseY < boton1Y + boton1H) {
          audio[0].play()
          estado = boton1Destino;
    }
    
    if (boton2Destino && mouseX > boton2X && mouseX < boton2X + boton2W &&
        mouseY > boton2Y && mouseY < boton2Y + boton2H) {
       audio[0].play()
          estado = boton2Destino;
    }
  }
}
