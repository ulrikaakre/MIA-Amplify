import { API, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { Button, SafeAreaView, ScrollView, Text } from "react-native";

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
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <ScrollView>
        {!selectedCategory &&
          categories.map((category) => (
            <Button
              key={category.id}
              title={category.name}
              onPress={() => setSelectedCategory(category)}
            />
          ))}

        {selectedCategory &&
          !selectedSubTheme &&
          subThemes.map((subTheme) => (
            <Button
              key={subTheme.id}
              title={subTheme.name}
              onPress={() => setSelectedSubTheme(subTheme)}
            />
          ))}

        {selectedSubTheme &&
          textPosts.map((post) => <Text key={post.id}>{post.title}</Text>)}
      </ScrollView>
      {(selectedCategory || selectedSubTheme) && (
        <Button
          title="Go Back"
          onPress={() => {
            if (selectedSubTheme) setSelectedSubTheme(null);
            else setSelectedCategory(null);
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default NewComp;
