import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MeuComponente from './componentes/MeuComponente';
import MinMax from './componentes/MinMax';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Programação para Dispositivos Móveis</Text>
      
      <View style={styles.componentContainer}>
        <Text style={styles.componentTitle}>Primeiro Componente</Text>
        <MeuComponente />
      </View>
      
      <View style={styles.componentContainer}>
        <Text style={styles.componentTitle}>Valor Maior</Text>
        <MinMax min="30" max="60" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //Pagina
  container: {
    flex: 1,                     //Grup
    backgroundColor: '#FA7921', // Coloração de fundo
    alignItems: 'center',      // Alianhamento dos items
    justifyContent: 'center', // Espaçamento da tela
  },
  //Titulo
  heading: {    
    fontSize: 18,                //titulo
    fontWeight: 'bold',         // formato
    color: 'white',            // coloração
    marginBottom: 30,         // tamanho do espacamento
  },
  //Botão
  componentContainer: {
    backgroundColor: 'white',  //Coloração
    padding: 20,              // Largura do botão 
    borderRadius: 10,        // formarto aredondado do botão
    marginBottom: 20,       // tamanho do espacamento
    width: '80%',          // Preencimento do espaço
  },
  //Titulo do Botão
  componentTitle: {
    fontSize: 20,               //Tamanho da font
    marginBottom: 10,          // tamanho do espacamento
  },
});