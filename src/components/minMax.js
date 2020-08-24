import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default (props) => (
    <Text style={Estilo.txtG}>
        O valor de {props.max} é maior que o valor {props.min}!
        O valor de {props.min} é menor que o valor {!props.max}
    </Text>
    )
