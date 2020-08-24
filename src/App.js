import React from 'react'
import { View, StyleSheet} from 'react-native'

import Aleatorio from './components/Aleatorio'

import MinMax from './components/minMax'
/* import CompPadrão ,{ Comp1, Comp2 } from './components/Multi'
import Texto from './components/Primeiro' */

import Estilo from './components/estilo'

export default () => (
<View style={style.App}>
    <Aleatorio min={10} max={100} />
    <Aleatorio min={10} max={100} />
    <Aleatorio min={10} max={100} />
    <Aleatorio min={10} max={100} />
    <Aleatorio min={10} max={100} />
    <Aleatorio min={10} max={100} />
    {/*<MinMax min={2} max={20} />
    <MinMax min={10} max={100} />
     <CompPadrão/>
    <Comp1/>
    <Comp2/>
    <Texto/> */}
</View>
)

const style = StyleSheet.create({
    App:{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: 'center',
        padding: 20 
    }
})


