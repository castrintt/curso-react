// Refatorando o POST

//podemos utilizar o mesmo hook para incluir uma etapa de POST (com mesmo hook eu digo o custom hook que usamos anteriormente)

// vamos criar um novo useEffect que mapeia uma outra mudança de estado

// Após ela ocorrer executamos a adição de produto

// OBS: nem sempre reutilizar um hook é a melhor estrategia

//dentro de useFetch vamos receber agora mais 3 estados e 2 funções

//

//estados
const [config, setConfig] = useState(null)
const [method, setMethod] = useState(null)
const [callFetch, setCallFetch] = useState(false)


//funções
//configura a requisição
const httpConfig = (data, method) => {
    if (method === "POST") {
        setConfig({
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }

    setMethod(method)
}

// faz a requisição
useEffect(() => {
    const httpRequest = async () => {
        if (method == "POST") {

            let fetchOptions = [url, config]

            const res = await fetch(...fetchOptions)

            const json = await res.json()

            setCallFetch(json)

        }
    }
    httpRequest()

}, [config, method, url])


// assim podemos reaproveitar em outros componentes 