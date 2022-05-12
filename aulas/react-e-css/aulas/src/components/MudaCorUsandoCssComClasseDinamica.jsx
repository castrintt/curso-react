import React, {useState} from 'react'
import '../styles/MudaCorUsandoCssComClasseDinamica.css'

const MudaCorUsandoCssComClasseDinamica = () => {

    const [data, setData] = useState(false)

    const handleData = () => {
        return setData(!data)
    }

  return (
    <div>
        {/* DEFINIMOS EM STRING QUAL A CLASSE O ELEMENTO RECEBERA */}
        <h1 
            className={data == true ? 'cor__verde' : 'cor__azul'}
            //nesse caso se data for true a classe usada sera a alteraCor, caso data seja false a classe usada sera alteraFundo
        >
            Componente para Uso do css dinamico (usando o css com classes dinamicas!)
        </h1>
        <button
            onClick={handleData}
        >
            Altere a cor do texto!
        </button>
    </div>
  )
}

export default MudaCorUsandoCssComClasseDinamica