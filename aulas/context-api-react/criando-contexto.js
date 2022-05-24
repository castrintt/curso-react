// Criando contexto

//Primeiramente vamos ter que criar o Context

//O arquivo deve sempre ter a primeira letra maiúscula no nome, e geralmente termina em Context: SomeContext.jsx

//a convenção é deixar na pasta context em src

//Onde vamos utilizar o valor do contexto, o arquivo precisa ser importado

// para criar um contexto temos que importa-lo do react, logo:

import {createContext, useState} from 'react'

//e devemos exportar ele de forma default

export default NomeDaPastaContext = createContext() // assim o react consegue acessar esse contexto em outro lugar, porem agora precisamos setar como alterar esse contexto. Somente com o createContext não fariamos nada

// para isso criamos o Provider que é a segunda etapa do contexto

