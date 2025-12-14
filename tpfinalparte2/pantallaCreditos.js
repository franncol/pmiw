class PantallaCreditos {
  constructor(imagen, texto) {
    this.imagen = imagen;
    this.texto = texto;
  }
  
  mostrar() {
    image(this.imagen, 0, 0, width, height);
    fill(255);
    stroke(0);
    strokeWeight(3);
    textSize(24);
    textAlign(CENTER, CENTER);
    text(this.texto, width / 2, height / 2);
  }
  
  click(mx, my) {
    // cualquier click que de vuelve al inicio
    return 0;
  }
}
