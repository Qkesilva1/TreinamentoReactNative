import React, {useState} from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'

import Display from './contadorDisplay'
import Botoes from './contadorBotoes'

export default props =>{

    const [num, setNum] = useState(0)

    const inc = () => setNum(num + 1)
    const dec = () => setNum(num - 1)

    return(
        <>
            <Text style={Estilo.txtG}>
                Contador
            </Text>
            <Display num={num}/>
            <Botoes inc={inc} dec={dec} /> 
        </>
    )
}

