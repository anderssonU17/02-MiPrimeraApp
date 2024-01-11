import React, { useState } from 'react'
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native'
import { Fab } from '../components/Fab'

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10)
  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Contador: {contador}
          </Text>

          <Fab
            title=  '+1'
            onPress={() => setContador(contador + 1)}
          />

          <Fab
            title=  '-1'
            onPress={() => setContador(contador - 1)}
            position='bl'
          />
          {/* <TouchableOpacity
            style={styles.fabLocationBR}
            onPress={() => setContador(contador + 1)}
          >
            <View style={styles.fab}>
              <Text style={styles.fabText}>+1</Text>
            </View>
          </TouchableOpacity> */}

          {/* <TouchableOpacity
            style={styles.fabLocationBL}
            onPress={() => setContador(contador - 1)}
          >
            <View style={styles.fab}>
              <Text style={styles.fabText}>-1</Text>
            </View>
          </TouchableOpacity> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    },
    title: {      
          fontSize: 40,
          top: -15, 
          textAlign: 'center',
    }, 
})

// Un boton personalizado mediante un view 
// fab significa Floating Action
//Los estilos en orden alfabetico por buena practicas
//BR es Button Right