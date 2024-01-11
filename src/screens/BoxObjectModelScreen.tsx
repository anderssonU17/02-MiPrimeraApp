import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectModelScreen = () => {
  return (

    <View style={styles.container}>
        <Text style={styles.title}>Box Object Model</Text>
    </View>

  )
}

// El view no es necesario que lo coloquemos  pero se pone el view si se quiere agregar un 
// espacio texto, entonces el view ayuda a ordenar sus hijos 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red'
    },
    title: {
      paddingHorizontal: 100,
      paddingVertical: 20,
      fontSize: 20, 
      marginHorizontal: 20,
      //width: 250, 
      borderWidth: 10
      //backgroundColor: 'red'
    }
});

// Cuando no estamos seguros del espacio que tiene el objeto pongamosle un color fuerte 
// para apreciar donde el elemento se esta estirando