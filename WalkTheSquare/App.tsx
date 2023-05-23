import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

export type RootStackNavigationProp = StackNavigationProp<RootStackParamList, keyof RootStackParamList>;


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
      );
}

