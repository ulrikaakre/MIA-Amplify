import { API, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { listCategories } from "../../graphql/queries";

const CategoriesScreen = ({ navigation }: any) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryData = await API.graphql(
          graphqlOperation(listCategories)
        );
        setCategories(categoryData.data.listCategories.items);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.row}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={styles.tile}
              onPress={() => navigation.navigate("SubThemes", { category })}
            >
              <Text style={styles.tileText}>{category.name}</Text>
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
  tile: {
    width: "45%",
    minHeight: "50%",
    padding: 10,
    margin: 5,
    backgroundColor: "#b5cfff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
  tileText: {
    color: "black",
    fontSize: 18,
    fontWeight: "800",
    fontFamily: "Arial",
    textAlign: "center",
  },
});

export default CategoriesScreen;
