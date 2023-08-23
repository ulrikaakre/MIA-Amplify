/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      videos {
        items {
          id
          videoUri
          description
          createdAt
          updatedAt
          userVideosId
          __typename
        }
        nextToken
        __typename
      }
      texts {
        items {
          id
          title
          content
          createdAt
          updatedAt
          userTextsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        videos {
          nextToken
          __typename
        }
        texts {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getVideoPost = /* GraphQL */ `
  query GetVideoPost($id: ID!) {
    getVideoPost(id: $id) {
      id
      videoUri
      description
      user {
        id
        username
        email
        videos {
          nextToken
          __typename
        }
        texts {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userVideosId
      __typename
    }
  }
`;
export const listVideoPosts = /* GraphQL */ `
  query ListVideoPosts(
    $filter: ModelVideoPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideoPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        videoUri
        description
        user {
          id
          username
          email
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        userVideosId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTextPost = /* GraphQL */ `
  query GetTextPost($id: ID!) {
    getTextPost(id: $id) {
      id
      title
      content
      user {
        id
        username
        email
        videos {
          nextToken
          __typename
        }
        texts {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTextsId
      __typename
    }
  }
`;
export const listTextPosts = /* GraphQL */ `
  query ListTextPosts(
    $filter: ModelTextPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTextPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        user {
          id
          username
          email
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        userTextsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
