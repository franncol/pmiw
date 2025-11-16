class Carta {
  constructor(imagen, x, y, id) {
    this.imagen = imagen;
    this.x = x;
    this.y = y;
    this.ancho = 100;
    this.alto = 100;
    this.id = id;
    this.volteada = false;
    this.encontrada = false;
  }
  
  mostrar() {
    push();
    
    if (this.volteada || this.encontrada) {
      if (this.imagen) {
        image(this.imagen, this.x, this.y, this.ancho, this.alto);
      }
    } else {
      if (imagenReverso) {
        image(imagenReverso, this.x, this.y, this.ancho, this.alto);
      }
    }
    
    noFill();
    stroke(255, 200);
    strokeWeight(2);
    rect(this.x, this.y, this.ancho, this.alto);
    
    pop();
  }
  
  estaDentro(mx, my) {
    return mx > this.x && mx < this.x + this.ancho && 
           my > this.y && my < this.y + this.alto;
  }
}
