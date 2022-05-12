import React from 'react'
import styles from '../styles/CssModules.module.css'

const CssModules = () => {
    // foi criado um arquivo com o mesmo nome desse porem com a extensão module.css
    //nesse caso --> CssModules.module.css
  return (
    <div >
        <h1 className={styles.title}> 
            Vamos usar aqui o CSS modules !
        </h1>
    </div>
  )
}

export default CssModules