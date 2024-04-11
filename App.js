import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Screens/LoginScreen';
import DashbordScreen from './Screens/DashbordScreen';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native"
import RegisterScreen from './Screens/RegisterScreen';
const stack = createStackNavigator();

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Dashboard" component={DashbordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {

  },
});
