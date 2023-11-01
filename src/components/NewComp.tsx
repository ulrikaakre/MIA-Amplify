import { API, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {
  listCategories,
  listSubThemes,
  listTextPosts,
} from "../graphql/queries"; // Adjust path accordingly

const NewComp = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [subThemes, setSubThemes] = useState([]);
  const [selectedSubTheme, setSelectedSubTheme] = useState(null);
  const [textPosts, setTextPosts] = useState([]);

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

  useEffect(() => {
    if (!selectedCategory) return;

    const fetchSubThemes = async () => {
      try {
        const subThemeData = await API.graphql(
          graphqlOperation(listSubThemes, {
            filter: { categorySubThemeId: { eq: selectedCategory.id } },
          })
        );
        setSubThemes(subThemeData.data.listSubThemes.items);
      } catch (error) {
        console.error("Error fetching sub-themes", error);
      }
    };

    fetchSubThemes();
  }, [selectedCategory]);

  useEffect(() => {
    if (!selectedSubTheme) return;

    const fetchTextPosts = async () => {
      try {
        const textPostData = await API.graphql(
          graphqlOperation(listTextPosts, {
            filter: { subThemeTextPostId: { eq: selectedSubTheme.id } },
          })
        );
        setTextPosts(textPostData.data.listTextPosts.items);
      } catch (error) {
        console.error("Error fetching text posts", error);
      }
    };

    fetchTextPosts();
  }, [selectedSubTheme]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {(selectedCategory || selectedSubTheme) && (
          <Button
            title="← Go Back"
            onPress={() => {
              if (selectedSubTheme) setSelectedSubTheme(null);
              else setSelectedCategory(null);
            }}
          />
        )}
      </View>
      <ScrollView style={styles.content}>
        {!selectedCategory && (
          <View style={styles.row}>
            {categories.map((category, index) => (
              <TouchableOpacity
                key={category.id}
                style={styles.tile}
                onPress={() => setSelectedCategory(category)}
              >
                <Text style={styles.tileText}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        {selectedCategory &&
          !selectedSubTheme &&
          subThemes.map((subTheme) => (
            <TouchableOpacity
              key={subTheme.id}
              style={styles.tileSubtheme}
              onPress={() => setSelectedSubTheme(subTheme)}
            >
              <Text style={styles.tileText}>{subTheme.name}</Text>
            </TouchableOpacity>
          ))}

        {selectedSubTheme &&
          textPosts.map((post) => (
            <View key={post.id}>
              <Text>{post.title}</Text>
              <Text>{post.content}</Text>
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  content: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tile: {
    width: "45%",
    padding: 10,
    margin: 5,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
  tileSubtheme: {
    width: "90%",
    padding: 10,
    margin: 5,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
  tileText: {
    color: "black",
    textAlign: "center",
  },
});

export default NewComp;
