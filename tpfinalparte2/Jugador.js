class Jugador {
  constructor(turnos) {
    this.turnosRestantes = turnos;
    this.paresEncontrados = 0;
    this.totalPares = 6;
  }

  usarTurno() { this.turnosRestantes--; }
  agregarPar() { this.paresEncontrados++; }
  gano() { return this.paresEncontrados === this.totalPares; }
  perdio() { return this.turnosRestantes <= 0 && !this.gano(); }
}
