// Estado de loading no POST

// podemos bloquear ações indevidas em outras requests tambem, como no POST

//uma ação interessante é remover a ação de adicionar outro item enquanto o request ainda não finalizou

//nesse caso basta incluir uma condicional para renderizar o botao de enviar por exemplo

{loading == false ? (<input type="submit" value="Criar produto" />) : ''}

// nesse caso o loading é um state que varia de true para false de acordo com o status da requisição

//quando vamos fazer a requisição ele muda para true, quando a requisição foi feita e os dados foram resgatados ele volta para o estado inicial de false

//com isso podemos somente mostrar para o usuario o botao de enviar quando a requisição terminar de executar