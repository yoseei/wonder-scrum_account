/* eslint-disable */
import { gql } from "@apollo/client";
import * as ApolloReactCommon from "@apollo/client";
import * as ApolloReactHooks from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  /** 画像をbase64で扱う */
  EncodedImage: any;
  /** #なしの16進数カラー(3けたor6ケタ) */
  HexColor: any;
};

/** Account Object */
export type Account = Node &
  Record & {
    __typename?: "Account";
    id: Scalars["ID"];
    email: Scalars["String"];
    username: Scalars["String"];
    avatarUrl?: Maybe<Scalars["String"]>;
    projectInvitations?: Maybe<ProjectMembershipConnection>;
    projects: ProjectConnection;
    tasks: TaskConnection;
    createdAt: Scalars["DateTime"];
    updatedAt: Scalars["DateTime"];
  };

/** Account Object */
export type AccountProjectInvitationsArgs = {
  first?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["String"]>;
};

/** Account Object */
export type AccountProjectsArgs = {
  first?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["String"]>;
};

/** Account Object */
export type AccountTasksArgs = {
  first?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["String"]>;
  state?: Maybe<Array<TaskState>>;
};

export type AccountConnection = {
  __typename?: "AccountConnection";
  pageInfo: PageInfo;
  edges?: Maybe<Array<Maybe<AccountEdge>>>;
};

export type AccountEdge = {
  __typename?: "AccountEdge";
  cursor: Scalars["String"];
  node?: Maybe<Account>;
};

export type CreateProjectInput = {
  title: Scalars["String"];
};

export type CreateProjectPayload = {
  __typename?: "CreateProjectPayload";
  project?: Maybe<Project>;
};

export type CreateTaskInput = {
  name: Scalars["String"];
  assigneeIds?: Maybe<Array<Scalars["ID"]>>;
  state?: Maybe<TaskState>;
};

export type CreateTaskPayload = {
  __typename?: "CreateTaskPayload";
  task?: Maybe<Task>;
};

export type DeleteAccountInput = {
  accountId: Scalars["ID"];
};

export type DeleteAccountPayload = {
  __typename?: "DeleteAccountPayload";
  account?: Maybe<Account>;
};

export type DeleteProjectInput = {
  projectId: Scalars["ID"];
};

export type DeleteProjectMembershipInput = {
  proejctMemebershipId: Scalars["ID"];
};

export type DeleteProjectMembershipPayload = {
  __typename?: "DeleteProjectMembershipPayload";
  projectMembership?: Maybe<ProjectMembership>;
};

export type DeleteProjectPayload = {
  __typename?: "DeleteProjectPayload";
  project?: Maybe<Project>;
};

export type InviteProjectMembersInput = {
  projectId: Scalars["ID"];
  emails?: Maybe<Array<Scalars["String"]>>;
};

export type InviteProjectMembersPayload = {
  __typename?: "InviteProjectMembersPayload";
  projectMemberships?: Maybe<ProjectMembershipConnection>;
};

export type InviteProjectMembersPayloadProjectMembershipsArgs = {
  first?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["String"]>;
};

export type LogInAccountInput = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type LogInAccountPayload = {
  __typename?: "LogInAccountPayload";
  account?: Maybe<Account>;
};

export type Mutation = {
  __typename?: "Mutation";
  signUpAccount?: Maybe<SignUpAccountPayload>;
  logInAccount?: Maybe<LogInAccountPayload>;
  updateAccount?: Maybe<UpdateAccountPayload>;
  deleteAccount?: Maybe<DeleteAccountPayload>;
  createProject?: Maybe<CreateProjectPayload>;
  updateProject?: Maybe<UpdateProjectPayload>;
  deleteProject?: Maybe<DeleteProjectPayload>;
  inviteProjectMembers?: Maybe<InviteProjectMembersPayload>;
  updateProjectMembership?: Maybe<UpdateProjectMembershipPayload>;
  deleteProjcetMembership?: Maybe<DeleteProjectMembershipPayload>;
  createTask?: Maybe<CreateTaskPayload>;
  updateTask?: Maybe<UpdateTaskPayload>;
};

export type MutationSignUpAccountArgs = {
  input: SignUpAccountInput;
};

export type MutationLogInAccountArgs = {
  input: LogInAccountInput;
};

export type MutationUpdateAccountArgs = {
  input: UpdateAccountInput;
};

export type MutationDeleteAccountArgs = {
  input: DeleteAccountInput;
};

export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};

export type MutationUpdateProjectArgs = {
  input: UpdateAccountInput;
};

export type MutationDeleteProjectArgs = {
  input: DeleteProjectInput;
};

export type MutationInviteProjectMembersArgs = {
  input: InviteProjectMembersInput;
};

export type MutationUpdateProjectMembershipArgs = {
  input: UpdateProjectMembershipInput;
};

export type MutationDeleteProjcetMembershipArgs = {
  input: DeleteProjectMembershipInput;
};

export type MutationCreateTaskArgs = {
  input: CreateTaskInput;
};

export type MutationUpdateTaskArgs = {
  input: UpdateTaskInput;
};

/** Node interface for Realy specification */
export type Node = {
  id: Scalars["ID"];
};

export type PageInfo = {
  __typename?: "PageInfo";
  hasPreviousPage: Scalars["Boolean"];
  startCursor?: Maybe<Scalars["String"]>;
  hasNextPage: Scalars["Boolean"];
  endCursor?: Maybe<Scalars["String"]>;
};

/** Project Object */
export type Project = Node &
  Record & {
    __typename?: "Project";
    id: Scalars["ID"];
    title: Scalars["String"];
    /** プロジェクト作成者 */
    creator?: Maybe<Account>;
    memberships: ProjectMembershipConnection;
    tasks: TaskConnection;
    createdAt: Scalars["DateTime"];
    updatedAt: Scalars["DateTime"];
  };

/** Project Object */
export type ProjectMembershipsArgs = {
  first?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["String"]>;
  state?: Maybe<Array<Maybe<ProjectMembershipState>>>;
  role?: Maybe<Array<Maybe<ProjectMembershipRole>>>;
};

/** Project Object */
export type ProjectTasksArgs = {
  first?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["String"]>;
  state?: Maybe<Array<Maybe<TaskState>>>;
};

export type ProjectConnection = {
  __typename?: "ProjectConnection";
  pageInfo: PageInfo;
  edges?: Maybe<Array<Maybe<ProjectEdge>>>;
};

export type ProjectEdge = {
  __typename?: "ProjectEdge";
  cursor: Scalars["String"];
  node?: Maybe<Project>;
};

/** Project Membership Object */
export type ProjectMembership = Node &
  Record & {
    __typename?: "ProjectMembership";
    id: Scalars["ID"];
    role?: Maybe<ProjectMembershipRole>;
    state: ProjectMembershipState;
    project: Project;
    account: Account;
    createdAt: Scalars["DateTime"];
    updatedAt: Scalars["DateTime"];
  };

export type ProjectMembershipConnection = {
  __typename?: "ProjectMembershipConnection";
  pageInfo: PageInfo;
  edges?: Maybe<Array<Maybe<ProjectMembershipEdge>>>;
};

export type ProjectMembershipEdge = {
  __typename?: "ProjectMembershipEdge";
  cursor: Scalars["String"];
  node?: Maybe<ProjectMembership>;
};

export enum ProjectMembershipRole {
  Owner = "OWNER",
  Admin = "ADMIN",
  General = "GENERAL",
}

export enum ProjectMembershipState {
  Inviting = "INVITING",
  Active = "ACTIVE",
  Inactive = "INACTIVE",
}

export type Query = {
  __typename?: "Query";
  /** Fetches an object given its ID. */
  node?: Maybe<Node>;
  currentAccount?: Maybe<Account>;
};

export type QueryNodeArgs = {
  id: Scalars["ID"];
};

/** Record provides createdAt, updatedAt */
export type Record = {
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type SignUpAccountInput = {
  username: Scalars["String"];
  email: Scalars["String"];
  avatarUrl?: Maybe<Scalars["String"]>;
  password: Scalars["String"];
  passwordConfirmation: Scalars["String"];
};

export type SignUpAccountPayload = {
  __typename?: "SignUpAccountPayload";
  account?: Maybe<Account>;
};

/** Task Object */
export type Task = Node &
  Record & {
    __typename?: "Task";
    id: Scalars["ID"];
    name: Scalars["String"];
    state: TaskState;
    closed: Scalars["Boolean"];
    /** 作成者 */
    creator?: Maybe<Account>;
    assignees: AccountConnection;
    createdAt: Scalars["DateTime"];
    updatedAt: Scalars["DateTime"];
  };

export type TaskConnection = {
  __typename?: "TaskConnection";
  pageInfo: PageInfo;
  edges?: Maybe<Array<Maybe<TaskEdge>>>;
};

export type TaskEdge = {
  __typename?: "TaskEdge";
  cursor: Scalars["String"];
  node?: Maybe<Task>;
};

export enum TaskState {
  ToDo = "TO_DO",
  ThisWeek = "THIS_WEEK",
  Today = "TODAY",
  Doing = "DOING",
  Done = "DONE",
}

export type UpdateAccountInput = {
  accountId: Scalars["ID"];
  username?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
};

export type UpdateAccountPayload = {
  __typename?: "UpdateAccountPayload";
  account?: Maybe<Account>;
};

export type UpdateProjectInput = {
  projectId: Scalars["ID"];
  title?: Maybe<Scalars["String"]>;
};

export type UpdateProjectMembershipInput = {
  projectMembershipId: Scalars["ID"];
  role?: Maybe<ProjectMembershipRole>;
};

export type UpdateProjectMembershipPayload = {
  __typename?: "UpdateProjectMembershipPayload";
  projectMembership?: Maybe<ProjectMembership>;
};

export type UpdateProjectPayload = {
  __typename?: "UpdateProjectPayload";
  project?: Maybe<Project>;
};

export type UpdateTaskInput = {
  taskId: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  assigneeIds?: Maybe<Array<Scalars["ID"]>>;
  state?: Maybe<TaskState>;
  closed?: Maybe<Scalars["Boolean"]>;
};

export type UpdateTaskPayload = {
  __typename?: "UpdateTaskPayload";
  task?: Maybe<Task>;
};

export type UseCurrentAccountAccountFragment = { __typename?: "Account" } & Pick<
  Account,
  "id" | "email" | "username"
>;

export type GetCurrentAccountQueryVariables = Exact<{ [key: string]: never }>;

export type GetCurrentAccountQuery = { __typename?: "Query" } & {
  currentAccount?: Maybe<{ __typename?: "Account" } & UseCurrentAccountAccountFragment>;
};

export const UseCurrentAccountAccountFragmentDoc = gql`
  fragment UseCurrentAccountAccount on Account {
    id
    email
    username
  }
`;
export const GetCurrentAccountDocument = gql`
  query GetCurrentAccount {
    currentAccount {
      ...UseCurrentAccountAccount
    }
  }
  ${UseCurrentAccountAccountFragmentDoc}
`;

/**
 * __useGetCurrentAccountQuery__
 *
 * To run a query within a React component, call `useGetCurrentAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentAccountQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentAccountQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetCurrentAccountQuery,
    GetCurrentAccountQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetCurrentAccountQuery, GetCurrentAccountQueryVariables>(
    GetCurrentAccountDocument,
    baseOptions
  );
}
export function useGetCurrentAccountLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetCurrentAccountQuery,
    GetCurrentAccountQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<GetCurrentAccountQuery, GetCurrentAccountQueryVariables>(
    GetCurrentAccountDocument,
    baseOptions
  );
}
export type GetCurrentAccountQueryHookResult = ReturnType<typeof useGetCurrentAccountQuery>;
export type GetCurrentAccountLazyQueryHookResult = ReturnType<typeof useGetCurrentAccountLazyQuery>;
export type GetCurrentAccountQueryResult = ApolloReactCommon.QueryResult<
  GetCurrentAccountQuery,
  GetCurrentAccountQueryVariables
>;
