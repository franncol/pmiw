class Escena {
  constructor(imagen, texto, textoBoton, destino) {
    this.imagen = imagen;
    this.texto = texto;
    this.textoBoton = textoBoton;
    this.destino = destino;
    this.botonX = 0;
    this.botonY = 0;
    this.botonW = 120;
    this.botonH = 30;
  }
  
  mostrar() {
    image(this.imagen, 0, 0, width, height);
    
    
    noStroke();
    fill(0, 180);
    rect(0, 420, width, 100);
    
    // muestro el texto
    fill(255);
    stroke(0);
    strokeWeight(3);
    textAlign(LEFT, TOP);
    text(this.texto, width / 16, 30, width - 100);
    
    this.botonX = width / 2 - 60;
    this.botonY = 432;
    
    // veo si esta sobre el boton
    let sobreBton = mouseX > this.botonX && 
                    mouseX < this.botonX + this.botonW &&
                    mouseY > this.botonY && 
                    mouseY < this.botonY + this.botonH;
    
    // dibujo boton
    textAlign(CENTER, CENTER);
    if (sobreBton) {
      fill(212, 182, 95);
      stroke(0);
    } else {
      fill(255);
      stroke(0);
    }
    
    strokeWeight(1);
    text(this.textoBoton, this.botonX + this.botonW / 2, this.botonY + this.botonH / 2);
  }
  
  click(mx, my) {
    if (mx > this.botonX && mx < this.botonX + this.botonW &&
        my > this.botonY && my < this.botonY + this.botonH) {
      return this.destino;
    }
    return null;
  }
}
