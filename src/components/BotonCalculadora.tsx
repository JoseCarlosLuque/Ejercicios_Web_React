import '../styles/BotonCalculadora.css'

interface Props {
    simbolo: string;
}

export function BotonCalculadora ({simbolo} : Props ) {

    const esOperador = (simbolo:string) => {
         // Para la función isNaN hay que forzar el tipo por el tipado estricto de Typescript.
        return isNaN(Number(simbolo)) && (simbolo != '.') && (simbolo != '=')
    }

    return (
        /* En este caso, la clase aparecerá separada, por lo tanto se necesitará hacer un trim antes para que no 
        salga el espacio, en cuanto al final "operador" se quedará como una clase distinta a la que habrá que aplicar
        de nuevo los estilos extra.
        */
        <button className={`boton-calculadora ${esOperador(simbolo) ? 'operador' : '' }`.trimEnd()}>
            {simbolo}
        </button>
    )
}