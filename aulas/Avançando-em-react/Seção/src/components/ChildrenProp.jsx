import React, {useState} from 'react'

const ChildrenProp = ({children, meuValor}) => {
  return (
    <div>
      <h1>
        Esse é o titulo do container
      </h1>
      {/* passando children */}
      {children}
      {/* passando props */}
      {meuValor}
    </div>
  )
}

export default ChildrenProp

