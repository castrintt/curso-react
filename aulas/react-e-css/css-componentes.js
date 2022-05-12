// CSS de componentes

// o css de componente é utilizado para um componente especifico, ou seja é um estilo de escopo fechado (somente aquele componente vai ser alvo)

// geralmente é criado com o mesmo nome do componente, porem com a extensão .css e logo este é importado dentro do componente em si

//Note que esse metodo não é scoped, ou seja, o CSS vaza para outros componentes se houver uma regra em colisao

// o React ja cria um exemplo desta tecnica com o App.css/js

//Tome cuidado com os estilos nessa tecnica, pois se vc estilizar um paragrafo por exemplo em um componente filho, e importa-lo no componente pai, posteriormente criar tbm um paragrafo dentro do componente pai, o css do componente filho vai vazar para o componente pai!


//OBS --> não é a melhor tecnica (devemos ficar bem atentos)