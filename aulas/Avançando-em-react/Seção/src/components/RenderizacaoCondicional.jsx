import React,{useState} from 'react'


const RenderizacaoCondicional = () => {

    const [x, setX] = useState(true)

    function handleX(){
        setX(!x)
    }

  return (
    <div>
        <h1>
            Isso será exibido?
        </h1>
        {x ? <p>X é true então sim é exibido</p>: <p>Não será exibido pois x é False</p>}
        <button
            onClick={handleX}
        >
            Mudar valor de x
        </button>
        
    </div>
  )
}

export default RenderizacaoCondicional