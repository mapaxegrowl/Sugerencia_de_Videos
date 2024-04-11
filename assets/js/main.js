// Importamos la clase Reproductor desde el archivo reproductor.js
import Reproductor from "./reproductor.js";

// Definimos la función reproducir que creará nuevas instancias de Reproductor para cada video
const reproducir = () => {
  // Definimos las URLs de los videos
  const musicaUrl = "https://www.youtube.com/embed/qqy10JMWPAk";
  const peliculasUrl = "https://www.youtube.com/embed/fczI_U1RtRU";
  const seriesUrl = "https://www.youtube.com/embed/fGruzvJkzlU";

  // Creamos una nueva instancia de Reproductor para el video de música y reproducimos su contenido después de 10 segundos
  const musicaReproductor = new Reproductor(musicaUrl, "musica");
  musicaReproductor.reproducirContenido(10);

  // Creamos una nueva instancia de Reproductor para el video de películas y reproducimos su contenido después de 20 segundos
  const peliculasReproductor = new Reproductor(peliculasUrl, "peliculas");
  peliculasReproductor.reproducirContenido(20);

  // Creamos una nueva instancia de Reproductor para el video de series y reproducimos su contenido después de 30 segundos
  const seriesReproductor = new Reproductor(seriesUrl, "series");
  seriesReproductor.reproducirContenido(30);
};

// Ejecutamos la función reproducir cuando se carga la ventana
window.onload = reproducir;
