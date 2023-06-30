import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { Amplify } from "aws-amplify";
import awsExports from "./src/aws-exports";
Amplify.configure(awsExports);

import { withAuthenticator } from "@aws-amplify/ui-react-native";

function App() {
  return (
    <View style={styles.container}>
      <Text> MIA Todays News Test </Text>
      <StatusBar style="auto" />
    </View>
  );
}

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
