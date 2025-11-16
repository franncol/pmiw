class Juego {
  constructor(turnos) {
    this.jugador = new Jugador(turnos);
    this.tablero = new Tablero();
  }
  
  mostrar() {
    this.tablero.mostrar();
    
    fill(255);
    stroke(0);
    strokeWeight(2);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Turnos: " + this.jugador.turnosRestantes, width / 2, 30);
    text("Pares: " + this.jugador.paresEncontrados + "/6", width / 2, 455);
  }
  
  click(mx, my) {
    this.tablero.click(mx, my, this.jugador);
  }
}
