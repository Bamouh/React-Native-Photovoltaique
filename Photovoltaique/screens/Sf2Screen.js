//Ecran de Simulation de fonctionnement
import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Footer from '../elements/Footer.js';
import { COLOR } from '../constants.js'

export default class Sf2Screen extends Component{
  static navigationOptions = {
    drawerLabel: 'Simulation de Fonctionnement',
  };

  render(){
    let im = <Image source={require('../img/pan5.jpg')} style={{height: global.deviceLenght,width: global.deviceLenght}} />
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
              <Text style={{fontWeight: 'bold',fontSize: (5/4)*textSize,color:COLOR,marginHorizontal:10}}>Simulation de fonctionnement</Text>
            </View>
          </View>
          <View style={{flex:1,padding:10}}>
            <Image source={require('../img/pan5.jpg')} style={{height: global.deviceLenght,width: global.deviceLenght}} />
          </View>
        </View>
        </ScrollView>
        <Footer />
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
