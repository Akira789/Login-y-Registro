import React, {Component} from 'react';
import {StyleSheet, Alert} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Container, Header, Content, Card, CardItem, Text, Body, Button,Item, Label, Input, Icon} from "native-base";

//<Button title="Registrate" onPress={() => navigation.navigate('Registro')}/>
//{...this.props.route.params.usuarios}
//const Stack = createStackNavigator();

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      nombre:'',
      password:''
    }
  }
  
  
  render(){
    const navegar = this.props.navigation;
    return (
        <Container>
          <Content padder contentContainerStyle = {misEstilos.content}>
            <Card>
              <CardItem header bordered>
                <Text style= {misEstilos.textCenter}>Inicio de sesión</Text>
              </CardItem>
              <CardItem bordered>
                <Body style = {misEstilos.body}>
                  <Item inlineLabel>
                  <Icon type= 'FontAwesome' name= 'user'></Icon>
                    <Input placeholder= 'Nombre de usuario' value={this.state.nombre} onChangeText={(nombre)=> this.setState ({nombre})} />
                  </Item>
                  <Item inlineLabel last>
                  <Icon type= 'FontAwesome' name= 'lock'></Icon>
                    <Input placeholder= 'Contraseña' value={this.state.password} onChangeText={(password)=> this.setState ({password})} />
                  </Item>
                </Body>
              </CardItem>
              <CardItem footer bordered>
                <Button style = {misEstilos.boton} primary onPress={() => {navegar.navigate('Usuario', {
                verUsuario:'Usuario y contraseña',
                nombre:this.state.nombre,
                password:this.state.password
                });
                }}  ><Text> Ingresar</Text>
                </Button>
              
              </CardItem>

              <Button primary onPress={() => navegar.navigate('Registro', {
                titulo:'Registro de usuario',
                })
                } >
                <Text style = {misEstilos.textCenter}>Registrate</Text>
                </Button>

            </Card>
          </Content> 
        </Container>

    );
  }
}

const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    paddingVertical:'30%',
    justifyContent: 'center',
  },
  textCenter:{
    textAlign: 'center',
    width: '100%',
  },
  boton: {
    marginLeft: '30%',
  },
  body: {
    paddingVertical: 20,
  }

});

export default Login;
