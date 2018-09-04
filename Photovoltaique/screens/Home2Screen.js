//Deuxième écran chronologiquement
import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import { COLOR } from '../constants.js'
import CustomButton from '../elements/CustomButton.js';
import Footer from '../elements/Footer.js';

export default class Home2Screen extends Component{
  render(){
    let textSize = 0.041*global.deviceLenght;
    return(
      <View style={{flex:1,flexDirection:'column'}}>
        <ScrollView>
        <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:COLOR,fontSize:(3/2)*textSize,fontWeight:'bold'}}> Aire Photovoltaïque :</Text>
          <View style={{flex:-1,flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',maxHeight:(2/3)*global.deviceLenght+20}}>
            <View style={{flex:1,flexDirection:'column'}}>
              <Image source ={require('../img/acceuil/pan1.jpg')} resizeMode='contain' style={{maxHeight: global.deviceLenght/3, maxWidth: global.deviceLenght/2,margin:5}} />
              <Image source ={require('../img/acceuil/pan2.jpg')} resizeMode='contain' style={{maxHeight: global.deviceLenght/3, maxWidth: global.deviceLenght/2,margin:5}} />
            </View>
            <View style={{width:0,flex:1}}>
              <Text style={{color:COLOR, fontSize:textSize ,fontWeight:'bold',flexWrap:'wrap',padding:10}}> Engagé dans une politique de réduction de réduction des émissions de gaz a effet de serre, le Centre d'Education a l'Environnement entend revoir au plus vite la composition de son mix électrique et promouvoir l''ensemble des énergies décarbonées.</Text>
            </View>
          </View>
          <View style={{flex:1,flexDirection:'column',alignItems:'center'}}>
            <Text style={{color:COLOR,fontSize:textSize,fontWeight:'bold'}}> Vous êtes dans l''aire de stationnement.</Text>
            <Image source ={require('../img/acceuil/pan3.jpg')} style={{maxHeight: global.deviceLenght/3, maxWidth: global.deviceLenght-10, padding:10}} />
            <CustomButton screenTitle='Main' navigation={this.props.navigation} fontSize={textSize} buttonText='Commencer'/>
          </View>
        </View>
        </ScrollView>
        <Footer />
      </View>
    );
  }
}
