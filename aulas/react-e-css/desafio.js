// 1) crie um novo projeto chamado challengecss

npm create vite@latest

// 2) no css global zere o margim, padding e coloque uma fonte que voce goste

body{
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}

// 3) crie um componente que exibe detalhes de carros, este componente deve ser estilizado com scoped

//componente

import React ,{useState} from 'react'
import styles from '../styles/CarDetails.module.css'

const CarDetails = ({km, marca}) => {
    

    return(

        <div className={styles.apresentacao__carro}>
            <h1 className={styles.titulo__carro}>
                Marca do Carro : <br /> {marca}
            </h1>
            <br />
                { km == 0 ? (<p
                    className={styles.paragrafo__carro_novo}
                >
                    Carro Novo !
                </p>): (
                    <p
                        className={styles.paragrafo__carro_usado}
                    >
                        Carro usado!
                    </p>
                )}

        </div>
    )
}

export default CarDetails

//css


.apresentacao__carro{
    border: 1px solid grey;
}

.titulo__carro{
    text-decoration: underline;
    color: grey;
    text-transform: uppercase;
}

.paragrafo__carro_usado{
    font-weight: bold;
    position: relative;
    top: -30px;
    color: red;
}

.paragrafo__carro_novo{
    font-weight: bold;
    position: relative;
    top: -30px;
    color: green;
}

// 4 ) exiba pelo menos 3 carros

import { useState } from 'react'
import CarDetails from './components/CarDetails.jsx'


function App() {

  const [details, setDetails] = useState([
    {
      km:0,
      marca:'Fox',
      id:1
    },
    {
      km:10000,
      marca:'Fiat',
      id:2
    },
    {
      km:100,
      marca:'BMW',
      id:3
    },
    
  ])
 
  return (
    <div className="App">
      <h1
        style={{
          textTransform:'uppercase',
          textDecoration:'underline',
          color:'blue'
        }}
      >
        Titulo Componente Pai
      </h1>
      {details.map((values) => (     
        <CarDetails key={values.id} marca={values.marca} km={values.km}/>
      ))}
    </div>
  )
}

export default App


// 5)  coloque um titulo em App.js, para o seu projeto estilize com o App.css

//componente

import { useState } from 'react'
import CarDetails from './components/CarDetails.jsx'
import './styles/App.css'


function App() {

  const [details, setDetails] = useState([
    {
      km:0,
      marca:'Fox',
      id:1
    },
    {
      km:10000,
      marca:'Fiat',
      id:2
    },
    {
      km:100,
      marca:'BMW',
      id:3
    },
    
  ])
 
  return (
    <div className="App">
      <h1
        style={{
          textTransform:'uppercase',
          textDecoration:'underline',
          color:'blue'
        }}
      >
        Titulo estilizado usando css inline!
      </h1>
      <h1 className='titulo__app'>
        Titulo estilizado usando App.css
      </h1>
      {details.map((values) => (     
        <CarDetails key={values.id} marca={values.marca} km={values.km}/>
      ))}
    </div>
  )
}

export default App


// App.css

.titulo__app{
    text-decoration: underline;
    text-transform: capitalize;
}