class PantallaFin {
  constructor(imagen, textoBoton1, destino1, textoBoton2, destino2) {
    this.imagen = imagen;
    this.textoBoton1 = textoBoton1;
    this.destino1 = destino1;
    this.textoBoton2 = textoBoton2;
    this.destino2 = destino2;
    this.boton1X = 0;
    this.boton1Y = 0;
    this.boton2X = 0;
    this.boton2Y = 0;
    this.botonW = 140;
    this.botonH = 45;
  }
  
  mostrar() {
    image(this.imagen, 0, 0, width, height);
    
    // posicion es de los botones
    this.boton1X = width / 2 - 70;
    this.boton1Y = height - 270;
    this.boton2X = this.boton1X;
    this.boton2Y = this.boton1Y + this.botonH + 20;
    
    // boton 1
    let sobreBoton1 = mouseX > this.boton1X && 
                      mouseX < this.boton1X + this.botonW &&
                      mouseY > this.boton1Y && 
                      mouseY < this.boton1Y + this.botonH;
    
    if (sobreBoton1) {
      fill(0, 70, 110);
    } else {
      fill(0, 92, 142);
    }
    
    stroke(212, 182, 95);
    strokeWeight(3);
    rect(this.boton1X, this.boton1Y, this.botonW, this.botonH, 8);
    
    fill(212, 182, 95);
    stroke(0);
    strokeWeight(1);
    textSize(18);
    textAlign(CENTER, CENTER);
    text(this.textoBoton1, this.boton1X + this.botonW / 2, this.boton1Y + this.botonH / 2);
    
    // boton 2
    let sobreBoton2 = mouseX > this.boton2X && 
                      mouseX < this.boton2X + this.botonW &&
                      mouseY > this.boton2Y && 
                      mouseY < this.boton2Y + this.botonH;
    
    if (sobreBoton2) {
      fill(0, 70, 110);
    } else {
      fill(0, 92, 142);
    }
    
    stroke(212, 182, 95);
    strokeWeight(3);
    rect(this.boton2X, this.boton2Y, this.botonW, this.botonH, 8);
    
    fill(212, 182, 95);
    stroke(0);
    strokeWeight(1);
    text(this.textoBoton2, this.boton2X + this.botonW / 2, this.boton2Y + this.botonH / 2);
  }
  
  click(mx, my) {
    // click boton 1 cambia el estado
    if (mx > this.boton1X && mx < this.boton1X + this.botonW &&
        my > this.boton1Y && my < this.boton1Y + this.botonH) {
      return this.destino1;
    }
    
   // click boton 2 cambia el estado
    if (mx > this.boton2X && mx < this.boton2X + this.botonW &&
        my > this.boton2Y && my < this.boton2Y + this.botonH) {
      return this.destino2;
    }
    
    return null;
  }
}
