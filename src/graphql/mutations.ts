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
