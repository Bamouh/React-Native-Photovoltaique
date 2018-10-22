//Ecran principal
import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, ScrollView, AsyncStorage, ActivityIndicator, Alert } from 'react-native';
import Footer from '../elements/Footer.js';
import CustomButton from '../elements/CustomButton.js';
import { FACTEUR_EMISSION } from '../constants.js'
import { ADRESSE_SERVEUR } from '../constants.js'
import { DUREE_VALEUR_STOCKEE } from '../constants.js'
import { NOMBRE_DE_JOURS } from '../constants.js'
import { COLOR } from '../constants.js'
import * as TextData from "../text/Text.json";

export default class MainScreen extends Component{
  static navigationOptions = {
    drawerLabel: 'Menu Principal',
  };

  constructor(props){
    super(props);
    this.state={
      actifap : global.apstate,//Etat de l'écran "Ap" (Description et Caractéristiques)
      //Quand l'écran Ap est actif (actifap : true), il s'affiche, les deux autres s'affacent
      actifsf : global.sfstate,//Etat de l'écran "Sf" (Simulation de fonctionnement)
      actifges : global.gesstate,//Etat de l'écran "Ges" (Gaz a effet de serre)
      uniqueValue : 1
    }
  }

  changeApState = () => {//Active l'écran "Ap" et désactive les deux écrans "ges" et "sf"
    this.setState({actifsf : false});
    this.setState({actifges : false});
    this.setState({actifap : true});
    global.apstate = true;
    global.sfstate = false;
    global.gesstate = false;
  }

  changeSfState = () => {//Active l'écran "sf" et désactive les deux écrans "ap" et "ges"
    this.setState({actifap : false});
    this.setState({actifges : false});
    this.setState({actifsf : true});
    global.apstate = false;
    global.sfstate = true;
    global.gesstate = false;
  }

  changeGesState = () => {//Active l'écran "ges" et désactive les deux écrans "ap" et "sf"
    this.setState({actifap : false});
    this.setState({actifsf : false});
    this.setState({actifges : true});
    global.apstate = false;
    global.sfstate = false;
    global.gesstate = true;
  }
  // onPress={this.changeApState} pour faire passer la méthode au fils (() => this.changeApState ne marchera pas )
  // ApScreen navigation={this.props.navigation} le prop navigation sert a faire passer le prop navigation du père vers les fils pour que ces derniers puissent utiliser la fonction navigate aussi
  render(){
    let textSize = 0.041*global.deviceLenght;
    return(
    <View style={{flex:1,flexDirection:'column'}}>
      <ScrollView>
        <View style={{flex:1,flexDirection:'column',justifyContent:'flex-start',alignItems:'center'}}>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start'}}>
              <Bouton onPress={this.changeApState} activesrce={require('../img/techno.png')} inactivesrce={require('../img/technoinactive.png')} texte1={global.languageSource.boutons.ap1} texte2={global.languageSource.boutons.ap2} fontSize= {textSize} actif={this.state.actifap}/>
              <Bouton onPress={this.changeSfState} activesrce={require('../img/3d.png')} inactivesrce={require('../img/3dinactive.png')} texte1={global.languageSource.boutons.sf1} texte2={global.languageSource.boutons.sf2} fontSize= {textSize} actif={this.state.actifsf}/>
              <Bouton onPress={this.changeGesState} activesrce={require('../img/ges.png')} inactivesrce={require('../img/gesinactive.png')} texte1={global.languageSource.boutons.ges1} texte2={global.languageSource.boutons.ges2} fontSize= {textSize} actif={this.state.actifges}/>
          </View>
          {this.state.actifap ? <ApScreen navigation={this.props.navigation} fontSize= {textSize}/> : null}
          {this.state.actifsf ? <SfScreen navigation={this.props.navigation} fontSize= {textSize}/> : null}
          {this.state.actifges ? <GesScreen navigation={this.props.navigation} fontSize= {textSize}/> : null}
        </View>
      </ScrollView>
      <Footer screenTitle='Main' navigation={this.props.navigation} refresh={this.state.uniqueValue}/>
    </View>
    );
  }
}

