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
