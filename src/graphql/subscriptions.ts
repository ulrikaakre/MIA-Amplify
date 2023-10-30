/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateVideoPost = /* GraphQL */ `
  subscription OnCreateVideoPost(
    $filter: ModelSubscriptionVideoPostFilterInput
  ) {
    onCreateVideoPost(filter: $filter) {
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
export const onUpdateVideoPost = /* GraphQL */ `
  subscription OnUpdateVideoPost(
    $filter: ModelSubscriptionVideoPostFilterInput
  ) {
    onUpdateVideoPost(filter: $filter) {
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
export const onDeleteVideoPost = /* GraphQL */ `
  subscription OnDeleteVideoPost(
    $filter: ModelSubscriptionVideoPostFilterInput
  ) {
    onDeleteVideoPost(filter: $filter) {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
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
export const onCreateSubTheme = /* GraphQL */ `
  subscription OnCreateSubTheme($filter: ModelSubscriptionSubThemeFilterInput) {
    onCreateSubTheme(filter: $filter) {
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
export const onUpdateSubTheme = /* GraphQL */ `
  subscription OnUpdateSubTheme($filter: ModelSubscriptionSubThemeFilterInput) {
    onUpdateSubTheme(filter: $filter) {
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
export const onDeleteSubTheme = /* GraphQL */ `
  subscription OnDeleteSubTheme($filter: ModelSubscriptionSubThemeFilterInput) {
    onDeleteSubTheme(filter: $filter) {
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
export const onCreateTextPost = /* GraphQL */ `
  subscription OnCreateTextPost($filter: ModelSubscriptionTextPostFilterInput) {
    onCreateTextPost(filter: $filter) {
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
      createdAt
      updatedAt
      userTextsId
      subThemeTextPostId
      __typename
    }
  }
`;
export const onUpdateTextPost = /* GraphQL */ `
  subscription OnUpdateTextPost($filter: ModelSubscriptionTextPostFilterInput) {
    onUpdateTextPost(filter: $filter) {
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
      createdAt
      updatedAt
      userTextsId
      subThemeTextPostId
      __typename
    }
  }
`;
export const onDeleteTextPost = /* GraphQL */ `
  subscription OnDeleteTextPost($filter: ModelSubscriptionTextPostFilterInput) {
    onDeleteTextPost(filter: $filter) {
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
      createdAt
      updatedAt
      userTextsId
      subThemeTextPostId
      __typename
    }
  }
`;
