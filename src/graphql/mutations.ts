/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createVideoPost = /* GraphQL */ `
  mutation CreateVideoPost(
    $input: CreateVideoPostInput!
    $condition: ModelVideoPostConditionInput
  ) {
    createVideoPost(input: $input, condition: $condition) {
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
export const updateVideoPost = /* GraphQL */ `
  mutation UpdateVideoPost(
    $input: UpdateVideoPostInput!
    $condition: ModelVideoPostConditionInput
  ) {
    updateVideoPost(input: $input, condition: $condition) {
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
export const deleteVideoPost = /* GraphQL */ `
  mutation DeleteVideoPost(
    $input: DeleteVideoPostInput!
    $condition: ModelVideoPostConditionInput
  ) {
    deleteVideoPost(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createSubTheme = /* GraphQL */ `
  mutation CreateSubTheme(
    $input: CreateSubThemeInput!
    $condition: ModelSubThemeConditionInput
  ) {
    createSubTheme(input: $input, condition: $condition) {
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
export const updateSubTheme = /* GraphQL */ `
  mutation UpdateSubTheme(
    $input: UpdateSubThemeInput!
    $condition: ModelSubThemeConditionInput
  ) {
    updateSubTheme(input: $input, condition: $condition) {
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
export const deleteSubTheme = /* GraphQL */ `
  mutation DeleteSubTheme(
    $input: DeleteSubThemeInput!
    $condition: ModelSubThemeConditionInput
  ) {
    deleteSubTheme(input: $input, condition: $condition) {
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
export const createTextPost = /* GraphQL */ `
  mutation CreateTextPost(
    $input: CreateTextPostInput!
    $condition: ModelTextPostConditionInput
  ) {
    createTextPost(input: $input, condition: $condition) {
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
export const updateTextPost = /* GraphQL */ `
  mutation UpdateTextPost(
    $input: UpdateTextPostInput!
    $condition: ModelTextPostConditionInput
  ) {
    updateTextPost(input: $input, condition: $condition) {
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
export const deleteTextPost = /* GraphQL */ `
  mutation DeleteTextPost(
    $input: DeleteTextPostInput!
    $condition: ModelTextPostConditionInput
  ) {
    deleteTextPost(input: $input, condition: $condition) {
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
export const createSavedTextPost = /* GraphQL */ `
  mutation CreateSavedTextPost(
    $input: CreateSavedTextPostInput!
    $condition: ModelSavedTextPostConditionInput
  ) {
    createSavedTextPost(input: $input, condition: $condition) {
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
export const updateSavedTextPost = /* GraphQL */ `
  mutation UpdateSavedTextPost(
    $input: UpdateSavedTextPostInput!
    $condition: ModelSavedTextPostConditionInput
  ) {
    updateSavedTextPost(input: $input, condition: $condition) {
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
export const deleteSavedTextPost = /* GraphQL */ `
  mutation DeleteSavedTextPost(
    $input: DeleteSavedTextPostInput!
    $condition: ModelSavedTextPostConditionInput
  ) {
    deleteSavedTextPost(input: $input, condition: $condition) {
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
