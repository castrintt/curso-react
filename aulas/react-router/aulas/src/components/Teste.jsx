import React,{useState} from 'react' 

const Teste = () => {

    const [data, setData] = useState(null)


    const handleButton = () => {
        setData()
    }

    // '', null, undefined, false == false 
    
    // 'string', number, true, array, object == true

  return (
    <div>
        {data && <p>ok</p>}
        <button
            onClick={handleButton}
        >
            alterar
        </button>
    </div>
  )
}

export default Teste