//Ecran de Simulation de fonctionnement
import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Footer from '../elements/Footer.js';
import { COLOR } from '../constants.js'
import * as TextData from "../text/Text.json";

export default class Sf2Screen extends Component{
  static navigationOptions = {
    drawerLabel: 'Simulation de Fonctionnement',
  };
  constructor(props){
    super(props);
    this.state = { uniqueValue: 1 };
  }
  render(){
    //let im = <Image source={require('../img/pan5.gif')} style={{height: global.deviceLenght,width: global.deviceLenght}} />
    let textSize = 0.041*global.deviceLenght;
    return(
      <View style={{flex:1,flexDirection:'column'}}>
        <ScrollView>
        <View style={stylesSf2.containerStyle}>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Main")}>
              <Image source={require('../img/back.png')} style={{height: global.deviceLenght/7, width: (global.deviceLenght/7)+10}} />
            </TouchableOpacity>
            <View style={{width:0,flex:1}}>
              <Text style={{fontWeight: 'bold',fontSize: (5/4)*textSize,color:COLOR,marginHorizontal:10}}>{global.languageSource.sf2Screen.titre}</Text>
            </View>
          </View>
          <View style={{flex:1,padding:10}}>
          <Image
            source={require('../img/pan5.gif')}
            style={{height: global.deviceLenght,width: global.deviceLenght}}
          />
          </View>
        </View>
        </ScrollView>
        <Footer screenTitle="Sf2" navigation={this.props.navigation} refresh={this.state.uniqueValue}/>
      </View>
    );
  }
}

const stylesSf2 = StyleSheet.create({
    containerStyle:{
      flex:1,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
    }
});
