import React from 'react'
import Filho from './Filho'
import { Text } from 'react-native'

export default props =>{
    return(
        <>
            <Text>Filhos</Text>
            {props.children}
        </>
    )
}