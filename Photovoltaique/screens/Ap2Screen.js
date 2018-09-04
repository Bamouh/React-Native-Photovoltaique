//Ecran Description et Caractéristiques
import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, ScrollView } from 'react-native';
import { COLOR } from '../constants.js'
import Footer from '../elements/Footer.js';

export default class Ap2Screen extends Component{
  static navigationOptions = {
    drawerLabel: 'Description et Caractéristiques',
  };

  render(){
    let textSize = 0.041*global.deviceLenght;
    return(
      <View style={{flex:1,flexDirection:'column'}}>
        <ScrollView>
          <View style={{flex:1,flexDirection:'column'}}>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:10}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Main")}>
                <Image source={require('../img/back.png')} style={{height: global.deviceLenght/7, width: (global.deviceLenght/7)+10}} />
              </TouchableOpacity>
              <View style={{width:0,flex:1}}>
                <Text style={{color:COLOR,fontSize: (5/4)*textSize,fontWeight:'bold',marginHorizontal:10}}>Description & Caractéristiques</Text>
              </View>
            </View>
            <Text style={{color:COLOR,fontSize: (5/4)*textSize,fontWeight:'bold',margin:5}}>-La cellule Photovoltaïque utilisée est de type "Monocristallin" , le rendement est très bon</Text>
            <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginHorizontal:5}}>
              <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',marginHorizontal:5}}>
                <Image source ={require('../img/pan4.png')} style={{height: 2*global.deviceLenght/3, width: global.deviceLenght/3}}/>
                <Text style={{fontWeight: 'bold',fontSize:(2/3)*textSize,color:COLOR}}>Aux conditions de test standards</Text>
              </View>
              <View style={{flexDirection:'column',justifyContent:'flex-start',width:0,flex:1}}>
                <Text style={{fontWeight: 'bold',fontSize:(5/2)*textSize+5,color:COLOR}}>
                  60
                  <Text style={{fontSize:textSize+5}}> Cellules{"\n"} </Text>
                <Text style={{fontWeight: 'bold',fontSize:(3/4)*textSize+5}}>1686 x 1016 x 40 mm</Text>

                </Text>
                <Text style={{fontWeight: 'bold',fontSize:(5/2)*textSize+5,color:COLOR}}>
                  300W{"\n"}
                  <Text style={{fontSize:textSize+5}}> Puissance Maximale{"\n"} </Text>
                <Text style={{fontWeight: 'bold',fontSize:(3/4)*textSize+5}}> Tension Maximale 31,7V{"\n"} </Text>
                <Text style={{fontWeight: 'bold',fontSize:(3/4)*textSize+5}}> Courant Maximal 9.47A </Text>
                </Text>

                <Text style={{fontWeight: 'bold',fontSize:(5/2)*textSize+5,color:COLOR}}>
                  17.5%{"\n"}
                  <Text style={{fontSize:textSize+5}}> Rendement </Text>
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <Footer />
      </View>
    );
  }
}
