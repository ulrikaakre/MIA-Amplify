import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { API, Amplify, graphqlOperation } from "aws-amplify";
import awsExports from "./src/aws-exports";
Amplify.configure(awsExports);

import { withAuthenticator } from "@aws-amplify/ui-react-native";

import { listTextPosts, listVideoPosts } from "./src/graphql/queries";

const App = () => {
  const [text, onChangeText] = useState("");
  const [title, onChangeTitle] = useState("");

  const [textPosts, setTextPosts] = useState([]);
  const [videoPosts, setVideoPosts] = useState([]);

  // const addPost = () => {
  //   const { title, content } = textPostData;

  //   Storage.configure({ region: "eu-north" });

  //   const {key} = await Storage.put(`${uuid()}`,)
  // };

  useEffect(() => {
    // const fetchUser = async () => {
    //   const userInfo = await Auth.currentAuthenticatedUser({
    //     bypassCache: true,
    //   });
    //   console.log("attributes: ", userInfo.attributes);
    //   console.log("sub: ", userInfo.attributes.sub);
    //   if (!userInfo) {
    //     return;
    //   }

    //   try {
    //     const getUserResponse = await API.graphql({
    //       query: getUser,
    //       variables: { id: userInfo.attributes.sub.toString() },
    //       authMode: "AMAZON_COGNITO_USER_POOLS",
    //     });

    //     if (getUserResponse.data && getUserResponse.data.getUser) {
    //       console.log("User exists.");
    //     }
    //   } catch (error) {
    //     console.error("Error fetching user:", error);
    //   }

    //   const newUser = {
    //     id: userInfo.attributes.sub,
    //     username: userInfo.username,
    //     email: userInfo.attributes.email,
    //   };

    //   try {
    //     await API.graphql({
    //       query: getUser,
    //       variables: { newUser },
    //       authMode: "AMAZON_COGNITO_USER_POOLS",
    //     });
    //   } catch (error) {
    //     console.error("Error creating user:", error);
    //   }
    // };
    // fetchUser();

    const fetchTextPost = async () => {
      try {
        const res = await API.graphql(graphqlOperation(listTextPosts));
        console.log(res);
        setTextPosts(res.data.listTextPosts.items);
        console.log("textPosts", textPosts.user.username);
      } catch (err) {
        console.log("Text Post fetch erros: ", err);
      }
    };
    const fetchVideoPost = async () => {
      try {
        const res = await API.graphql(graphqlOperation(listVideoPosts));
        console.log(res);
        setVideoPosts(res.data.listVideoPosts.items);
        console.log("videoPosts", videoPosts.user.username);
      } catch (err) {
        console.log("Video Post fetch erros: ", err);
      }
    };
    fetchTextPost();
    fetchVideoPost();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ margin: 20, fontSize: 32 }}> MIA Todays News! </Text>
      {/* <TextInput
        style={{ borderWidth: 1, padding: 5, margin: 5, width: 150 }}
        placeholder="Title"
        onChangeText={onChangeTitle}
        value={title}
      />
      <TextInput
        style={{
          borderWidth: 1,
          padding: 5,
          margin: 5,
          width: 150,
          height: 200,
        }}
        placeholder="Your text"
        onChangeText={onChangeText}
        value={text}
      />
      <Button title="Publish" /> */}
      {textPosts.map((e) => (
        <View
          key={e.id}
          style={{
            marginBottom: 10,
            padding: 10,
            backgroundColor: "lightgray",
            width: 350,
            borderRadius: 10,
          }}
        >
          <Text style={{ fontSize: 23 }}>{e.title}</Text>
          {e.user && (
            <Text style={{ fontSize: 16, fontStyle: "italic" }}>
              Username: {e.user.username}
            </Text>
          )}
          <Text style={{ fontSize: 18, marginTop: 10 }}>{e.content}</Text>
        </View>
      ))}

      {/* {videoPosts.map((video) => (
        <View
          key={video.id}
          style={{
            marginBottom: 10,
            padding: 10,
            backgroundColor: "lightgray",
          }}
        >
          <Text style={{ fontSize: 23 }}>Video Title</Text>
          <Video source={video.videoURI} paused={false} />
        </View>
      ))} */}

      <StatusBar style="auto" />
    </View>
  );
};

export default withAuthenticator(App);
// export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
