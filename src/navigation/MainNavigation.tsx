import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import React from "react";
import TestComp from "../components/TestComp";
import TocScroll from "../components/TocScroll";

import Ionicons from "@expo/vector-icons/Ionicons";

type IconName =
  | "newspaper"
  | "newspaper-outline"
  | "add-circle"
  | "add-circle-outline";

const MainNavigation = () => {
  const Tab = createBottomTabNavigator();

  const feedName = "Feed";
  const addName = "Add";

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={feedName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: IconName = "newspaper";
            let rn = route.name;
            if (rn === feedName) {
              iconName = focused ? "newspaper" : "newspaper-outline";
            } else if (rn === addName) {
              iconName = focused ? "add-circle" : "add-circle-outline";
            }
            return <Ionicons name={iconName} size={32} />;
          },
        })}
      >
        <Tab.Screen name={feedName} component={TocScroll} />
        <Tab.Screen name={addName} component={TestComp} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
