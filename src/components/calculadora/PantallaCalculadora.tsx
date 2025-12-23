
import '../../styles/calculadoraStyles/PantallaCalculadora.css'

interface Props {
    input: String
}


export function PantallaCalculadora ({input}:Props) {

    return (
        <div className='input'>
            {input}
        </div>
    )
}