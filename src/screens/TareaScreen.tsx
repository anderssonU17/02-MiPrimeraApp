import React from 'react'
import { StyleSheet, View } from 'react-native'

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cajaMorada}/>
        <View style={styles.cajaNaranja}/>
        <View style={styles.cajaAzul}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center'
        
    }, 
    cajaMorada: {
        width: 100, 
        height: 100, 
        //flex: 2,
        borderWidth: 10, 
        borderColor: 'white', 
        backgroundColor: '#5856D6', 
        //alignSelf: 'flex-end'
        //top: 100
        
    },
    cajaNaranja: {
        width: 100, 
        height: 100, 
        //flex: 2, 
        borderWidth: 10, 
        borderColor: 'white', 
        backgroundColor: '#F0A23B', 
        //alignSelf: 'center'
        //left: 100
        top: 50
    },
    cajaAzul: {
        width: 100, 
        height: 100,
        //flex: 4,
        borderWidth: 10, 
        borderColor: 'white', 
        backgroundColor: '#28C4D9', 
        //alignSelf: 'flex-start', 

    }
});

// Primer ejercicio, se comenta el height y se pone flex 1 
// Segundo ejericcio, se agrega justify content en el padre, se usa un width 100 o 100% 
// Tercer ejercicio, justify content center, y alignself segun el ejercicio 
// Cuarto ejercicio, justifycontent space between align self flex end y flex start 
// Quinto ejercicio, flex direction row, justify content space between y comentar los height
// Sexto ejercicio, flex 2 2 4 comentar los width  y justity content space-between
// Septimo ejercicio, justifyContent: 'center', alignItems: 'center' en el container
// Octavo ejercicio, es el mismo que el septimo pero con left 100 o un right de -100
// Noveno ejercicio, se pone top 100 para bajar el morado es lo mismo que el septimo y octavo
// Decimo ejercicio, se quita comentario y se pone row, comentar el top quitar el right naranja o left 
//  top 50 y queda bien el ejercicio