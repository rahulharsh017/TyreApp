import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LiveData from './screens/LiveData';
import TKPHScreen from './screens/TKPHScreen';
import ShiftScreen from './screens/ShiftScreen';

// Define types for the dumper data and navigation params
export type Dumper = {
  dumperId: string;
  loadPerTyreEmpty: number;
  loadPerTyreLoaded: number;
  rotationHoursPerDay: number;
  cyclesPerDay: number;
  distancePerCycle: number;
};

export type RootStackParamList = {
  Home: undefined;
  LiveData: undefined;
  ShiftScreen: undefined;
  TKPHScreen: { dumperData: Dumper };  // Route params for TKPHScreen
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false, // Hide the header for all screens
          cardStyle: { backgroundColor: '#121212' }, // Background color for screens
          transitionSpec: {
            open: { animation: 'timing', config: { duration: 300 } }, // Duration for smoothness
            close: { animation: 'timing', config: { duration: 300 } },
          },
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                opacity: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LiveData" component={LiveData} />
        <Stack.Screen name="ShiftScreen" component={ShiftScreen} />
        <Stack.Screen name="TKPHScreen" component={TKPHScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
