import '../styles/PagTestimonios.css'
import {Testimonio} from '../components/Testimonio'

export function PagTestimonios() {
  //const [count, setCount] = useState(0)

  return (
    <>
        <div className='App'>
            <h1>Ejercico de maquetación</h1>
            <div className='Contenedor-principal'>
                <Testimonio index={0}/>
                <Testimonio index={1}/>
                <Testimonio index={2}/>
            </div>
            
        </div>
    </>
  )
}

