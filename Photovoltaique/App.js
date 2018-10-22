import React, {Component} from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import {  createStackNavigator, createDrawerNavigator, Header, DrawerActions, DrawerItems } from 'react-navigation';
import { COLOR } from './constants.js'
import * as TextData from "./text/Text.json";

import HomeScreen from './screens/HomeScreen.js';
import Home2Screen from './screens/Home2Screen.js';
import MainScreen from './screens/MainScreen.js';
import Ap2Screen from './screens/Ap2Screen.js';
import Sf2Screen from './screens/Sf2Screen.js';
import HeaderNav from './elements/HeaderNav.js';


const DrawerStack = createDrawerNavigator(//Les ecrans accessibles dans le menu glissant
  {
    Acceuil: { screen: Home2Screen },
    Main : { screen: MainScreen },
    Ap2 : { screen: Ap2Screen },
    Sf2 : { screen: Sf2Screen }
  },
  {
    contentComponent: (props) => (
      <ScrollView>
        <Text style={{color:'black',fontSize: 0.041*global.deviceLenght,fontWeight:'bold',textAlign:'center',backgroundColor:COLOR}}>Menu</Text>
        <DrawerItems {...props} activeTintColor={COLOR} labelStyle={{fontSize:0.041*global.deviceLenght}} />
      </ScrollView>
    )
  }
);
/*
const NavigationStack = createStackNavigator(//Les ecrans accessibles dans le menu glissant
  {
    Acceuil: { screen: Home2Screen },
    Main : { screen: MainScreen },
    Ap2 : { screen: Ap2Screen },
    Sf2 : { screen: Sf2Screen }
  },
  {
    initialRouteName : "Acceuil",
    headerMode : 'none'
  }
);
*/
const MainNavigator = createStackNavigator(
  {
    DrawerStack: { screen: DrawerStack }
    //NavigationStack: { screen: NavigationStack }
  },
  {
    navigationOptions : ({navigation}) => ({
      headerMode : 'float',
      headerTitle: (
        <HeaderNav />
      ),
      headerLeft: (
        <View>
          <TouchableOpacity onPress={()=>{navigation.dispatch(DrawerActions.toggleDrawer())}} style={{marginHorizontal: 10, maxHeight: Header.HEIGHT/2, maxWidth: 2*Header.HEIGHT/3}}>
            <Image source={require('./img/drawer.png')} resizeMode='stretch' style={{marginHorizontal: 10, height: Header.HEIGHT/2, width: 5*Header.HEIGHT/6}} />
          </TouchableOpacity>
        </View>
      ),
    })
  }
);

const FirstNavigator = createStackNavigator(
  {
    Home: {  screen: HomeScreen  },
  },
  {
    navigationOptions : {
      headerMode: 'float',
      headerTitle: (
        <HeaderNav />
      ),
      headerLeft: null,
    }
  }
);

const AppNavigator = createStackNavigator(
  {
    Acceuil : { screen: FirstNavigator },//Le premier écran (celui du logo)
    Home3 : { screen: MainNavigator }//Le reste de l'application
  },
  {
    initialRouteName: 'Acceuil',
    headerMode: 'none'
  },
);


export default class App extends Component{
  constructor(props){//Chargement des valeurs globales
    super(props);
    global.lg1 = Dimensions.get('window').width;
    global.lg2 = Dimensions.get('window').height;
    global.deviceLenght;
    global.apstate = true;//Etat initial du composant "Ap" de l'écran MainScreen
    global.sfstate = false;
    global.gesstate = false;
    //global.language = 'arabic';
    global.languageSource = TextData.french;
  }
  render(){
    {global.lg1 < global.lg2 ? global.deviceLenght=lg1 : global.deviceLenght=lg2}; // Pour determiner la taille des éléments et du texte de l'application en fonction de la taille de l'écran
    return <AppNavigator/>
  }
}
