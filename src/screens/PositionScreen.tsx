import React from 'react'
import { StyleSheet, View } from 'react-native'

export const  PositionScreen = () => {
  return (
    <View style={styles.container}>

        <View style={styles.cajaVerde}/>
        <View style={styles.cajaMorada}/>
        <View style={styles.cajaNaranja}/>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: 300,
        // height: 300,
        //width: 300,
        //height: 300,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#28C4D9'
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        top: 0,
        right: 0
        //bottom: 10 // Basado en el padre se ubique al final
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    cajaVerde: {
        // width: 100,
        // height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        //position: 'absolute',
        // bottom: 0,
        // left: 0,
        //top: 0, 
        //right: 0
        ...StyleSheet.absoluteFillObject
    }
});

// Por defecto todos los elementos que construyo tienen la posicion relativa
// Por eso muestra uno abajo de otro
// Si le pongo top a cualquiera de las cajas, no las empuja si no que se pone encima de la otra
// El position relativo es por defecto
// Si quiero abssoluto lo hago con Position: 'Absolute'
// Para comentar CTRL K LUEGO U O TAMBIEN C

// LEFT, si pongo valores positivos va a la derecha, si son negativos a la izquierda
// RIGHT, si pongo valores positivos va a la izquierda, si son negativos a la derecha.
// Para mover codigo arriba, con ALT y flechas para mover dicho codigo