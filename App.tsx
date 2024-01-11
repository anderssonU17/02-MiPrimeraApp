import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
// import { ContadorScreen } from './src/screens/ContadorScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { DimensionesScreen } from './src/screens/DimensionesScreen';
// import { PositionScreen } from './src/screens/PositionScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import { TareaScreen } from './src/screens/TareaScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
    {/* <HolaMundoScreen/>
    <ContadorScreen/> */}
    {/* <BoxObjectModelScreen/> */}
    {/* <DimensionesScreen/> */}
    {/* <PositionScreen/> */}
    {/* <FlexScreen/> */}
    <TareaScreen/>
    </SafeAreaView>

  )
}



// El view es como si fuera un div 
// Los style es con camelCase
// Solo una llave {} para explicar una expresion de JavaScript y otras {} para decir que es objeto literal