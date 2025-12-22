import freecodecampLogo from "../imagenes/FreecodecampLogo.png";
import { BotonContador } from "../components/BotonContador";
import { Contador } from "../components/Contador";
import "../styles/PagContador.css";
import { useState } from "react";

/**
            Ojo aquí con el flex direction, ya que has de tener en cuenta que si quieres que el 
            contenido aparezca como una columna, deves indicar en el contenedor que incluya los elementos
            flex direction "colum" ya que ROW se aplica por defecto.
         */

export function PagContador() {
    // Manejamos el estado de la app:
    const [numClics, setNumClics] = useState (0); 
    const [varInven, setvarInven] = useState (65); // Podemos hacer uso para otras variables que tengan estado. 
  // Funciones:
  const manejarClics = () => {
    setNumClics(numClics +1);
    setvarInven(varInven +1);
    console.log("La var inventada es" + varInven);
  }

  const funcionContador = () => {
    console.log("click");
    manejarClics()
  };

  const funcionReset = () => {
    console.log("reiniciar");
    setNumClics(0)
  };

  const funcionRestar = () => {
      if(numClics > 0){
        setNumClics(numClics - 1);
      }
  }

  return (
    <>
      <div className="App">
        <div className="freecodecamp-logo-contenedor">
          <img
            className="freecodecamp-logo"
            src={freecodecampLogo} // Añadimos aquí la variable donde hemos importado la imagen png del logo
            alt="logo de freecodecamp"
          />
        </div>
        <h1>Ejercicio contador</h1>
        <div className="contenedor-numero-contador">
          <Contador numeroClics={numClics} />
        </div>  
        <div className="contenedor-botones">
          <BotonContador
            texto="Incrementar"
            esBotonDeClick={true}
            alHacerClick={funcionContador}
          />
          <BotonContador
            texto="Resetear"
            esBotonDeClick={false}  
            alHacerClick={funcionReset}
          />
          <BotonContador
            texto="Restar"
            esBotonDeClick={true}  
            alHacerClick={funcionRestar}
          />
        </div>
        
      </div>
    </>
  );
}

