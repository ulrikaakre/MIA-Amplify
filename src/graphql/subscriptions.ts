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
      createdAt
      updatedAt
      userTextsId
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
      createdAt
      updatedAt
      userTextsId
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
      createdAt
      updatedAt
      userTextsId
      __typename
    }
  }
`;
