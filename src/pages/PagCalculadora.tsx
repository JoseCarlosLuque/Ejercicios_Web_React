import freecodecampLogo from "../imagenes/FreecodecampLogo.png";
import "../styles/PagCalculadora.css";
import { Calculadora } from "../components/Calculadora";

export function PagCalculadora() {
  return (
    <div className="contenedor-principal-pagina-calculadora">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freecodecampLogo} // Añadimos aquí la variable donde hemos importado la imagen png del logo
          alt="logo de freecodecamp"
        />
      </div>
      <div className="contenedor-calculadora">
        <Calculadora/>
      </div>
    </div>
  );
}
