// Link Ativo

// para ter acesso a uma modificação para os links ativos vamos trocar o link pelo NavLink

// neste elemento temos acesso a um valor chamado isActive

// ou seja, podemos ativar uma classe se a rota atual for a que está no atributo to

//para isso vamos importar o NavLink de react-router-dom

// import {Link, NavLink} from 'react-router-dom'

//usamos ele da mesma forma que usamos o Link --> ele serve como ancora tbm

//se estilizarmos um componente e usarmos a classe .active, o NavLink automaticamente vai entender que deve ser ativado somente quando estiver na rota

//ex

import {NavLink} from 'react-router-dom'
import '../styles/NavBar.css'

const NavBar = () => {

    return(

        <>
            <NavLink to='/' className='link'>
                Home
            </NavLink>
            <NavLink to='/about' className='link'>
                About
            </NavLink>
        </>
    )
}

export default NavBar


//dentro do css temos

.link {
    margin: 0 10px;
    padding: 5px;
    text-decoration: none;
    color: #000;
  }

//e agora temos tbm aclasse active que mudara o estilo do componente se ele estiver ativo (ou seja, se a rota dele estiver ativa)

.active {
    background-color: #000;
    color: #fff;
}


//podemos tbm executar de forma dinamica tbm usando a seguinte sintaxe no className dentro de NavLink

<NavLink to='/rota-qualquer'  className={({  isActive  }) => (isActive ? 'active' : undefined)}>
    Rota
</NavLink>


// essa forma é util caso queria aplicar por exemplo um estilo diferente paras rotas desativadas

//explicando a condicional, estamos acessando isActive, que resolve uma arrow function para um if ternario, caso isActive seja chamado executa o bloco da interrogação ( ?  --> 'active') ou seja, chama a classe active quando esta ativo, caso não esteja ative chama a resolução dos 2 pontos ( : --> undefined) ou seja, nada acontece caso a rota não esteja selecionada


//essa é uma possibilidade, porem o mais usado mesmo é um estilo com a classe .active e o react ja entende q é para usar essa classe quando a rota estiver selecionada



// Resumindo existem 2 formas de usarmos o Navlink para determinar qual rota está ativa ou não

// a primeira é muito simples, basta ter um estilo que se chame .active, e o react identifica automaticamente qual rota está ativa e usa esse estilo

// a segunda é um pouco mais dinamica e menos usual, onde dentro de className (usando template expressions) vamos passar uma arrow function que resolve um if else ternario, passamos como parametro para essa arrow function um objeto isActive

// logo ficaria assim :

{/* <NavLink to='/rota-qualquer' className={({ isActive }) => (isActive ? 'nome de uma classe quando esta ativo' : 'nome de uma classe quando está inativo')} */}