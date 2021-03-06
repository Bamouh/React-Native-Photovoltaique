// Premier écran par lequel démarre l'application, l'écran suivant est Home2Screen
import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, Button, Dimensions, ActivityIndicator, ScrollView} from 'react-native';
import { COLOR } from '../constants.js'
import Footer from '../elements/Footer.js';
import CustomButton from '../elements/CustomButton.js';
import * as TextData from "../text/Text.json";

export default class HomeScreen extends Component{
  constructor(props){
    super(props);
    this.state = { fourSecondsHavePassed : false, texte : global.languageSource.screen1, uniqueValue: 1 };
  }
  componentDidMount(){
    var timeout = setTimeout(() => {
      this.props.navigation.navigate('Home3');
      this.setState(previousState => {
         return{ fourSecondsHavePassed: true };
        });
    },4000);
  }
  componentWillUnmount(){
    try{
      clearTimeout(timeout);
    }catch(error){}
  }
  render() {
    let textSize = 0.041*global.deviceLenght;//Taille du texte dynamique
    return(
      <View style={{flex:1,flexDirection:'column',justifyContent: 'center'}}>
        <ScrollView contentContainerStyle={styles.styleglobal}>
            <Image source ={require('../img/acceuil/sun.png')} style={{height: (global.deviceLenght/2)+10, width: global.deviceLenght/2}}/>
            <Text style={{color:COLOR,fontWeight:'bold',fontSize:2*textSize}}> {global.languageSource.screen1} </Text>
            {this.state.fourSecondsHavePassed ? <CustomButton screenTitle='Home3' navigation={this.props.navigation} fontSize={textSize} buttonText={global.languageSource.boutons.commencer}/> : <ActivityIndicator color={COLOR} size="large" />}
        </ScrollView>
        <Footer screenTitle='Home' navigation={this.props.navigation} refresh={this.state.uniqueValue}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    styleglobal:{
      flex : 1,
      flexDirection:'column',
      justifyContent: 'center',
      alignItems: 'center',
    }
});
