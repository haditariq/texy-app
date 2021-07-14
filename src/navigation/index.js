import * as React from "react";
import { View, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Splash from "../screens/Splash";
import Dashboard from "../screens/Dashboard";
import SavedLines from "../screens/SavedLines";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="SavedLines"
      tabBarOptions={{
        activeTintColor: 'red',
      }}
      >
      <Tab.Screen 
      options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => <Image style={styles.icon} source={require("../assets/logo.png")} />,
        }}
        name="Dashboard"
        component={Dashboard} />
      <Tab.Screen 
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => <Image style={styles.icon} source={require("../assets/logo.png")} />,
          
        }}
        name="SavedLines"
        component={SavedLines} />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
          initialRouteName='BottomTab'
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="BottomTab"
          component={BottomTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = {
  icon:{
    height:20,
    width:20
  }
}
export default Navigation;
