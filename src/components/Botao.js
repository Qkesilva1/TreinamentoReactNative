import React from 'react'
import { Button } from 'react-native'

export default props => {

    function Executar(){
        console.warn(('Exec!!!'))
    }

    return(
        <Button 
        title="Executar!"
        onPress={Executar} />
    )
}