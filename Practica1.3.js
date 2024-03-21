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
    
    move(newX, newY) {
        this.x = newX;   //Nuevo X
        this.y = newY;   //Nuevo Y
    }
  }

   // Definir la clase ProgramWindow
   class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600);
        this.size = new Size ();
        this.position = new Position ();
    }

    resize(newSize) {
        // Limitar el tamaño máximo según la posición actual

      const maxWidth = Math.min(this.screenSize.width - this.position.x, newSize.width);   
      //screenSizen accede al ancho de la pantalla, es una propiedad de la clase ProgramWindow
      // position.x accede a la posicion horizontal y es una propiedad de la clase Position
      // se "restan" para calcular el espacio disponible en el lado derecho de la posicion actual de la pantalla
      // la funcion math.min ayuda a obtener el valor minimo entre el espacio disponible y el nuevo ancho solicitado
      // sirve para que el ancho maximo posible no exceda el tamaño disponible

      const maxHeight = Math.min(this.screenSize.height - this.position.y, newSize.height); 
      // Hace la misma funcion que la funcion anterior, pero enfocandose a el alto de la pantalla y por lo tanto al eje y 
  
      // límites de tamaño
      const limitedWidth = Math.max(1, Math.min(newSize.width, maxWidth));
      // la funcion math.max tomará el valor maximo entre 1 y el valor minimo entre el ancho nuevo y el ancho máximo
      // esto concluye en que si el resultado es menor a 1, se establecerá 1, de lo contrario se conserva el valor

      const limitedHeight = Math.max(1, Math.min(newSize.height, maxHeight));
      // esto hace lo mismo pero enfocandose al alto
      this.size.resize(limitedWidth, limitedHeight);
      // llama al metodo resize() de la instancia size clase Size  
        
    }
    mover(newPosition) {
        // Limitar la posición dentro de la pantalla
        const maxX = this.screenSize.width - this.size.width;
        const maxY = this.screenSize.height - this.size.height;
    
        // Aplicar los límites de posición
        const limitedX = Math.max(0, Math.min(newPosition.x, maxX));
        const limitedY = Math.max(0, Math.min(newPosition.y, maxY));
    
        this.position.move(limitedX, limitedY);
      }
   }
    // Implementar la función changeWindow
function changeWindow(programWindow) {
  const newWindowSize = new Size(400, 300);
  const newPosition = new Position(100, 150);

  programWindow.resize(newWindowSize);
  programWindow.mover(newPosition); // Cambiar de move a mover

  return programWindow;
}


    // Ejemplo de uso
    const window1 = new ProgramWindow();
    console.log("Ventana original:", window1);
    
    const changedWindow = changeWindow(window1);
    console.log("Ventana modificada:", changedWindow);

/*--------------------------
  |  __                     |
  |  / _  _ || _ |_  _ |_   |
  |  \__)(_|||(-`|_)(_)|_   |
  |                         |
  --------------------------*/