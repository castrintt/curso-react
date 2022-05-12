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

            {/* usando a tag label de forma que englobe o input (com isso não precisamos usar o htmlFor) */}
        <hr />
                <label
                    className={styles.txt}
                >
                    <span>
                        Email
                    </span>
                    <input type="email" name="email" placeholder='Digite seu email' />
                </label>
                
            <input className={styles.sub} type="submit" value="Enviar" />

        </form>
    </div>
  )
}

export default MyForm