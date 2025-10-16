import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthScreen from './src/screens/AuthScreen';
import HomeScreen from './src/screens/HomeScreen';
import BranchesScreen from './src/screens/BranchesScreen';
import BranchPathScreen from './src/screens/BranchPathScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade' }}>
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Branches" component={BranchesScreen} />
        <Stack.Screen name="BranchPath" component={BranchPathScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

