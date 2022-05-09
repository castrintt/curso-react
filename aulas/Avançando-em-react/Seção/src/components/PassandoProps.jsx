import React from 'react'

const PassandoProps = (props) => {


  return (
    <div>
        <h1>
            O nome do usuario: {props.name}
        </h1>
        <br />
        <h1>
            A props passada usando template Expressions: {props.newName}
        </h1>
    </div>
  )
}

export default PassandoProps