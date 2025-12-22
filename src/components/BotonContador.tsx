// Importamos la hoja de estilos de su carpeta correspondiente
import "../styles/BotonContador.css";

interface Props {
  texto: string;
  esBotonDeClick: boolean;
  alHacerClick: () => void;
}

export function BotonContador({ texto, esBotonDeClick, alHacerClick }: Props) {
  return (
    <button
      className={esBotonDeClick ? "boton-click" : "boton-reiniciar"}
      onClick={alHacerClick}
    >
      {texto}
    </button>
  );
}

// En la linea catorce hacemos usuo de un operador ternario de javascript.
// Se le pasa la función para que haga lo que esperamos con el evento onclick
