import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default props => {
    const {min, max} = props
    const delta = max - min + 1
    const aleatório = parseInt(Math.random() * delta) + props.min
    return(
    <Text style={Estilo.txtG}>
        O valor aleatório é {aleatório}!
    </Text>
    )
}