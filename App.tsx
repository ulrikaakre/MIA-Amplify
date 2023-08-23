import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import { Amplify, Auth } from "aws-amplify";
import awsExports from "./src/aws-exports";
Amplify.configure(awsExports);

// graphqlOperation

import { withAuthenticator } from "@aws-amplify/ui-react-native";

const App = () => {
  const [text, onChangeText] = useState("");
  const [title, onChangeTitle] = useState("");

  // const addPost = () => {
  //   const { title, content } = textPostData;

  //   Storage.configure({ region: "eu-north" });

  //   const {key} = await Storage.put(`${uuid()}`,)
  // };

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      console.log("userinfo: " + userInfo);
    };
    fetchUser;
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ margin: 20 }}> MIA Todays News!! </Text>
      <TextInput
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
      {/* <Button title="Publish" onPress={addPost} /> */}
      <Button title="Publish" />
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
