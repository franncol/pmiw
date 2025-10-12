function escenaDecision(img, texto, opcion1, destino1, opcion2, destino2) {
  image(img, 0, 0, width, height);

  // fondo abajo 
  noStroke(); 
  fill(0, 180);
  rect(0, 420, width, 100);

  // Texto superior
  fill(255);
  stroke(0);        
  strokeWeight(3);
  textAlign(LEFT, TOP);
  text(texto, width / 16, 30, width - 100);

  textAlign(CENTER, CENTER);
  noStroke();


  //boton 1
  
  boton1X = 0;
  boton1Y = 400;
  boton1W = width / 2;
  boton1H = 100;
  boton1Destino = destino1;

  if (mouseX > boton1X && mouseX < boton1X + boton1W &&
      mouseY > boton1Y && mouseY < boton1Y + boton1H) {
    fill(212, 182, 95); // texto dorado al pasar el mouse
    stroke(0); 
} else {
    fill(255);
    stroke(0);  
}
  text(opcion1, boton1X + boton1W / 2, boton1Y + boton1H / 2);

  //boton 2
  boton2X = width / 2;
  boton2Y = 400;
  boton2W = width / 2;
  boton2H = 100;
  boton2Destino = destino2;

  if (mouseX > boton2X && mouseX < boton2X + boton2W &&
      mouseY > boton2Y && mouseY < boton2Y + boton2H) {
    fill(212, 182, 95); // texto dorado al pasar el mouse
  } else {
    fill(255);
  }
  text(opcion2, boton2X + boton2W / 2, boton2Y + boton2H / 2);
}
