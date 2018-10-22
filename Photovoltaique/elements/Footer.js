import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {  Header } from 'react-navigation';
import * as TextData from "../text/Text.json";

export default class Footer extends Component{

  render(){ //Textes a remplacer avbec une image
    let height_footer = 2*Header.HEIGHT/3
    return(
      <View style={{flex:0,flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end', height: height_footer, width: Header.WIDTH}}>
        <Text style={{height: height_footer, width: height_footer, backgroundColor:'red'}}>head</Text>
        <LanguageButton src={require('../img/french.png')} max_width={height_footer} max_height={height_footer} navigation={this.props.navigation} screenTitle={this.props.screenTitle} language={TextData.french} refresh={this.props.refresh}/>
        <LanguageButton src={require('../img/morroco.png')} max_width={height_footer} max_height={height_footer} navigation={this.props.navigation} screenTitle={this.props.screenTitle} language={TextData.arabic} refresh={this.props.refresh}/>
        <Text style={{height: height_footer, width: height_footer, backgroundColor:'blue'}}>head</Text>
      </View>
    );
  }
}

class LanguageButton extends Component{
  forceRefresh = () => {
    this.setState((refresh) => ({refresh: refresh + 1}));
  }
  render(){
    return(
      <View>
        <TouchableOpacity onPress= {()=>{global.languageSource = this.props.language; this.props.navigation.navigate(this.props.screenTitle); this.forceRefresh()}} style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <Image source={this.props.src} style={{maxHeight: this.props.max_height, maxWidth: this.props.max_width}} />
        </TouchableOpacity>
      </View>
    );
  }
}
