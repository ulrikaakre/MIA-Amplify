// import React from "react";
// import { API, graphqlOperation, Storage } from 'aws-amplify';
// import { Text, View, useState, useEffect } from "react-native";
// import { createTextPost } from "../graphql/mutations";

// const TestComp = () => {
//   const [textPostDate, setTextPostDate] = useState({title: "", content: "", user: ""});
//   const [contactData, setContactData] = useState({name: "", email: "", cell: ""});

//   const addNewContact = async () => {
//     try {
//         const { name, email, cell } = textPostDate;

//         // Upload pic to S3
//         Storage.configure({ region: 'eu-north-1' });
//         const { key } = await Storage.put(`${uuid()}`, profilePic, {contentType: 'image/png'});

//         const newContact = {
//             id: uuid(),
//             title,
//             content,
//             user,
//             profilePicPath: key
//         };

//         // Persist new Contact
//         await API.graphql(graphqlOperation(createTextPost, {input: newContact}));
//     } catch(err) {
//         console.log('error', err);
//     }
// }

//   return(
//   <View
//     style={{
//       height: 500,
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//     }}
//   >
//     <Text style={{ fontSize: 28 }}> Please add some posts bro </Text>
//   </View>)
// };

// export default TestComp;

import { API, Auth, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
// import { v4 as uuid } from "uuid";

// Assuming you have exported your GraphQL operations, import them here.
import { createTextPost } from "../graphql/mutations";

interface TextPost {
  id: string;
  title: string;
  content: string;
  user: string;
  createdAt: string;
  updatedAt: string;
}

export const TextPosts: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [postContent, setPostContent] = useState<string>("");
  const [postTitle, setPostTitle] = useState<string>("");
  const [currentUser, setCurrentUser] = useState<any | null>(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setCurrentUser(user);
        console.log("user: ", user.username);
      } catch (error) {
        console.log("Error fetching user", error);
      }
    };

    fetchCurrentUser();
  }, []);

  const addNewTextPost = async () => {
    if (!postTitle || !postContent || !currentUser) return;

    try {
      const newPost = {
        title: postTitle,
        content: postContent,
        userTextsId: currentUser.attributes.sub, // Assuming 'sub' is the unique ID for the user
      };

      console.log("---post: ", newPost);
      await API.graphql(graphqlOperation(createTextPost, { input: newPost }));
    } catch (error) {
      console.log("Error adding new post:", error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        value={postTitle}
        placeholder="Enter post title"
        onChangeText={setPostTitle}
        style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
      />
      <TextInput
        value={postContent}
        placeholder="Enter post content"
        onChangeText={setPostContent}
        style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
        multiline
      />
      <Button title="Add New Text Post" onPress={addNewTextPost} />
    </View>
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
