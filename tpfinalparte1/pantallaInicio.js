// funcion escena inicio


function pantallaInicio(img, textoBoton, destino) {
  image(img, 0, 0, width, height);



  // boton 1
  boton1X = width/2 - 70;
  boton1Y = height-80;
  boton1W = 140;
  boton1H = 45;
  boton1Destino = destino;

  if (mouseX > boton1X && mouseX < boton1X + boton1W &&
      mouseY > boton1Y && mouseY < boton1Y + boton1H) {
    fill(0, 70, 110); // color más oscuro al pasar el mouse
  } else {
    fill(0, 92, 142); // color normal
  }

  stroke(212, 182, 95);
  strokeWeight(3);
  rect(boton1X, boton1Y, boton1W, boton1H,8);
  fill(212, 182, 95);
  stroke(0);
  text(textoBoton, boton1X+boton1W/2, boton1Y+boton1H/2);
}
