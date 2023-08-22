import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import { Amplify } from "aws-amplify";
import awsExports from "./src/aws-exports";
Amplify.configure(awsExports);

import { withAuthenticator } from "@aws-amplify/ui-react-native";

const App = () => {
  const [text, onChangeText] = useState("");
  const [title, onChangeTitle] = useState("");

  const addPost = () => {};
  return (
    <View style={styles.container}>
      <Text style={{ margin: 20 }}> MIA Todays News! </Text>
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
      <Button title="Publish" onPress={addPost} />
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
