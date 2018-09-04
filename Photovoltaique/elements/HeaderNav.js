//Le Header de l'application
import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';
import {  Header } from 'react-navigation';
import { COLOR } from '../constants.js'

export default class HeaderNav extends Component{
  render(){
    let textSize = 0.041*global.deviceLenght;
    return(
      <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:COLOR,fontSize: textSize,fontWeight:'bold'}}> Aire Photovoltaïque </Text>
        <Image source ={require('../img/acceuil/sun.png')} style={{maxHeight: Header.HEIGHT-1, maxWidth: Header.HEIGHT-1}} />
      </View>
    )
  }
}
