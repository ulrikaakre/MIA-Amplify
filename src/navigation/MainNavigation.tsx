import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import React from "react";

import Ionicons from "@expo/vector-icons/Ionicons";
import NewComp from "../components/NewComp";
import Profile from "../components/Profile";
import TestComp2 from "../components/TestComp2";

type IconName =
  | "newspaper"
  | "newspaper-outline"
  | "rocket-sharp"
  | "rocket-outline"
  | "person-sharp"
  | "person-outline";

const MainNavigation = () => {
  const Tab = createBottomTabNavigator();

  const feedName = "Feed";
  const addName = "Add";
  const profileName = "Profile";

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
              iconName = focused ? "rocket-sharp" : "rocket-outline";
            } else if (rn === profileName) {
              iconName = focused ? "person-sharp" : "person-outline";
            }
            return <Ionicons name={iconName} size={32} />;
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name={feedName} component={NewComp} />
        <Tab.Screen name={addName} component={TestComp2} />
        <Tab.Screen name={profileName} component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
