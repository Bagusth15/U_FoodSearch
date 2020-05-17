import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreens';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{title: 'BusinessSearch'}}
        />
        <Stack.Screen
          name="ResultsShow"
          component={ResultsShowScreen}
          options={{title: 'BusinessSearch'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
