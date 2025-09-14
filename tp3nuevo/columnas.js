function estaCerca(mouseX, xActual, rango) {                         //devuelve V o F si el mouse esta cerca de la elipse
  return (mouseX > xActual - rango) && (mouseX < xActual + rango);
}

function columnas1(x, y, w, h, espacio, colEspacio) {
  fill(colorActual); 
  for (let col = 0; col < 3; col++) {
    let xActual = x + col * colEspacio;   
    let wActual = w;
    let hActual = h;
    let tamaño = 1;
    if (estaCerca(mouseX, xActual, 15) && agrandar) {
      let distancia = dist(mouseX, 0, xActual, 0);
      tamaño = map(distancia, 0, 20, 1.5, 1);  
    } 
    wActual = w * tamaño;
    hActual = h * tamaño;
    for (let fila = 0; fila < 6; fila++) {
      let yActual = y + fila * espacio;    
      ellipse(xActual, yActual, wActual, hActual);
    }
  }
}

function columnasChicas(x, y, w, h, espacio) {  
  fill(colorActual);  
  let tamaño = 1;
  if (estaCerca(mouseX, x, 15) && agrandar) {
    tamaño = map(0, 0, 20, 1.5, 1);
  }
  for (let fila = 0; fila < 6; fila++) {
    let yActual = y + fila * espacio;
    ellipse(x, yActual, w * tamaño, h * tamaño);
  }
}
