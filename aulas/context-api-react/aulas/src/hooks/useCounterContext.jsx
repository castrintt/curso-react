import {useContext } from 'react'
import { CounterContext } from '../context/CounterContext'


export const useCounterContext = () => {
    const context = useContext(CounterContext)

    if(!context){ // se não existe mais contexto
        console.log('Contexto não encontrado')
    }else{
        return context
    }
}