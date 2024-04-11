// La función flecha autoejecutable devuelve un objeto con la clase Multimedia
const sugerenciaDeVideos = (() => {
    // Defino la clase Multimedia con las propiedades url, id e inicio
    class Multimedia {
      constructor(url, id) {
        this._url = url; // La url del video
        this._id = id; // El id del iframe donde se mostrará el video
        this._inicio = 0; // La hora de inicio del video
      }
  
      // Getter y setter de la propiedad url
      get url() {
        return this._url;
      }
  
      set url(value) {
        this._url = value;
      }
  
      // Getter y setter de la propiedad inicio
      get inicio() {
        return this._inicio;
      }
  
      set inicio(value) {
        this._inicio = value;
      }
  
      // Función para reproducir el video en el iframe
      playMultimedia() {
        const iframe = document.getElementById(this._id);
        iframe.src = this._url;
      }
  
      // Función para establecer el hora de inicio del video
      setInicio(inicio) {
        this._inicio = inicio;
        const iframe = document.getElementById(this._id);
        // Se agrega el parámetro 'start' a la url del video para establecer el hora de inicio
        iframe.src += `?start=${this._inicio}`;
      }
    }
  
    // Devuelvo el objeto con la clase Multimedia
    return { Multimedia };
  })();
  
  // Exporto la clase Multimedia
  export default sugerenciaDeVideos.Multimedia;