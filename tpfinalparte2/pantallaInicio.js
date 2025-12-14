class PantallaInicio {
  constructor() {
    this.botonX = 0;
    this.botonY = 0;
    this.botonW = 140;
    this.botonH = 45;
  }
  
  mostrar() {
    image(imagenFondo, 0, 0, width, height);
    
    this.botonX = width / 2 - 70;
    this.botonY = height - 250;
    
    // veo si el mouse esta en el boton
    let sobreBton = mouseX > this.botonX && 
                    mouseX < this.botonX + this.botonW &&
                    mouseY > this.botonY && 
                    mouseY < this.botonY + this.botonH;
    
    // dibujar boton
    if (sobreBton) {
      fill(0, 70, 110);
    } else {
      fill(0, 92, 142);
    }
    
    stroke(212, 182, 95);
    strokeWeight(3);
    rect(this.botonX, this.botonY, this.botonW, this.botonH, 8);
    
    fill(212, 182, 95);
    stroke(0);
    strokeWeight(1);
    textAlign(CENTER, CENTER);
    text("Jugar", this.botonX + this.botonW / 2, this.botonY + this.botonH / 2);
  }
  
  click(mx, my) {
    if (mx > this.botonX && mx < this.botonX + this.botonW &&
        my > this.botonY && my < this.botonY + this.botonH) {
      return 1; //avanzo a la siguiente pantalla
    }
    return null;
  }
}
