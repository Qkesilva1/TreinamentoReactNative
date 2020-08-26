import React from 'react'
import { StyleSheet, SafeAreaView} from 'react-native'
import Pai from './components/relacao/Pai'

// import ParImpar from './components/ParImpar'

// import Diferenca from './components/diferenciar'

// import ContadorV2 from './components/contador/contadorV2'


// import Pai from './components/indireta/Pai'
// import Pai from './components/direta/Pai'

/* import Aleatorio from './components/Aleatorio'

import MinMax from './components/minMax' */
/* import CompPadrão ,{ Comp1, Comp2 } from './components/Multi'
import Texto from './components/Primeiro' */

// import Contador from './components/contador'
// import Estilo from './components/estilo'
/* import Titulo from './components/Titulo'
import Botao from './components/Botao' */

export default () => (
<SafeAreaView style={style.App}>

    <Pai />

    {/* 
    <ParImpar num={51653} />
    <Diferenca />
    <Pai/> 
    <ContadorV2 />
    <Contador inicial={100} passo={2} />
    <Contador/>
    <Botao/>
    <Titulo principal="Cadastro de Produto" segundario="Tela de cadastro de produto" /> 
    <Aleatorio min={10} max={100} />
    <Aleatorio min={10} max={100} />
    <Aleatorio min={10} max={100} />
    <Aleatorio min={10} max={100} />
    <Aleatorio min={10} max={100} />
    <Aleatorio min={10} max={100} />
    <MinMax min={2} max={20} />
    <MinMax min={10} max={100} />
     <CompPadrão/>
    <Comp1/>
    <Comp2/>
    <Texto/> */}

</SafeAreaView>
)

const style = StyleSheet.create({
    App:{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: 'center',
        padding: 20 
    }
})


