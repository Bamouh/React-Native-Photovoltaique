import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLOR } from '../constants.js'
import * as TextData from "../text/Text.json";

export default class Footer extends Component{
  render(){
    return(
      <View>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate(this.props.screenTitle);}} style={{width:global.deviceLenght/3, height:global.deviceLenght/10,margin:10,backgroundColor:COLOR,flex:0,justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:'white',fontWeight:'bold',fontSize:this.props.fontSize}}>{this.props.buttonText}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
