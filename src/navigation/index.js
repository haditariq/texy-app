import * as React from "react";
import { View, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Splash from "../screens/Splash";
import Dashboard from "../screens/Dashboard";
import SavedLines from "../screens/SavedLines";
import PayWall from "../screens/PayWall";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const DashboardStack = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Dashboard"
        component={Dashboard}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="PayWall"
        component={PayWall}
      />
    </Stack.Navigator>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="DashboardStack"
      tabBarOptions={{
        activeTintColor: "#FF6F87",
        inActiveTiniColor: "grey",
         style: { height: 85, backgroundColor: '#fff' },
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Discover",
          tabBarIcon: ({ color, size }) => (
            <Image style={[styles.icon, {tintColor: color}]} source={require("../assets/discover.png")} />
          )
        }}
        name="DashboardStack"
        component={DashboardStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Saved Lines",
          tabBarIcon: ({ color, size }) => (
            <Image style={[styles.icon, {tintColor:color}]} source={require("../assets/savedLinesIcon.png")} />
          )
        }}
        name="SavedLines"
        component={SavedLines}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
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
  icon: {
    height: 25,
    width: 25,
    tintColor:'grey'
  }
};
export default Navigation;
