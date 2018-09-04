import React, {Component} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {  Header } from 'react-navigation';

export default class Footer extends Component{
  render(){ //Textes a remplacer avbec une image
    return(
      <View style={{flex:0,flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end',height:2*Header.HEIGHT/3,width:Header.WIDTH}}>
        <Text style={{height:2*Header.HEIGHT/3,width:2*Header.HEIGHT/3,backgroundColor:'red'}}>head</Text>
        <Text style={{height:2*Header.HEIGHT/3,width:2*Header.HEIGHT/3,backgroundColor:'blue'}}>head</Text>
      </View>
    );
  }
}
