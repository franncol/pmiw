class Tablero {
  constructor() {
    this.filas = 3;
    this.columnas = 4;
    this.cartas = [];
    this.primeraCarta = null;
    this.segundaCarta = null;
    this.crearCartas();
    this.esperando = false;
  }
  
  crearCartas() {
    let ids = [0,1,2,3,4,5,0,1,2,3,4,5];
    ids = shuffle(ids);
    
    let espacioH = 110;
    let espacioV = 110;
    let inicioX = (width - (this.columnas * espacioH)) / 2;
    let inicioY = 80;
    
    let k = 0;
    for (let f = 0; f < this.filas; f++) {
      for (let c = 0; c < this.columnas; c++) {
        let x = inicioX + c * espacioH;
        let y = inicioY + f * espacioV;
        let id = ids[k];
        this.cartas.push(new Carta(imagenFrente[id], x, y, id));
        k++;
      }
    }
  }
  
  mostrar() {
    for (let carta of this.cartas) {
      carta.mostrar();
    }
  }
  
  click(mx, my, jugador) {
    if (this.esperando) return;
    
    for (let carta of this.cartas) {
      if (carta.estaDentro(mx, my) && !carta.volteada && !carta.encontrada) {
        carta.volteada = true;
        
        if (!this.primeraCarta) {
          this.primeraCarta = carta;
        } else if (!this.segundaCarta && carta !== this.primeraCarta) {
          this.segundaCarta = carta;
          jugador.usarTurno();
          this.esperando = true;
          
          setTimeout(() => {
            this.revisarPareja(jugador);
          }, 1000);
        }
        break;
      }
    }
  }
  
  revisarPareja(jugador) {
    if (this.primeraCarta.id === this.segundaCarta.id) {
      this.primeraCarta.encontrada = true;
      this.segundaCarta.encontrada = true;
      jugador.agregarPar();
      if (audioPar) audioPar.play();
    } else {
      this.primeraCarta.volteada = false;
      this.segundaCarta.volteada = false;
    }
    
    this.primeraCarta = null;
    this.segundaCarta = null;
    this.esperando = false;
  }
}
