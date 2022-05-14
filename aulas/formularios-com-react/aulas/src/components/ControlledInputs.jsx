import React, {useState} from 'react'

//acessando a props passada dentro de App
const ControlledInputs = ({user}) => {

    const [name, setName] = useState( user ? user.name : '')
    const [email, setEmail] = useState( user ? user.email : '')

    return(
        <div>
            <form>
                <label>
                    <span>
                        Nome: 
                    </span>
                    <input type="text" name="text" value={name} />
                </label>
                <label>
                    <span>
                        Email:    
                    </span>
                    {/* dessa forma o input ja vem pre-definido */}
                    <input type="email" name="email" value={email} />
                </label>
            </form>
        </div>
    )
}

export default ControlledInputs