// Adicionando dados

// para adicionar um item vamos precisar resgatar os dados do form com o useState

//reunir eles em uma função após o submit e enviar um request de POST para a nossa a pi, lembrando que até agora usamos o GET (que somente resgata informações, o POST pode adicionar novas informações)

//o processo é bem parecido com o de resgate de dados, mas agora estamos enviando!

// para fazer uma requisiçao post, vamos usar a mesma sintaxe de um requisição GET usando fetch

const res = await fetch(url)// --> porem agora temos que passar 1 novo argumento para configurar de fato

//vamos passar um objeto como segundo argumento

//esse objeto contem 3 chaves --> method (onde vamos definir qual metodo da requisição) /// headers (cabecalho, onde vamos configurar o tipo de conteudo que vamos receber, no nosso caso json) ///  body (corpo, onde vamos indicar qual objeto vamos passar para ser adicionado a requisição)

//portando uma requisição com base em json deve ser feita assim

import React, { useState, useEffect } from 'react'

const App = () => {
    //states
    const [name, setProducts] = useState('')
    const [price, setPrice] = useState('')

    // url da requisição
    const url = 'http://localhost:3000/products'
    //vamos enviar em forma de objeto os valores dos states (que serao resgatados no input)
    const product = {
        name: name,
        price: price
    }

    // função da requisição (lembrando que deve ser de forma assincrona)
    const handleSubmit = async () => {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        })
    }


    return (
        <div>
            <h1>
                Requisição POST
            </h1>
            <div className="add-product">
                {/* AQUI VAMOS RECEBER DOS INPUTS OS VALORES DOS STATES NAME E PRICE  USANDO ONCHANGE*/}
                <form
                    onSubmit={handleSubmit}
                >
                    <label>
                        <span>
                            Adicionar Produto
                        </span>
                        <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label>
                        <span>
                            Adicionar Preço
                        </span>
                        <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
                    </label>
                    <input type="submit" value="Criar produto" />
                </form>
            </div>
        </div>
    )
}

export default App