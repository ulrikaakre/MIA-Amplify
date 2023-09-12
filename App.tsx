// import React from "react";
// import { SafeAreaView, StyleSheet, Text } from "react-native";

// import { Amplify } from "aws-amplify";
// import awsExports from "./src/aws-exports";
// Amplify.configure(awsExports);

// import { withAuthenticator } from "@aws-amplify/ui-react-native";
// import TextPost from "./src/components/textPost";

// const App = () => {
//   // const [text, onChangeText] = useState("");
//   // const [title, onChangeTitle] = useState("");

//   // const [textPosts, setTextPosts] = useState([]);
//   // const [videoPosts, setVideoPosts] = useState([]);

//   // const addPost = () => {
//   //   const { title, content } = textPostData;

//   //   Storage.configure({ region: "eu-north" });

//   //   const {key} = await Storage.put(`${uuid()}`,)
//   // };

//   // useEffect(() => {
//   // const fetchUser = async () => {
//   //   const userInfo = await Auth.currentAuthenticatedUser({
//   //     bypassCache: true,
//   //   });
//   //   console.log("attributes: ", userInfo.attributes);
//   //   console.log("sub: ", userInfo.attributes.sub);
//   //   if (!userInfo) {
//   //     return;
//   //   }

//   //   try {
//   //     const getUserResponse = await API.graphql({
//   //       query: getUser,
//   //       variables: { id: userInfo.attributes.sub.toString() },
//   //       authMode: "AMAZON_COGNITO_USER_POOLS",
//   //     });

//   //     if (getUserResponse.data && getUserResponse.data.getUser) {
//   //       console.log("User exists.");
//   //     }
//   //   } catch (error) {
//   //     console.error("Error fetching user:", error);
//   //   }

//   //   const newUser = {
//   //     id: userInfo.attributes.sub,
//   //     username: userInfo.username,
//   //     email: userInfo.attributes.email,
//   //   };

//   //   try {
//   //     await API.graphql({
//   //       query: getUser,
//   //       variables: { newUser },
//   //       authMode: "AMAZON_COGNITO_USER_POOLS",
//   //     });
//   //   } catch (error) {
//   //     console.error("Error creating user:", error);
//   //   }
//   // };
//   // fetchUser();

//   return (
//     <SafeAreaView>
//       <Text> Halla </Text>
//       <TextPost />
//     </SafeAreaView>
//   );
// };

// export default withAuthenticator(App);
// // export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

import { withAuthenticator } from "@aws-amplify/ui-react-native";
import { API, Amplify, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import awsExports from "./src/aws-exports";
Amplify.configure(awsExports);

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { listTextPosts } from "./src/graphql/queries";
import MainNavigation from "./src/navigation/MainNavigation";

const App = () => {
  const [textPosts, setTextPosts] = useState([]);

  useEffect(() => {
    const fetchTextPost = async () => {
      try {
        const res = await API.graphql(graphqlOperation(listTextPosts));
        setTextPosts(res.data.listTextPosts.items);
        console.log(
          "halla",
          res.data.listTextPosts.items.map((item) => item.title)
        );
      } catch (err) {
        console.log("Text Post fetch error: ", err);
      }
    };

    fetchTextPost();
  }, []);

  const Stack = createNativeStackNavigator();

  return <MainNavigation />;
};

export default withAuthenticator(App);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
