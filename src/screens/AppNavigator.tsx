import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import CategoriesScreen from "./content/CategoriesScreen";
import SubThemesScreen from "./content/SubThemesScreen";
import TextPostsScreen from "./content/TextPostsScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="SubThemes" component={SubThemesScreen} />
      <Stack.Screen name="TextPosts" component={TextPostsScreen} />
    </Stack.Navigator>
    //</NavigationContainer>
  );
};

export default AppNavigator;
