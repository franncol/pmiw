// funcion pantalla creditos

function pantallaCreditos(img, textoCreditos) {
  image(img, 0, 0, width, height);

  // texto creditos
  fill(255);
  stroke(0);
  strokeWeight(3);
  text(textoCreditos, 20, 20,width-40,height-40);
}
