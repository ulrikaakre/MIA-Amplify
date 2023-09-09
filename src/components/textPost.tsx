// import React from "react";
// import { StatusBar, StyleSheet, Text, View } from "react-native";

// import { useEffect, useState } from "react";

// import { API, Amplify, graphqlOperation } from "aws-amplify";
// import awsExports from "../aws-exports";
// Amplify.configure(awsExports);

// import { listTextPosts, listVideoPosts } from "../graphql/queries";

// const TextPost = () => {
//   useEffect(() => {
//     const [textPosts, setTextPosts] = useState([]);
//     const [videoPosts, setVideoPosts] = useState([]);

//     const fetchTextPost = async () => {
//       try {
//         const res = await API.graphql(graphqlOperation(listTextPosts));
//         console.log(res);
//         setTextPosts(res.data.listTextPosts.items);
//         console.log("textPosts", textPosts.user.username);
//       } catch (err) {
//         console.log("Text Post fetch erros: ", err);
//       }
//     };
//     const fetchVideoPost = async () => {
//       try {
//         const res = await API.graphql(graphqlOperation(listVideoPosts));
//         console.log(res);
//         setVideoPosts(res.data.listVideoPosts.items);
//         console.log("videoPosts", videoPosts.user.username);
//       } catch (err) {
//         console.log("Video Post fetch erros: ", err);
//       }
//     };
//     fetchTextPost();
//     fetchVideoPost();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={{ margin: 20, fontSize: 32 }}> MIA Todays News! </Text>
//       {/* <TextInput
//         style={{ borderWidth: 1, padding: 5, margin: 5, width: 150 }}
//         placeholder="Title"
//         onChangeText={onChangeTitle}
//         value={title}
//       />
//       <TextInput
//         style={{
//           borderWidth: 1,
//           padding: 5,
//           margin: 5,
//           width: 150,
//           height: 200,
//         }}
//         placeholder="Your text"
//         onChangeText={onChangeText}
//         value={text}
//       />
//       <Button title="Publish" /> */}
//       {textPosts.map((e) => (
//         <View
//           key={e.id}
//           style={{
//             marginBottom: 10,
//             padding: 10,
//             backgroundColor: "lightgray",
//             width: 350,
//             borderRadius: 10,
//           }}
//         >
//           <Text style={{ fontSize: 23 }}>{e.title}</Text>
//           {e.user && (
//             <Text style={{ fontSize: 16, fontStyle: "italic" }}>
//               Username: {e.user.username}
//             </Text>
//           )}
//           <Text style={{ fontSize: 18, marginTop: 10 }}>{e.content}</Text>
//         </View>
//       ))}
//       <StatusBar style="auto" />
//     </View>
//   );
// };
// export default TextPost;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const TextPost = ({ textPosts }: any) => {
  console.log(textPosts.title);
  return (
    <View style={styles.container}>
      <Text style={{ margin: 20, fontSize: 32 }}> MIA Todays News! </Text>
      {textPosts.map((e: any) => (
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
      <StatusBar style="auto" />
    </View>
  );
};

export default TextPost;
