import React from 'react'

const PropsDeObjetos = ({passandoObjeto, passandoListaSimples}) => {
  return (
    <div>
        <ul>
            {passandoObjeto.map((values) => (
                <li key={values.id}>
                    {values.name}
                </li>
            ))}
        </ul>
        <br />
        <ul>
                {passandoListaSimples.map((values, index) => (
                    <li key={index}>
                        {values}
                    </li>
                ))}
        </ul>
    </div>
  )
}

export default PropsDeObjetos