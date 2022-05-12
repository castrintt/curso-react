import React, {useState} from 'react'

const ManipulandoValores = () => {

    const [valor, setValor] = useState('')

    const handleConsole = (e) => {
        e.preventDefault()
        console.log(valor)
    }

    return(
        <div>
            <form>
                <label>
                    <span>
                        Digite seu Email
                    </span>
                    <input type="email" name="email" placeholder='Digite seu email!' onChange={(e) => {
                        
                        setValor(e.target.value)
                    }}/>
                </label>
                <button
                    onClick={handleConsole}
                >
                    Clique e veja o console!
                </button>
            </form>
        </div>
    )
}

export default ManipulandoValores