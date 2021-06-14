import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Screens import

import {
	Home
} from './app/screens'

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
		<Stack.Navigator
			initialRouteName="Home"
			screenOptions={{headerShown: false}}
		>
			<Stack.Screen name="Home" component={Home} />
		</Stack.Navigator>
	</NavigationContainer>
  );
};

export default App;