class Bouton extends Component{//Les 3 boutons du menu principal permettant de naviguer vers les 3 ecrans "ap", "sf" et "ges"
  render(){
    let inactiveIm = <Image source={this.props.inactivesrce} style={{width:global.deviceLenght/5,height:global.deviceLenght/5}}/>
    let activeIm = <Image source={this.props.activesrce} style={{width:global.deviceLenght/5,height:global.deviceLenght/5}}/>
    let activeText = <Text style={{color:COLOR,fontSize: this.props.fontSize ,fontWeight:'bold',textAlign: 'center'}}>{this.props.texte1}{"\n"}{this.props.texte2}</Text>
    let inactiveText = <Text style={{color:'rgb(127,127,127)',fontSize: this.props.fontSize,fontWeight:'bold',textAlign: 'center'}}>{this.props.texte1}{"\n"}{this.props.texte2}</Text>
    return(
      <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center',padding:10}}>
        <TouchableOpacity onPress={this.props.onPress}>
          {this.props.actif ? activeIm : inactiveIm}
        </TouchableOpacity>
        {this.props.actif ? activeText : inactiveText}
      </View>
    );
  }
}

class ApScreen extends Component{//L'écran "Ap" dont le bouton 'Découvrir' redigige vers l'écran "Ap2"
  render(){
    return(
      <View style={{flex:1,flexDirection:'column',justifyContent:'flex-start',alignItems:'center'}}>
        <View style={{flex:-1,flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',maxHeight: global.deviceLenght/2}}>
          <Image source ={require('../img/acceuil/pan21.png')} style={{marginHorizontal:5, maxHeight: global.deviceLenght/3, maxWidth: global.deviceLenght/2}} />
          <View style={{width:0,flex:1}}>
            <Text style={{color:COLOR,fontSize: this.props.fontSize+2,fontWeight:'bold',flexWrap:'wrap', paddingHorizontal:5}}>{global.languageSource.apScreen.text1}</Text>
          </View>
        </View>
        <Text style={{color:COLOR,fontSize: (5/4)*this.props.fontSize,fontWeight:'bold',margin:10, textAlign:'center'}}> {global.languageSource.apScreen.text2} </Text>
        <CustomButton screenTitle='Ap2' navigation={this.props.navigation} fontSize={this.props.fontSize} buttonText={global.languageSource.boutons.decouvrir}/>
      </View>
    );
  }
}

class SfScreen extends Component{//L'écran "Sf" dont le bouton 'Découvrir' redigige vers l'écran "Sf2"
  render(){
    return(
      <View style={{flex:1,flexDirection:'column',justifyContent:'flex-start',alignItems:'center'}}>
        <Text style={{fontWeight: 'bold',fontSize: (5/4)*this.props.fontSize,color:COLOR,margin:10}}>
        {global.languageSource.sfScreen.text1}{"\n"}
        {"\t"}{global.languageSource.sfScreen.text2}{"\n"}
        {"\t"}{global.languageSource.sfScreen.text3}{"\n"}
        {global.languageSource.sfScreen.text4}{"\n"}
        {"\t"}{global.languageSource.sfScreen.text5}{"\n"}
        {"\t"}{global.languageSource.sfScreen.text6}{"\n"}
        {"\t"}{global.languageSource.sfScreen.text7}{"\n"}
        </Text>
        <CustomButton screenTitle='Sf2' navigation={this.props.navigation} fontSize={this.props.fontSize} buttonText={global.languageSource.boutons.decouvrir}/>
      </View>
    );
  }
}

class GesScreen extends Component{//L'écran "Ges"
  constructor(props){
    super(props);
      this.state = { pourcent: '--', emissionGes: '--', unite: 'null' ,lastModifDate: 0, currentDate: (new Date()).getTime(), isMounted: false, isWaiting: true }
  }
  calculGes = (donnee) => {//Fonction qui calcule la quantité de C02 évitée
    let result = donnee*FACTEUR_EMISSION;
    if(result > 100){
      this.setState({unite: 'tonnes'});
      return Math.round(result) / 1000;
    }
    else{
      this.setState({unite: 'Kg'});
      return Math.round(result*1000) / 1000;
    }
  }
  calculDate = (time) => {//Fonction qui convertit le temps (en millisecondes) en une date sous le format UTC
    let m = new Date(time);
    return (m.getUTCDate() +"/"+ (m.getUTCMonth()+1) +"/"+ m.getUTCFullYear() + " " + m.getUTCHours() + ":" + m.getUTCMinutes() + ":" + m.getUTCSeconds()).toString();
  }
  calculPourcentage = (donnee) => {//Fonction qui calcule le pourcentage des ges évités par rapport une référence (a coder ici)
    let result = donnee/100;
    /*
      Mettre le code du calcul du pourcentage ici
    */
    return result;
  }
  async storeItem(key, item){
    try {
        //we want to wait for the Promise returned by AsyncStorage.setItem()
        //to be resolved to the actual value before returning the value
        var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
        return jsonOfItem;
    } catch (error) {
      console.log(error.message);
    }
  }
  async clearItem(key){
    try {
        await AsyncStorage.removeItem(key);
        return 0;
    } catch (error) {
      console.log(error.message);
    }
  }
  async retrieveItem(key){
    try {
      let retrievedItem =  await AsyncStorage.getItem(key);
      if(retrievedItem!=null){
        let item = JSON.parse(retrievedItem);
        return item;
      }
      else{
        return 0;
      }
    } catch (error) {
      console.log(error.message);
      return 0;
    }
    return
  }
  clearStuff(){//Fonction appelée pour effacer les données obtenues via le serveur stockées sur le smartphone
    if(this.state.currentDate - this.state.lastModifDate >= DUREE_VALEUR_STOCKEE){
      this.clearItem('pourcent');
      this.clearItem('emissionGes');
      this.clearItem('unite');
    }
  }
  changeStuff(){//Appel des valeurs stockées dans le smartphone pour mettre a jour les valeurs affichées dans l'écran
    this.retrieveItem('pourcent').then((value) => {  if(this.state.isMounted){this.setState({pourcent : value})} });
    this.retrieveItem('emissionGes').then((value) => {  if(this.state.isMounted){this.setState({emissionGes : value})} });
    this.retrieveItem('unite').then((value) => {  if(this.state.isMounted){this.setState({unite : value})} });
    this.retrieveItem('lastModifDate').then((value) => { if(this.state.isMounted){this.setState({lastModifDate : value})} });
  }
  fetch_timeout(ms) {//Vu que la fonction fetch n'a pas de timeout réglable (le timeout par défaut dépasse une minute, le client ne pourra pas attendre aussi longtemps), cette fonction permet de wrapper le fetch dans une autre Promise qui elle, possède un timeout
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("timeout"))
      }, ms);
      fetch(ADRESSE_SERVEUR).then(resolve, reject);
    });
  }
  async componentDidMount(){
      this.setState({isMounted : true, isWaiting: true});
      this.retrieveItem('lastModifDate').then((value) => { if(this.state.isMounted){this.setState({lastModifDate : value})} });
      await this.fetch_timeout(5000)
      .then((response) => response.json())
      .then((responseJson) => {
        if(this.state.isMounted){
          this.setState({
            pourcent: this.calculPourcentage(responseJson.donnee),//Dans mon fichier JSON, la donnée a pour attribut "donnée", remplacer "donnée" par l'attribut représentant la donnée extraite de la BDD de votre fichier JSON
            emissionGes: this.calculGes(responseJson.donnee),
            isWaiting: false
          });
        }
      })
      .then(() => {
        this.storeItem('pourcent', this.state.pourcent);
        this.storeItem('emissionGes', this.state.emissionGes);
        this.storeItem('unite', this.state.unite);
        this.storeItem('lastModifDate',(new Date()).getTime());
      })
      .catch((error) => {//Si erreur de connexion au serveur ou pas d'internet
        let mess1 = global.languageSource.gesScreen.messageError1
        let mess2 = global.languageSource.gesScreen.messageError2
        Alert.alert(mess1,mess2);
        this.clearStuff();
        this.changeStuff();
      })
      .finally(()=>{this.setState({isWaiting: false});this.changeStuff();});
  }
  componentWillUnmount(){
    this.setState({isMounted : false});
  }
  render(){
    return(
      <View style={{flex:1,flexDirection:'column',justifyContent:'flex-start',alignItems:'center'}}>
        <Text style={{fontWeight: 'bold', textAlign:'center', fontSize: (3/2)*this.props.fontSize, color:COLOR,margin:2,paddingHorizontal:5}}>{global.languageSource.gesScreen.text0}</Text>
        <Text style={{fontWeight: 'bold', textAlign:'center', fontSize: this.props.fontSize+60, color:COLOR}}>
          {this.state.pourcent}%{"\n"}
          <Text style={{fontSize: (3/2)*this.props.fontSize,textAlign:'center'}}>
            {this.state.emissionGes} {this.state.unite} {global.languageSource.gesScreen.text1}{"\n"}
            {global.languageSource.gesScreen.text2}{"\n"}
            {this.calculDate(this.state.lastModifDate)} (UTC)
          </Text>
        </Text>
        {this.state.isWaiting ? <ActivityIndicator color={COLOR} size="large" /> : null}
      </View>
    );
  }
}
