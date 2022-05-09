import React from 'react'

const NameDetails = ({name, age, profession}) => {
  return (
    <div>
        <p>
            Nome do usuario : {name}
            <br />
            <hr />
            Idade do usuario : {age}
            <br />
            <hr />
            Profissão do usuario : {profession}
        </p>
        <br /><br />
    </div>
  )
}

export default NameDetails