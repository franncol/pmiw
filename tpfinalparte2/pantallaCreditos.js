function pantallaCreditos(img, textoCreditos) {
  image(img, 0, 0, width, height);

  fill(255);
  stroke(0);
  strokeWeight(3);
  textSize(24);

  textAlign(CENTER, CENTER); 
  text(textoCreditos, width / 2, height / 2); 
}
