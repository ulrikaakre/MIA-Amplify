import { Picker } from "@react-native-picker/picker";
import { API, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { Button, SafeAreaView, StyleSheet, TextInput } from "react-native";

import { createTextPost } from "../graphql/mutations";
import { listCategories, listSubThemes } from "../graphql/queries"; // Assuming you've set up these queries.

export const TextPosts: React.FC = () => {
  const [categories, setCategories] = useState([]);
  const [subThemes, setSubThemes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSubTheme, setSelectedSubTheme] = useState<string>("");
  const [postTitle, setPostTitle] = useState<string>("");
  const [postContent, setPostContent] = useState<string>("");
  const [currentUser, setCurrentUser] = useState<any | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryData = await API.graphql(
          graphqlOperation(listCategories)
        );
        setCategories(categoryData.data.listCategories.items);
        // console.log("set", categoryData.data.listCategories.items);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };

    fetchCategories();
  }, []);

  const fetchSubThemes = async (categoryId: string) => {
    try {
      const subThemeData = await API.graphql(
        graphqlOperation(listSubThemes, {
          filter: { categorySubThemeId: { eq: categoryId } },
        })
      );
      // console.log("sub ---", subThemeData.data.listSubThemes.items);
      setSubThemes(subThemeData.data.listSubThemes.items);
    } catch (err) {
      console.error("Error fetching sub-themes:", err);
    }
  };

  const addNewTextPost = async () => {
    // if (!postTitle || !postContent || !currentUser || !selectedSubTheme) return;

    try {
      const newPost = {
        title: postTitle,
        content: postContent,
        subThemeTextPostId: selectedSubTheme, // Assuming 'selectedSubTheme' is the selected sub-theme's ID
      };

      console.log("---post: ", postContent);
      console.log("---post: ", selectedSubTheme);

      // Create text post using mutation
      await API.graphql(graphqlOperation(createTextPost, { input: newPost }));
      setPostTitle(""); // Clear input fields after successful creation
      setPostContent("");
    } catch (error) {
      console.log("Error adding new post:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Picker
        selectedValue={selectedCategory}
        onValueChange={(value: any) => {
          setSelectedCategory(value);
          fetchSubThemes(value);
        }}
      >
        {categories.map((category) => (
          <Picker.Item
            key={category.id}
            label={category.name}
            value={category.id}
          />
        ))}
      </Picker>

      <Picker
        selectedValue={selectedSubTheme}
        onValueChange={(value) => (
          setSelectedSubTheme(value), console.log("val ", value)
        )}
      >
        {subThemes.map((subTheme) => (
          <Picker.Item
            key={subTheme.id}
            label={subTheme.name}
            value={subTheme.id}
          />
        ))}
      </Picker>

      <TextInput
        value={postTitle}
        placeholder="Enter post title"
        onChangeText={setPostTitle}
        style={styles.input}
      />

      <TextInput
        value={postContent}
        placeholder="Enter post content"
        onChangeText={setPostContent}
        style={styles.input}
        multiline
      />

      <Button title="Add New Text Post" onPress={addNewTextPost} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  postCard: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 16,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  inputSection: {
    marginTop: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
});

export default TextPosts;
