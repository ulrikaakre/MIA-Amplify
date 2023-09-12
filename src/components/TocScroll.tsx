import { API, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, Text, View } from "react-native";
import { listTextPosts } from "../graphql/queries";

interface TextPost {
  __typename: String;
  createdAt: Date;
  id: String;
  title: String;
  content: String;
}

interface GraphQLResult<T> {
  data: {
    listTextPosts: {
      items: T[];
    };
  };
}

const TocScroll = () => {
  const windowHeight = Dimensions.get("window").height;

  const arr = [1, 2, 3, 4, 5];

  const [textPosts, setTextPosts] = useState<TextPost[]>([]);

  useEffect(() => {
    const fetchTextPost = async () => {
      try {
        const res = (await API.graphql(
          graphqlOperation(listTextPosts)
        )) as GraphQLResult<TextPost>;

        setTextPosts(res.data.listTextPosts.items);
        console.log(
          "halla",
          res.data.listTextPosts.items.map((item: TextPost) => item.content)
        );
      } catch (err) {
        console.log("Text Post fetch error: ", err);
      }
    };

    fetchTextPost();
  }, []);

  const renderItem = ({ item, index }: any) => {
    return (
      <View
        style={[
          {
            flex: 1,
            height: windowHeight,
            paddingTop: 60,
            paddingBottom: 50,
            paddingLeft: 15,
            paddingRight: 15,
            // margin: 10,
            backgroundColor: "#eee",
          },
        ]}
      >
        <Text
          style={{
            fontSize: 32,
            fontFamily: "Arial",
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          {item.title}
        </Text>
        <Text style={{ fontSize: 18, lineHeight: 20 }}>{item.content}</Text>
      </View>
    );
  };
  return (
    <FlatList
      data={textPosts}
      renderItem={renderItem}
      // pagingEnabled
      // keyExtractor={(item): any => item}
    />
  );
};

export default TocScroll;
