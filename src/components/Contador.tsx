

interface Props {
    numeroClics: number;
}

export function Contador({numeroClics}:Props) {

    return (
       <div>
        {numeroClics}
       </div>
    )
}