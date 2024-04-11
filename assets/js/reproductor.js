// Importo la clase Multimedia desde el archivo multimedia.js
import Multimedia from "./multimedia.js";

/* Defino la clase Reproductor que hereda de la clase Multimedia
y sobreescribe el método reproducirContenido */
class Reproductor extends Multimedia {
  constructor(url, id) {
    // Llamo al constructor de la clase padre (Multimedia)
    // y le paso los parámetros url y id
    super(url, id);
  }

  reproducirContenido(inicio) {
    // Llamo al método playMultimedia de la clase padre
    this.playMultimedia();

    // Establezco la hora inicial de reproducción
    this.setInicio(inicio);
  }
}

// Exporto la clase Reproductor para poder usarla en otros archivos
export default Reproductor;
