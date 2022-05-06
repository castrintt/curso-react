import React from 'react'

const TemplateExpressions = () => {

    const nome = 'Tiago'

    let lista = [
        {
            'nome':'igor',
            'idade':23
        },
        {
            'nome':'isabela',
            'idade':17
        }
    ]

  return (
    <div className='Root'>
        <h1>
           Nome Gerente:  { nome }
        </h1>

        <h2>
            Nome Funcionarios: { lista[1]['nome'] } e { lista[0]['nome'] }
            <br />
            Idade Funcionario: { lista[1]['idade'] } anos e { lista[0]['idade'] }
        </h2>
    </div>
  )
}

export default TemplateExpressions


// pode ser feito assim tbm

// import React from 'react'

// const TemplateExpressions = () => {

//     const nome = 'Tiago'

//     let lista = [
//         {
//             nome:'igor',
//             idade:23
//         },
//         {
//             nome:'isabela',
//             idade:17
//         }
//     ]

//   return (
//     <div className='Root'>
//         <h1>
//            Nome Gerente:  { nome }
//         </h1>

//         <h2>
//             Nome Funcionarios: { lista[1].nome } e { lista[0].nome }
//             <br />
//             Idade Funcionario: { lista[1].idade } anos e { lista[0].idade }
//         </h2>
//     </div>
//   )
// }

// export default TemplateExpressions