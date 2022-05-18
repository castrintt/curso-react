// Tratando erros

// podemos tratar os erros das requisições por meio de um try catch

// alem de pegar os dados do erro, tambem podemos alterar um state para imprimir um elemento se algo der errado

// desta maneira consegumos prever varios cenários (dados resgatados, carregamento e erro)

// até agora fizemos requisições do tipo get e post, para resgatar dados e adicionar dados

// porem pode acontecer algum erro durante essas requisições, para isso vamos tratar esses erros usando um simples sistema de try{} catch{}

// o try basicamente tenta executar um bloco de codigo

// se der certo ok, o codigo continua rodando

// se alguma coisa estiver errada, vamos pegar esse erro usando o catch

//porque isso é util?

// usando try catch podemos tratar o erro e evitar que o programa pare de rodar ou quebre bruscamente, se o try não executar o programa continua rodando e passa para o catch, onde podemos pegar o erro passando como parametro para o catch o proprio erro (err) e no blocod e codigo executar um console.log() com o erro

//ex

try{
    //bloco de codigo aqui
}catch(err){
    console.log(`O erro é --> ${err}`)
}

// no nosso caso vamos fazer o bloco do try catch durante a requisição de get, ou seja, caso aconteça algum erro na hora de pegar recuperar dados

//primeiro vamos criar um estado para constante error

const [error, setError] = useState(null) // com estado inicial de null

//depois disso vamos usar o bloco de try dentro da função assincrona 


useEffect(() => {
    const fetchData = async () => {
        setLoading(true)
        try {
            const res = await fetch(url)

            const json = await res.json()

            setData(json)
            
        } catch (error) { // caso a requisição falhe o state de error vai receber essa mensagem
            setError('houve um erro ao carregar dados')
        }
        setLoading(false)
    }

// dito isso vamos retornar no final dessa função o state error para consumir ele dentro do App

return {error}

// dentro de app (consumindo)

const {error} = useFetch() //--> desestruturando a função useFetch (onde existe as funções para requisição post e get)

//para usar dentro do JSX agora é bem simples, basta adicionar a linha

{error != null && <p>{error}</p>}

//ou seja, se a condição (error != null) --> error diferente de null vai executar o bloco onde depois do operador de comparação && (and, [e])