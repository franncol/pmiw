// funcion escena lineal

function escena(img, texto, textoBoton, destino) {
  image(img, 0, 0, width, height);

  noStroke(); 
  fill(0, 180);
  rect(0, 420, width, 100);

  //texto superior
  fill(255);
  stroke(0);        
  strokeWeight(3);
  textAlign (LEFT,TOP);
  text(texto, width /16, 30, width - 100);

  // botón 1
  boton1X = width/2 - 60;
  boton1Y = 432;
  boton1W = 120;
  boton1H = 30;
  boton1Destino = destino;
   textAlign(CENTER, CENTER);
    if (mouseX > boton1X && mouseX < boton1X + boton1W &&
      mouseY > boton1Y && mouseY < boton1Y + boton1H) {
     // color más oscuro al pasar el mouse
     fill(212, 182, 95);
     stroke(0);
  } else {
    fill(255);
    stroke(0); // color normal
     }
  text(textoBoton, boton1X+boton1W/2, boton1Y+boton1H/2);
}
