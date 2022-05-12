// Formularios e React

// no React vamos tambem utilizar a tag form para formularios

// as labels dos inputs contem o atributo htmlFor, que deve ter o valor do name do input

//ex

{/* <label htmlFor="texto">Input de texto aqui!</label>
<input type="text" name="texto" /> */}

// Não utilizamos action, pois o processamento sera feito de forma assincrona


//vamos criar nosso primeiro formulario

//componente pai

import { useState } from 'react'
import MyForm from './components/MyForm'


function App() {
 
  return (
    <div className="App">
     <h1>
       Bem vindo a nova seção!
     </h1>
     <hr />
     <MyForm />
    </div>
  )
}

export default App


//componente filho (MyForm.jsx)

import React, {useState} from 'react'

import styles from'../styles/MyForm.module.css'

const MyForm = () => {
  return (
    <div className={styles.div__form}>
        {/* criando formulario */}
        <form className={styles.form}>
            <div className={styles.txt}>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="text" placeholder='Digite o seu nome' />
            </div>
            <input className={styles.sub} type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm

// css do componente filho (scoped) usando module.css

.div__form{
    margin: 0 auto;
    height: 200px;
    text-align: center;
}
.form{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}

.txt{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
}