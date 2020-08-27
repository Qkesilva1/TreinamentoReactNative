import React, { Component } from 'react'
import {Text, TextInput, Button, View} from 'react-native'
import Estilo from '../estilo'
import Numeros from './numero'

export default class Mega extends Component{
    
    state = {
        qtdeNum: this.props.qtdeNum,
        numeros: []
    }

    alterarQtdenum = (qtde) =>{
        this.setState({qtdeNum: +qtde})
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNum)
        .fill()
        .reduce(nums => [...nums, this.gerarNumeroNaoContido(nums)], [])
        .sort((a, b) => a - b)
        this.setState({numeros})
    }

    gerarNumeroNaoContido = nums =>{
        const novo = parseInt(Math.random() * 60) +1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <Numeros num={num} key={num}/>
        })
    }
    
    render(){
        return(
            <>
                <Text style={Estilo.txtG}>
                    Gerador de Mega-Sena 
                    {this.state.qtdeNum}
                </Text>
                
                <TextInput
                keyboardType={'numeric'}
                style={{borderBottomWidth: 1}}
                placeholder="Quantidade de Números"
                value={`${this.state.qtdeNum}`} 
                onChangeText={this.alterarQtdenum} 
                />

                <Button title="Gerar" onPress={this.gerarNumeros} />

                <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                    {this.exibirNumeros()}
                </View>

            </>
        )
 }
}
