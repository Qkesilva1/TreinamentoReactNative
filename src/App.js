// import ListaProduto from './components/produtos/ListaProdutos'
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2'



// import Usuario from './components/usuarioLogado'
// import Pais from './components/relacao/Pai'
// import Filho from './components/relacao/Filho'

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
// import DigiteSeuNome from './components/digiteSeuNome/digiteSeuNome'
// import Quadrado from './components/layout/quadrado'
// import FlexBoxV1 from './components/layout/FlexBoxV1'
// import FlexBoxV2 from './components/layout/FlexBoxV2'
// import FlexBoxV3 from './components/layout/FlexBoxV3'
// import FlexBoxV4 from './components/layout/FlexBoxV4'
import React from 'react'
import { StyleSheet, SafeAreaView} from 'react-native'
import Mega from './components/mega/Mega'


export default () => (
<SafeAreaView style={style.App}>

    <Mega  qtdeNum={`${13}`} />

    {/* 
    <FlexBoxV4 style={style.FlexV4} />
    <FlexBoxV1 style={style.FlexBoxV1} />
    <Quadrado />
    <Quadrado cor='#ff801a' />
    <Quadrado cor='#50d1f6' />
    <Quadrado cor='#dd22c1' />
    <Quadrado cor='#8312ed' />
    <Quadrado cor='#36c9a7' />
    <DigiteSeuNome />
    <ListaProdutosV2 />
    <Usuario usuario={{nome: 'Cleiton', email:'Cleiton@email.com'}}/>
    <Usuario usuario={{nome: 'Cleriston'}}/>
    <Pais>
        <Filho nome="Rael" sobreNome="Silva Miranda" />
    </Pais>
    <Pais>
        <Filho nome="Noah" sobreNome="Silva" />
    </Pais>
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


