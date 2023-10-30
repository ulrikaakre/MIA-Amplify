import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

const Tab = createMaterialTopTabNavigator();

const StatsScreen = () => (
  <View style={styles.content}>
    <Text style={{ color: "white" }}>Stats Screen</Text>
  </View>
);
const SavedScreen = () => (
  <View style={styles.content}>
    <Text style={{ color: "white" }}>Saved Screen</Text>
  </View>
);
const SettingsScreen = () => (
  <View style={styles.content}>
    <Text style={{ color: "white" }}>Settings Screen</Text>
  </View>
);

const MyTabs = () => {
  // const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName="StatsScreen"
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 12,
          color: "black",
          // marginTop: insets.top,
        },
        tabBarIndicatorStyle: {
          backgroundColor: "black",
        },
      }}
    >
      <Tab.Screen name="Stats" component={StatsScreen} />
      <Tab.Screen name="Saved" component={SavedScreen} />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ tabBarLabel: "⚙️" }}
      />
    </Tab.Navigator>
  );
};

const Profile = () => {
  // const [activeView, setActiveView] = useState("Stats");

  return (
    <>
      <SafeAreaView style={styles.imageContainer}>
        <Image
          source={require("../../assets/avatar.png")}
          style={styles.image}
        />
        <Text style={styles.text}> Ola Nordmann 🔥6! </Text>
      </SafeAreaView>

      <MyTabs />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    height: 100,
  },
  test: {
    backgroundColor: "red",
    height: 100,
  },
  imageContainer: {
    height: "35%",
    width: "100%",
    marginTop: "-15%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5c21bf",
  },
  image: {
    width: 100,
    height: 100,
  },
  bar: {
    backgroundColor: "blue",
    width: "100%",
    height: 40,
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    // color: "black",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1c1c1c",
    height: "100%",
    width: "100%",
    color: "white",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontFamily: "Arial",
  },
});

export default Profile;
