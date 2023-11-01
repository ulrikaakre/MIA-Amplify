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
          subThemeTextPostId
          __typename
        }
        nextToken
        __typename
      }
      savedTextPosts {
        items {
          id
          userId
          textPostId
          createdAt
          updatedAt
          userSavedTextPostsId
          textPostSavedByUsersId
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
        savedTextPosts {
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
        savedTextPosts {
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
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      SubTheme {
        items {
          id
          name
          createdAt
          updatedAt
          categorySubThemeId
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
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        SubTheme {
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
export const getSubTheme = /* GraphQL */ `
  query GetSubTheme($id: ID!) {
    getSubTheme(id: $id) {
      id
      name
      TextPost {
        items {
          id
          title
          content
          createdAt
          updatedAt
          userTextsId
          subThemeTextPostId
          __typename
        }
        nextToken
        __typename
      }
      Category {
        id
        name
        SubTheme {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      categorySubThemeId
      __typename
    }
  }
`;
export const listSubThemes = /* GraphQL */ `
  query ListSubThemes(
    $filter: ModelSubThemeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubThemes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        TextPost {
          nextToken
          __typename
        }
        Category {
          id
          name
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        categorySubThemeId
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
        savedTextPosts {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      SubTheme {
        id
        name
        TextPost {
          nextToken
          __typename
        }
        Category {
          id
          name
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        categorySubThemeId
        __typename
      }
      savedByUsers {
        items {
          id
          userId
          textPostId
          createdAt
          updatedAt
          userSavedTextPostsId
          textPostSavedByUsersId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userTextsId
      subThemeTextPostId
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
        SubTheme {
          id
          name
          createdAt
          updatedAt
          categorySubThemeId
          __typename
        }
        savedByUsers {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userTextsId
        subThemeTextPostId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSavedTextPost = /* GraphQL */ `
  query GetSavedTextPost($id: ID!) {
    getSavedTextPost(id: $id) {
      id
      userId
      textPostId
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
        savedTextPosts {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      textPost {
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
        SubTheme {
          id
          name
          createdAt
          updatedAt
          categorySubThemeId
          __typename
        }
        savedByUsers {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userTextsId
        subThemeTextPostId
        __typename
      }
      createdAt
      updatedAt
      userSavedTextPostsId
      textPostSavedByUsersId
      __typename
    }
  }
`;
export const listSavedTextPosts = /* GraphQL */ `
  query ListSavedTextPosts(
    $filter: ModelSavedTextPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSavedTextPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        textPostId
        user {
          id
          username
          email
          createdAt
          updatedAt
          __typename
        }
        textPost {
          id
          title
          content
          createdAt
          updatedAt
          userTextsId
          subThemeTextPostId
          __typename
        }
        createdAt
        updatedAt
        userSavedTextPostsId
        textPostSavedByUsersId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
