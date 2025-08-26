// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { Text, TouchableOpacity, ScrollView } from 'react-native';

// import Um from './screens/Um';
// import Dois from './Dois';
// import Tres from './screens/Tres';
// import Quatro from './Quatro';
// import Cinco from './Cinco';
// import Seis from './Seis';
// import Sete from './Sete';
// import Oito from './Oito';
// import Nove from './Nove';
// import Dez from './Dez';
// import Onze from './Onze';

// const Stack = createStackNavigator();

// function MenuScreen({ navigation }: any) {
//   const exercicios = Array.from({ length: 11 }, (_, i) => i + 1);

//   return (
//     <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
//       {exercicios.map((num) => (
//         <TouchableOpacity
//           key={num}
//           style={{
//             marginVertical: 10,
//             padding: 20,
//             backgroundColor: '#4CAF50',
//             borderRadius: 10,
//             width: '80%',
//             alignItems: 'center',
//           }}
//           onPress={() => {
//             console.log(`Navegando para: Ex${num}`);
//             navigation.navigate(`Ex${num}`);
//           }}        >
//           <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>
//             Ir para Exercício {num}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </ScrollView>
//   );
// }

// export default function Navigation() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Menu" component={MenuScreen} />
//         <Stack.Screen name="Ex1" component={Um} />
//         <Stack.Screen name="Ex2" component={Dois} />
//         <Stack.Screen name="Ex3" component={Tres} />
//         <Stack.Screen name="Ex4" component={Quatro} />
//         <Stack.Screen name="Ex5" component={Cinco} />
//         <Stack.Screen name="Ex6" component={Seis} />
//         <Stack.Screen name="Ex7" component={Sete} />
//         <Stack.Screen name="Ex8" component={Oito} />
//         <Stack.Screen name="Ex9" component={Nove} />
//         <Stack.Screen name="Ex10" component={Dez} />
//         <Stack.Screen name="Ex11" component={Onze} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }