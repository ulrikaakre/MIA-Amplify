/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  email: string,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  email: string,
  videos?: ModelVideoPostConnection | null,
  texts?: ModelTextPostConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelVideoPostConnection = {
  __typename: "ModelVideoPostConnection",
  items:  Array<VideoPost | null >,
  nextToken?: string | null,
};

export type VideoPost = {
  __typename: "VideoPost",
  id: string,
  videoUri: string,
  description?: string | null,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
  userVideosId?: string | null,
};

export type ModelTextPostConnection = {
  __typename: "ModelTextPostConnection",
  items:  Array<TextPost | null >,
  nextToken?: string | null,
};

export type TextPost = {
  __typename: "TextPost",
  id: string,
  title: string,
  content: string,
  user?: User | null,
  SubTheme?: SubTheme | null,
  createdAt: string,
  updatedAt: string,
  userTextsId?: string | null,
  subThemeTextPostId?: string | null,
};

export type SubTheme = {
  __typename: "SubTheme",
  id: string,
  name: string,
  TextPost?: ModelTextPostConnection | null,
  Category?: Category | null,
  createdAt: string,
  updatedAt: string,
  categorySubThemeId?: string | null,
};

export type Category = {
  __typename: "Category",
  id: string,
  name: string,
  SubTheme?: ModelSubThemeConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelSubThemeConnection = {
  __typename: "ModelSubThemeConnection",
  items:  Array<SubTheme | null >,
  nextToken?: string | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateVideoPostInput = {
  id?: string | null,
  videoUri: string,
  description?: string | null,
  userVideosId?: string | null,
};

export type ModelVideoPostConditionInput = {
  videoUri?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelVideoPostConditionInput | null > | null,
  or?: Array< ModelVideoPostConditionInput | null > | null,
  not?: ModelVideoPostConditionInput | null,
  userVideosId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateVideoPostInput = {
  id: string,
  videoUri?: string | null,
  description?: string | null,
  userVideosId?: string | null,
};

export type DeleteVideoPostInput = {
  id: string,
};

export type CreateCategoryInput = {
  id?: string | null,
  name: string,
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type CreateSubThemeInput = {
  id?: string | null,
  name: string,
  categorySubThemeId?: string | null,
};

export type ModelSubThemeConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelSubThemeConditionInput | null > | null,
  or?: Array< ModelSubThemeConditionInput | null > | null,
  not?: ModelSubThemeConditionInput | null,
  categorySubThemeId?: ModelIDInput | null,
};

export type UpdateSubThemeInput = {
  id: string,
  name?: string | null,
  categorySubThemeId?: string | null,
};

export type DeleteSubThemeInput = {
  id: string,
};

export type CreateTextPostInput = {
  id?: string | null,
  title: string,
  content: string,
  userTextsId?: string | null,
  subThemeTextPostId?: string | null,
};

export type ModelTextPostConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelTextPostConditionInput | null > | null,
  or?: Array< ModelTextPostConditionInput | null > | null,
  not?: ModelTextPostConditionInput | null,
  userTextsId?: ModelIDInput | null,
  subThemeTextPostId?: ModelIDInput | null,
};

export type UpdateTextPostInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  userTextsId?: string | null,
  subThemeTextPostId?: string | null,
};

export type DeleteTextPostInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelVideoPostFilterInput = {
  id?: ModelIDInput | null,
  videoUri?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelVideoPostFilterInput | null > | null,
  or?: Array< ModelVideoPostFilterInput | null > | null,
  not?: ModelVideoPostFilterInput | null,
  userVideosId?: ModelIDInput | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
};

export type ModelSubThemeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelSubThemeFilterInput | null > | null,
  or?: Array< ModelSubThemeFilterInput | null > | null,
  not?: ModelSubThemeFilterInput | null,
  categorySubThemeId?: ModelIDInput | null,
};

export type ModelTextPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelTextPostFilterInput | null > | null,
  or?: Array< ModelTextPostFilterInput | null > | null,
  not?: ModelTextPostFilterInput | null,
  userTextsId?: ModelIDInput | null,
  subThemeTextPostId?: ModelIDInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionVideoPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  videoUri?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionVideoPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionVideoPostFilterInput | null > | null,
};

export type ModelSubscriptionCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
};

export type ModelSubscriptionSubThemeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSubThemeFilterInput | null > | null,
  or?: Array< ModelSubscriptionSubThemeFilterInput | null > | null,
};

