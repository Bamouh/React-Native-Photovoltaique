//Deuxième écran chronologiquement
import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import { COLOR } from '../constants.js'
import CustomButton from '../elements/CustomButton.js';
import Footer from '../elements/Footer.js';
import * as TextData from "../text/Text.json"

export default class Home2Screen extends Component{
  constructor(props){
    super(props);
    this.state = { uniqueValue: 1 };
  }
  render(){
    let textSize = 0.041*global.deviceLenght;
    return(
      <View style={{flex:1,flexDirection:'column'}}>
        <ScrollView>
        <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:COLOR,fontSize:(3/2)*textSize,fontWeight:'bold'}}> {global.languageSource.screen2Title}</Text>
          <View style={{flex:-1,flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',maxHeight:(2/3)*global.deviceLenght+20}}>
            <View style={{flex:1,flexDirection:'column'}}>
              <Image source ={require('../img/acceuil/pan1.png')} resizeMode='contain' style={{maxHeight: global.deviceLenght/3, maxWidth: global.deviceLenght/2,margin:5}} />
              <Image source ={require('../img/acceuil/pan2.png')} resizeMode='contain' style={{maxHeight: global.deviceLenght/3, maxWidth: global.deviceLenght/2,margin:5}} />
            </View>
            <View style={{width:0,flex:1}}>
              <Text style={{color:COLOR, fontSize:textSize ,fontWeight:'bold',flexWrap:'wrap',padding:10}}> {global.languageSource.screen2P1} </Text>
            </View>
          </View>
          <View style={{flex:1,flexDirection:'column',alignItems:'center'}}>
            <Text style={{color:COLOR,fontSize:textSize,fontWeight:'bold'}}> {global.languageSource.screen2P2}</Text>
            <Image source ={require('../img/acceuil/pan3.png')} style={{maxHeight: global.deviceLenght/3, maxWidth: global.deviceLenght-10, padding:10}} />
            <CustomButton screenTitle='Main' navigation={this.props.navigation} fontSize={textSize} buttonText={global.languageSource.boutons.commencer}/>
          </View>
        </View>
        </ScrollView>
        <Footer screenTitle="Acceuil" navigation={this.props.navigation} refresh={this.state.uniqueValue}/>
      </View>
    );
  }
}
