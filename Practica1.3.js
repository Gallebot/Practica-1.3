// Definir la clase Size
class Size {
    constructor(width = 80, height = 60) { //Funcion constructora
      this.width = width;    //Ancho 
      this.height = height;  //Alto
    }
  
    resize(newWidth, newHeight) {
      this.width = newWidth;   //Nuevo ancho
      this.height = newHeight;  //Nuevo alto
    }
 }

  // Definir la clase Position
  class Position {
    constructor(x = 0, y = 0) { //Funcion constructora 
        this.x = x;
        this.y = y;
    }


  }