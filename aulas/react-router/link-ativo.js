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


//podemos tbm executar 