// JSX é basicamente o HTML do react

// onde vamos declarar as tags de HTML que serão exibidas no navegador

//ficam no return do componente

//lembrando...

const Componente = () => {
    return (
        //componente aqui
    )
}

//temos algumas diferenças do HTML , por exemplo :  --> class tem a sintaxe de className=''

//isso se da pelas instruções semelhantes de js e HTML, pois o jsx é Javascript, então algumas terão nomes diferentes


// o JSX pode ter apenas um elemento pai ( ou elemento root )

//oque isso quer dizer?

//quer dizer que todo conteudo HTML deve estar envolvido por uma unica tag

//ex

const ComponentName = () => {
    return (
        <div className="root">
            {/* todo codigo deve ficar dentro dessa tag unica,
            dentro dela voce pode criar quantas seções quiser, quantas divs quiser, SOMENTE se estiver dentro da tag root */}
        </div>
    )
}