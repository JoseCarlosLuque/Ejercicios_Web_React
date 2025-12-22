import '../styles/testimonio.css';
import testimoniosData from '../constants/texts/testimoniosData.json'

// Firma que ha de cumplir el prop y especificación de los tipos
interface Props {
  index : number; 
};


export function Testimonio({index} :Props) {
  
  const t = testimoniosData.testimonios[index];
  if(!t) return null; // Evita errores si el índice no existe

  return (
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" src={t.imagen} alt="Imagen del testimonio" />
      <div className="contenedor-texto-testimonio">
        <p className="titulo-testimonio">{t.titulo}</p>  
        <p className="cargo-testimonio">{t.cargo}</p>
        <p className="texto-testimonio">{t.texto}</p>
      </div>
    </div>
  );
}



// Se puede acceder directamente a una imagen desde public, de otra forma hay que importarla.
//../imagess/EmmaBostian.png
// Tener muy en cuenta que los componentes van en MAYUSCULA.