export type ModelSubscriptionTextPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTextPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionTextPostFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    videos?:  {
      __typename: "ModelVideoPostConnection",
      items:  Array< {
        __typename: "VideoPost",
        id: string,
        videoUri: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        userVideosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    texts?:  {
      __typename: "ModelTextPostConnection",
      items:  Array< {
        __typename: "TextPost",
        id: string,
        title: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userTextsId?: string | null,
        subThemeTextPostId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    videos?:  {
      __typename: "ModelVideoPostConnection",
      items:  Array< {
        __typename: "VideoPost",
        id: string,
        videoUri: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        userVideosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    texts?:  {
      __typename: "ModelTextPostConnection",
      items:  Array< {
        __typename: "TextPost",
        id: string,
        title: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userTextsId?: string | null,
        subThemeTextPostId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    videos?:  {
      __typename: "ModelVideoPostConnection",
      items:  Array< {
        __typename: "VideoPost",
        id: string,
        videoUri: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        userVideosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    texts?:  {
      __typename: "ModelTextPostConnection",
      items:  Array< {
        __typename: "TextPost",
        id: string,
        title: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userTextsId?: string | null,
        subThemeTextPostId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateVideoPostMutationVariables = {
  input: CreateVideoPostInput,
  condition?: ModelVideoPostConditionInput | null,
};

export type CreateVideoPostMutation = {
  createVideoPost?:  {
    __typename: "VideoPost",
    id: string,
    videoUri: string,
    description?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      videos?:  {
        __typename: "ModelVideoPostConnection",
        nextToken?: string | null,
      } | null,
      texts?:  {
        __typename: "ModelTextPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userVideosId?: string | null,
  } | null,
};

export type UpdateVideoPostMutationVariables = {
  input: UpdateVideoPostInput,
  condition?: ModelVideoPostConditionInput | null,
};

export type UpdateVideoPostMutation = {
  updateVideoPost?:  {
    __typename: "VideoPost",
    id: string,
    videoUri: string,
    description?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      videos?:  {
        __typename: "ModelVideoPostConnection",
        nextToken?: string | null,
      } | null,
      texts?:  {
        __typename: "ModelTextPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userVideosId?: string | null,
  } | null,
};

export type DeleteVideoPostMutationVariables = {
  input: DeleteVideoPostInput,
  condition?: ModelVideoPostConditionInput | null,
};

export type DeleteVideoPostMutation = {
  deleteVideoPost?:  {
    __typename: "VideoPost",
    id: string,
    videoUri: string,
    description?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      videos?:  {
        __typename: "ModelVideoPostConnection",
        nextToken?: string | null,
      } | null,
      texts?:  {
        __typename: "ModelTextPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userVideosId?: string | null,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    SubTheme?:  {
      __typename: "ModelSubThemeConnection",
      items:  Array< {
        __typename: "SubTheme",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        categorySubThemeId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    SubTheme?:  {
      __typename: "ModelSubThemeConnection",
      items:  Array< {
        __typename: "SubTheme",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        categorySubThemeId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    SubTheme?:  {
      __typename: "ModelSubThemeConnection",
      items:  Array< {
        __typename: "SubTheme",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        categorySubThemeId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSubThemeMutationVariables = {
  input: CreateSubThemeInput,
  condition?: ModelSubThemeConditionInput | null,
};

export type CreateSubThemeMutation = {
  createSubTheme?:  {
    __typename: "SubTheme",
    id: string,
    name: string,
    TextPost?:  {
      __typename: "ModelTextPostConnection",
      items:  Array< {
        __typename: "TextPost",
        id: string,
        title: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userTextsId?: string | null,
        subThemeTextPostId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Category?:  {
      __typename: "Category",
      id: string,
      name: string,
      SubTheme?:  {
        __typename: "ModelSubThemeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    categorySubThemeId?: string | null,
  } | null,
};

export type UpdateSubThemeMutationVariables = {
  input: UpdateSubThemeInput,
  condition?: ModelSubThemeConditionInput | null,
};

export type UpdateSubThemeMutation = {
  updateSubTheme?:  {
    __typename: "SubTheme",
    id: string,
    name: string,
    TextPost?:  {
      __typename: "ModelTextPostConnection",
      items:  Array< {
        __typename: "TextPost",
        id: string,
        title: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userTextsId?: string | null,
        subThemeTextPostId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Category?:  {
      __typename: "Category",
      id: string,
      name: string,
      SubTheme?:  {
        __typename: "ModelSubThemeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    categorySubThemeId?: string | null,
  } | null,
};

export type DeleteSubThemeMutationVariables = {
  input: DeleteSubThemeInput,
  condition?: ModelSubThemeConditionInput | null,
};

export type DeleteSubThemeMutation = {
  deleteSubTheme?:  {
    __typename: "SubTheme",
    id: string,
    name: string,
    TextPost?:  {
      __typename: "ModelTextPostConnection",
      items:  Array< {
        __typename: "TextPost",
        id: string,
        title: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userTextsId?: string | null,
        subThemeTextPostId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Category?:  {
      __typename: "Category",
      id: string,
      name: string,
      SubTheme?:  {
        __typename: "ModelSubThemeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    categorySubThemeId?: string | null,
  } | null,
};

export type CreateTextPostMutationVariables = {
  input: CreateTextPostInput,
  condition?: ModelTextPostConditionInput | null,
};

export type CreateTextPostMutation = {
  createTextPost?:  {
    __typename: "TextPost",
    id: string,
    title: string,
    content: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      videos?:  {
        __typename: "ModelVideoPostConnection",
        nextToken?: string | null,
      } | null,
      texts?:  {
        __typename: "ModelTextPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    SubTheme?:  {
      __typename: "SubTheme",
      id: string,
      name: string,
      TextPost?:  {
        __typename: "ModelTextPostConnection",
        nextToken?: string | null,
      } | null,
      Category?:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      categorySubThemeId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userTextsId?: string | null,
    subThemeTextPostId?: string | null,
  } | null,
};

export type UpdateTextPostMutationVariables = {
  input: UpdateTextPostInput,
  condition?: ModelTextPostConditionInput | null,
};

export type UpdateTextPostMutation = {
  updateTextPost?:  {
    __typename: "TextPost",
    id: string,
    title: string,
    content: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      videos?:  {
        __typename: "ModelVideoPostConnection",
        nextToken?: string | null,
      } | null,
      texts?:  {
        __typename: "ModelTextPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    SubTheme?:  {
      __typename: "SubTheme",
      id: string,
      name: string,
      TextPost?:  {
        __typename: "ModelTextPostConnection",
        nextToken?: string | null,
      } | null,
      Category?:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      categorySubThemeId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userTextsId?: string | null,
    subThemeTextPostId?: string | null,
  } | null,
};

export type DeleteTextPostMutationVariables = {
  input: DeleteTextPostInput,
  condition?: ModelTextPostConditionInput | null,
};

export type DeleteTextPostMutation = {
  deleteTextPost?:  {
    __typename: "TextPost",
    id: string,
    title: string,
    content: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      videos?:  {
        __typename: "ModelVideoPostConnection",
        nextToken?: string | null,
      } | null,
      texts?:  {
        __typename: "ModelTextPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    SubTheme?:  {
      __typename: "SubTheme",
      id: string,
      name: string,
      TextPost?:  {
        __typename: "ModelTextPostConnection",
        nextToken?: string | null,
      } | null,
      Category?:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      categorySubThemeId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userTextsId?: string | null,
    subThemeTextPostId?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    videos?:  {
      __typename: "ModelVideoPostConnection",
      items:  Array< {
        __typename: "VideoPost",
        id: string,
        videoUri: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        userVideosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    texts?:  {
      __typename: "ModelTextPostConnection",
      items:  Array< {
        __typename: "TextPost",
        id: string,
        title: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userTextsId?: string | null,
        subThemeTextPostId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      videos?:  {
        __typename: "ModelVideoPostConnection",
        nextToken?: string | null,
      } | null,
      texts?:  {
        __typename: "ModelTextPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetVideoPostQueryVariables = {
  id: string,
};

export type GetVideoPostQuery = {
  getVideoPost?:  {
    __typename: "VideoPost",
    id: string,
    videoUri: string,
    description?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      videos?:  {
        __typename: "ModelVideoPostConnection",
        nextToken?: string | null,
      } | null,
      texts?:  {
        __typename: "ModelTextPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userVideosId?: string | null,
  } | null,
};

export type ListVideoPostsQueryVariables = {
  filter?: ModelVideoPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVideoPostsQuery = {
  listVideoPosts?:  {
    __typename: "ModelVideoPostConnection",
    items:  Array< {
      __typename: "VideoPost",
      id: string,
      videoUri: string,
      description?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      userVideosId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    SubTheme?:  {
      __typename: "ModelSubThemeConnection",
      items:  Array< {
        __typename: "SubTheme",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        categorySubThemeId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      SubTheme?:  {
        __typename: "ModelSubThemeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSubThemeQueryVariables = {
  id: string,
};

export type GetSubThemeQuery = {
  getSubTheme?:  {
    __typename: "SubTheme",
    id: string,
    name: string,
    TextPost?:  {
      __typename: "ModelTextPostConnection",
      items:  Array< {
        __typename: "TextPost",
        id: string,
        title: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userTextsId?: string | null,
        subThemeTextPostId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Category?:  {
      __typename: "Category",
      id: string,
      name: string,
      SubTheme?:  {
        __typename: "ModelSubThemeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    categorySubThemeId?: string | null,
  } | null,
};

export type ListSubThemesQueryVariables = {
  filter?: ModelSubThemeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubThemesQuery = {
  listSubThemes?:  {
    __typename: "ModelSubThemeConnection",
    items:  Array< {
      __typename: "SubTheme",
      id: string,
      name: string,
      TextPost?:  {
        __typename: "ModelTextPostConnection",
        nextToken?: string | null,
      } | null,
      Category?:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      categorySubThemeId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTextPostQueryVariables = {
  id: string,
};

export type GetTextPostQuery = {
  getTextPost?:  {
    __typename: "TextPost",
    id: string,
    title: string,
    content: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      videos?:  {
        __typename: "ModelVideoPostConnection",
        nextToken?: string | null,
      } | null,
      texts?:  {
        __typename: "ModelTextPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    SubTheme?:  {
      __typename: "SubTheme",
      id: string,
      name: string,
      TextPost?:  {
        __typename: "ModelTextPostConnection",
        nextToken?: string | null,
      } | null,
      Category?:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      categorySubThemeId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userTextsId?: string | null,
    subThemeTextPostId?: string | null,
  } | null,
};

export type ListTextPostsQueryVariables = {
  filter?: ModelTextPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTextPostsQuery = {
  listTextPosts?:  {
    __typename: "ModelTextPostConnection",
    items:  Array< {
      __typename: "TextPost",
      id: string,
      title: string,
      content: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      SubTheme?:  {
        __typename: "SubTheme",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        categorySubThemeId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userTextsId?: string | null,
      subThemeTextPostId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    videos?:  {
      __typename: "ModelVideoPostConnection",
      items:  Array< {
        __typename: "VideoPost",
        id: string,
        videoUri: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        userVideosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    texts?:  {
      __typename: "ModelTextPostConnection",
      items:  Array< {
        __typename: "TextPost",
        id: string,
        title: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userTextsId?: string | null,
        subThemeTextPostId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    videos?:  {
      __typename: "ModelVideoPostConnection",
      items:  Array< {
        __typename: "VideoPost",
        id: string,
        videoUri: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        userVideosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    texts?:  {
      __typename: "ModelTextPostConnection",
      items:  Array< {
        __typename: "TextPost",
        id: string,
        title: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userTextsId?: string | null,
        subThemeTextPostId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    videos?:  {
      __typename: "ModelVideoPostConnection",
      items:  Array< {
        __typename: "VideoPost",
        id: string,
        videoUri: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        userVideosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    texts?:  {
      __typename: "ModelTextPostConnection",
      items:  Array< {
        __typename: "TextPost",
        id: string,
        title: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userTextsId?: string | null,
        subThemeTextPostId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateVideoPostSubscriptionVariables = {
  filter?: ModelSubscriptionVideoPostFilterInput | null,
};

export type OnCreateVideoPostSubscription = {
  onCreateVideoPost?:  {
    __typename: "VideoPost",
    id: string,
    videoUri: string,
    description?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      videos?:  {
        __typename: "ModelVideoPostConnection",
        nextToken?: string | null,
      } | null,
      texts?:  {
        __typename: "ModelTextPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userVideosId?: string | null,
  } | null,
};

export type OnUpdateVideoPostSubscriptionVariables = {
  filter?: ModelSubscriptionVideoPostFilterInput | null,
};

export type OnUpdateVideoPostSubscription = {
  onUpdateVideoPost?:  {
    __typename: "VideoPost",
    id: string,
    videoUri: string,
    description?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      videos?:  {
        __typename: "ModelVideoPostConnection",
        nextToken?: string | null,
      } | null,
      texts?:  {
        __typename: "ModelTextPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userVideosId?: string | null,
  } | null,
};

export type OnDeleteVideoPostSubscriptionVariables = {
  filter?: ModelSubscriptionVideoPostFilterInput | null,
};

export type OnDeleteVideoPostSubscription = {
  onDeleteVideoPost?:  {
    __typename: "VideoPost",
    id: string,
    videoUri: string,
    description?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      videos?:  {
        __typename: "ModelVideoPostConnection",
        nextToken?: string | null,
      } | null,
      texts?:  {
        __typename: "ModelTextPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userVideosId?: string | null,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    SubTheme?:  {
      __typename: "ModelSubThemeConnection",
      items:  Array< {
        __typename: "SubTheme",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        categorySubThemeId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    SubTheme?:  {
      __typename: "ModelSubThemeConnection",
      items:  Array< {
        __typename: "SubTheme",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        categorySubThemeId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    SubTheme?:  {
      __typename: "ModelSubThemeConnection",
      items:  Array< {
        __typename: "SubTheme",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        categorySubThemeId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSubThemeSubscriptionVariables = {
  filter?: ModelSubscriptionSubThemeFilterInput | null,
};

export type OnCreateSubThemeSubscription = {
  onCreateSubTheme?:  {
    __typename: "SubTheme",
    id: string,
    name: string,
    TextPost?:  {
      __typename: "ModelTextPostConnection",
      items:  Array< {
        __typename: "TextPost",
        id: string,
        title: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userTextsId?: string | null,
        subThemeTextPostId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Category?:  {
      __typename: "Category",
      id: string,
      name: string,
      SubTheme?:  {
        __typename: "ModelSubThemeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    categorySubThemeId?: string | null,
  } | null,
};

export type OnUpdateSubThemeSubscriptionVariables = {
  filter?: ModelSubscriptionSubThemeFilterInput | null,
};

export type OnUpdateSubThemeSubscription = {
  onUpdateSubTheme?:  {
    __typename: "SubTheme",
    id: string,
    name: string,
    TextPost?:  {
      __typename: "ModelTextPostConnection",
      items:  Array< {
        __typename: "TextPost",
        id: string,
        title: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userTextsId?: string | null,
        subThemeTextPostId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Category?:  {
      __typename: "Category",
      id: string,
      name: string,
      SubTheme?:  {
        __typename: "ModelSubThemeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    categorySubThemeId?: string | null,
  } | null,
};

export type OnDeleteSubThemeSubscriptionVariables = {
  filter?: ModelSubscriptionSubThemeFilterInput | null,
};

export type OnDeleteSubThemeSubscription = {
  onDeleteSubTheme?:  {
    __typename: "SubTheme",
    id: string,
    name: string,
    TextPost?:  {
      __typename: "ModelTextPostConnection",
      items:  Array< {
        __typename: "TextPost",
        id: string,
        title: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userTextsId?: string | null,
        subThemeTextPostId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Category?:  {
      __typename: "Category",
      id: string,
      name: string,
      SubTheme?:  {
        __typename: "ModelSubThemeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    categorySubThemeId?: string | null,
  } | null,
};

export type OnCreateTextPostSubscriptionVariables = {
  filter?: ModelSubscriptionTextPostFilterInput | null,
};

export type OnCreateTextPostSubscription = {
  onCreateTextPost?:  {
    __typename: "TextPost",
    id: string,
    title: string,
    content: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      videos?:  {
        __typename: "ModelVideoPostConnection",
        nextToken?: string | null,
      } | null,
      texts?:  {
        __typename: "ModelTextPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    SubTheme?:  {
      __typename: "SubTheme",
      id: string,
      name: string,
      TextPost?:  {
        __typename: "ModelTextPostConnection",
        nextToken?: string | null,
      } | null,
      Category?:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      categorySubThemeId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userTextsId?: string | null,
    subThemeTextPostId?: string | null,
  } | null,
};

export type OnUpdateTextPostSubscriptionVariables = {
  filter?: ModelSubscriptionTextPostFilterInput | null,
};

export type OnUpdateTextPostSubscription = {
  onUpdateTextPost?:  {
    __typename: "TextPost",
    id: string,
    title: string,
    content: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      videos?:  {
        __typename: "ModelVideoPostConnection",
        nextToken?: string | null,
      } | null,
      texts?:  {
        __typename: "ModelTextPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    SubTheme?:  {
      __typename: "SubTheme",
      id: string,
      name: string,
      TextPost?:  {
        __typename: "ModelTextPostConnection",
        nextToken?: string | null,
      } | null,
      Category?:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      categorySubThemeId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userTextsId?: string | null,
    subThemeTextPostId?: string | null,
  } | null,
};

export type OnDeleteTextPostSubscriptionVariables = {
  filter?: ModelSubscriptionTextPostFilterInput | null,
};

export type OnDeleteTextPostSubscription = {
  onDeleteTextPost?:  {
    __typename: "TextPost",
    id: string,
    title: string,
    content: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      videos?:  {
        __typename: "ModelVideoPostConnection",
        nextToken?: string | null,
      } | null,
      texts?:  {
        __typename: "ModelTextPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    SubTheme?:  {
      __typename: "SubTheme",
      id: string,
      name: string,
      TextPost?:  {
        __typename: "ModelTextPostConnection",
        nextToken?: string | null,
      } | null,
      Category?:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      categorySubThemeId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userTextsId?: string | null,
    subThemeTextPostId?: string | null,
  } | null,
};
