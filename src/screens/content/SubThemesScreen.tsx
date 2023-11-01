// import { API, graphqlOperation } from "aws-amplify";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { API, graphqlOperation } from "aws-amplify";
import { listSubThemes } from "../../graphql/queries";

type IconName = "checkbox-outline" | "checkbox";

const SubThemesScreen = ({ route, navigation }: any) => {
  const { category } = route.params;

  const addName = "Add";
  const profileName = "Profile";

  let iconName: IconName = "checkbox-outline";

  const [subThemes, setSubThemes] = useState([]);

  useEffect(() => {
    const fetchSubThemes = async () => {
      try {
        const subThemeData = await API.graphql(
          graphqlOperation(listSubThemes, {
            filter: { categorySubThemeId: { eq: category.id } },
          })
        );
        setSubThemes(subThemeData.data.listSubThemes.items);
      } catch (error) {
        console.error("Error fetching sub-themes", error);
      }
    };

    fetchSubThemes();
  }, [category]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.row}>
          {subThemes.map((subTheme) => (
            <TouchableOpacity
              key={subTheme.id}
              style={styles.tileSubtheme}
              onPress={() => navigation.navigate("TextPosts", { subTheme })}
            >
              <Text style={styles.tileText}>{subTheme.name}</Text>
              <Ionicons name={iconName} size={32} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  tileSubtheme: {
    width: "90%",
    minHeight: 50,
    padding: 10,
    margin: 5,
    backgroundColor: "#b5cfff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
    borderRadius: 7,
  },
  tileText: {
    color: "black",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Arial",
  },
});

export default SubThemesScreen;
