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