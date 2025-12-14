class JuegoCompleto {
  constructor() {
    this.estado = 0;
    this.juego = null;
    this.musicaIniciada = false;
    
    this.pantallaInicio = new PantallaInicio();
    this.pantallaInstrucciones = new Escena(
      imagenFondo,
      "Encuentra todos los pares antes de que se acaben tus turnos.\n" +
      "Cada par que descubras representa un objeto del mundo humano o submarino que Ariel reconoce y valora:\n" +
      "el tridente de Tritón que simboliza el poder y la protección de su padre,\n" +
      "un tenedor que la conecta con la cultura humana,\n" +
      "un barco que le recuerda aventuras y su deseo de explorar nuevos horizontes.\n" +
      "Cada vez que encuentres un par, Ariel da un paso más para cumplir el hechizo mágico y convertirse en humana.",
      "Siguiente",
      2
    );
    this.pantallaGanaste = new PantallaFin(imagenGanaste, "Reiniciar", 1, "Creditos", 5);
    this.pantallaPerdiste = new PantallaFin(imagenPerdiste, "Reiniciar", 1, "Creditos", 5);
    this.pantallaCreditos = new PantallaCreditos(imagenFondo,
      "Creado por: Franco Daniel Colapaolo\n" +
      "Autor original: Hans Christian Andersen\n" +
      "Imagenes: Google Gemini\n" +
      "Música: Compositor Alan Menken\n" +
      "Fuente: Little Mermaid por Kustren\n" +
      "¡Gracias por jugar!"
    );
  }
  
  mostrar() {
    if (this.estado === 0) {
      this.pantallaInicio.mostrar();
    } else if (this.estado === 1) {
      this.pantallaInstrucciones.mostrar();
    } else if (this.estado === 2) {
      if (!this.juego) {
        this.juego = new Juego(15);
      }
      
      image(imagenFondo, 0, 0, width, height);
      this.juego.mostrar();
      image(boton, 580, 10, 50, 50);
      
      if (this.juego.jugador.gano()) {
        this.estado = 3;
        this.juego = null;
      } else if (this.juego.jugador.perdio()) {
        this.estado = 4;
        this.juego = null;
      }
    } else if (this.estado === 3) {
      this.pantallaGanaste.mostrar();
    } else if (this.estado === 4) {
      this.pantallaPerdiste.mostrar();
    } else if (this.estado === 5) {
      this.pantallaCreditos.mostrar();
    }
  }
  
  click(mx, my) {
    if (!this.musicaIniciada && audioFondo) {
      audioFondo.loop();
      audioFondo.setVolume(0.3);
      this.musicaIniciada = true;
    }
    
    if (this.estado === 0) {
      this.cambiarEstado(this.pantallaInicio.click(mx, my));
    } else if (this.estado === 1) {
      this.cambiarEstado(this.pantallaInstrucciones.click(mx, my));
    } else if (this.estado === 2) {
      if (mx > 580 && mx < 630 && my > 10 && my < 60) {
        this.reiniciar();
        return;
      }
      if (this.juego) {
        this.juego.click(mx, my);
      }
    } else if (this.estado === 3) {
      this.cambiarEstado(this.pantallaGanaste.click(mx, my));
    } else if (this.estado === 4) {
      this.cambiarEstado(this.pantallaPerdiste.click(mx, my));
    } else if (this.estado === 5) {
      this.cambiarEstado(this.pantallaCreditos.click(mx, my));
    }
  }
  
  cambiarEstado(nuevoEstado) {
    if (nuevoEstado !== null) {
      this.estado = nuevoEstado;
      if (audioBoton) audioBoton.play();
    }
  }
  
  reiniciar() {
    this.juego = new Juego(15);
    this.estado = 2;
    if (audioBoton) audioBoton.play();
  }
}
