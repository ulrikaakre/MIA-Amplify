import { API, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import { listTextPosts } from "../../graphql/queries";

const TextPostsScreen = ({ route }: any) => {
  const { subTheme } = route.params;

  const [textPosts, setTextPosts] = useState([]);

  useEffect(() => {
    const fetchTextPosts = async () => {
      try {
        const textPostData = await API.graphql(
          graphqlOperation(listTextPosts, {
            filter: { subThemeTextPostId: { eq: subTheme.id } },
          })
        );
        setTextPosts(textPostData.data.listTextPosts.items);
      } catch (error) {
        console.error("Error fetching text posts", error);
      }
    };

    fetchTextPosts();
  }, [subTheme]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        {textPosts.map((post) => (
          <View key={post.id} style={styles.post}>
            <Text style={styles.postTitle}>{post.title}</Text>
            <Text style={styles.postContent}>{post.content}</Text>
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
  content: {
    flex: 1,
  },
  post: {
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#f1f1f1",
    borderRadius: 7,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  postContent: {
    fontSize: 16,
  },
});

export default TextPostsScreen;
