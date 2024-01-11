import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View, Platform} from 'react-native'


interface Props {
    title: string;
    position?: 'br' | 'bl'; // Si quiero que sea opcional agrego un signo de interrogacion en position?:
    onPress: () => void;

}

export const Fab = ({title, onPress, position = 'br'}: Props) => {

    const ios = () => {
    return(
        <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={[
        styles.fabLocation, 
        (position === 'bl') ? styles.left : styles.rigth
        ]}
        >
            <View style={styles.fab}>
              <Text style={styles.fabText}>{title}</Text>
            </View>
    </TouchableOpacity>
    ) 
    }

    const android = () => {
  return  (       
        <View
        style={[
        styles.fabLocation, 
        (position === 'bl') ? styles.left : styles.rigth
        ]}
        >
        <TouchableNativeFeedback
            onPress={onPress}
            background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}

          >
            <View style={styles.fab}>
              <Text style={styles.fabText}>{title}</Text>
            </View>
          </TouchableNativeFeedback>
    </View>
    )
    }    

    return (Platform.OS === 'ios') ? ios() : android();

  
}

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute', 
        bottom: 25, 
      },
      rigth: {
        right: 25
      },
      left: {
        left: 25
      },
      fab: {
        backgroundColor: '#5856d6', 
        width: 60, 
        height: 60, 
        borderRadius: 100, 
        justifyContent: 'center', 
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

elevation: 8,
      }, 
      fabText: {
        color: 'white', 
        fontSize: 25, 
        fontWeight: 'bold', 
        alignSelf: 'center'
  
      }
})
