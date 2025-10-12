// funcion escena lineal

function pantallaFin(img, opcion1, destino1, opcion2, destino2) {
  image(img, 0, 0, width, height);




//boton 1

boton1X = width / 2 - 51;  
boton1Y = height - 270;
boton1W = 140;
boton1H = 45;
boton1Destino = destino1;

if (mouseX > boton1X && mouseX < boton1X + boton1W &&
    mouseY > boton1Y && mouseY < boton1Y + boton1H) {
  fill(0, 70, 110);
} else {
  fill(0, 92, 142);
}

stroke(212, 182, 95);
strokeWeight(3);
rect(boton1X, boton1Y, boton1W, boton1H, 8);
fill(212, 182, 95);
stroke(0);
text(opcion1, boton1X + boton1W / 2, boton1Y + boton1H / 2);


//boton 2
boton2X = boton1X;               
boton2Y = boton1Y + boton1H + 20; 
boton2W = boton1W;
boton2H = boton1H;
boton2Destino = destino2;

if (mouseX > boton2X && mouseX < boton2X + boton2W &&
    mouseY > boton2Y && mouseY < boton2Y + boton2H) {
  fill(0, 70, 110);
} else {
  fill(0, 92, 142);
}

stroke(212, 182, 95);
strokeWeight(3);
rect(boton2X, boton2Y, boton2W, boton2H, 8);
fill(212, 182, 95);
noStroke();
stroke(0);
text(opcion2, boton2X + boton2W / 2, boton2Y + boton2H / 2);


}
