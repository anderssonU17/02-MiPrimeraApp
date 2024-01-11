import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.caja1}>Caja 1</Text>
        <Text style={styles.caja2}>Caja 2</Text>
        <Text style={styles.caja3}>Caja 3</Text>
 
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //height: 300,
        backgroundColor: '#28C4D9', 
        //justifyContent: 'flex-end', // el center njo es en medio de la pantalla, es en el medio del componene padre
        //flexDirection: 'row',
        //alignItems: 'flex-start', // todo esto depende del tamaño del padre
        //alignContent: 'space-between'
        //alignItems: 'flex-start'
    },
    caja1: {
        //width:100,
        //flex: 3, // 3 + 2 + 1 = 6
        borderWidth: 2, 
        borderColor: 'white', 
        fontSize: 20, 
        //alignItems: 'flex-start'
    },
    caja2: {
        //width:100,
        //flex: 2,
        borderWidth: 2, 
        borderColor: 'white', 
        fontSize: 20, 
        //alignSelf: 'flex-start'
    },
    caja3: {
        //width:100,
        //flex: 1,
        borderWidth: 2, 
        borderColor: 'white', 
        fontSize: 20,
        //alignSelf: 'flex-start'
    }
});
// ALT SHIT ABAJO PARA DUPLICAR CODIGO 
// Si solo un elemento tiene flex, entonces los demas no se estiran y solo el que se puso 
// flex se estira.. Hay flex 1, 2, 3, 4, 5, 6 ...