import React from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'
import Produtos from './produtos'
import produtos from './produtos'

export default props =>{
    function obterLista() {
        return produtos.map(p => {
            return <Text key={p.id}>{p.id} {p.nome} tem preço de R$ {p.preco}</Text>
        })
    }

    return(
        <>
            <Text style={Estilo.txtG}>
                Lista de Produtos
            </Text>
            
            {obterLista()}
        </>
    )
}