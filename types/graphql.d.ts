import type { SelectionSetNode, DocumentNode } from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: { input: string; output: string };
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: { input: boolean; output: boolean };
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: { input: number; output: number };
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: { input: number; output: number };
  /** A date and time, represented as an ISO-8601 string */
  DateTime: { input: any; output: any };
};

export type Query = {
  __typename?: "Query";
  countries: Array<Country>;
  countriesConnection: CountriesConnection;
  countriesAggregate: CountryAggregateSelection;
  states: Array<State>;
  statesConnection: StatesConnection;
  statesAggregate: StateAggregateSelection;
  users: Array<User>;
  usersConnection: UsersConnection;
  usersAggregate: UserAggregateSelection;
  accounts: Array<Account>;
  accountsConnection: AccountsConnection;
  accountsAggregate: AccountAggregateSelection;
  sessions: Array<Session>;
  sessionsConnection: SessionsConnection;
  sessionsAggregate: SessionAggregateSelection;
  verificationTokens: Array<VerificationToken>;
  verificationTokensConnection: VerificationTokensConnection;
  verificationTokensAggregate: VerificationTokenAggregateSelection;
  engines: Array<Engines>;
  enginesConnection: EnginesConnection;
  enginesAggregate: EnginesAggregateSelection;
  lutApps: Array<LutApp>;
  lutAppsConnection: LutAppsConnection;
  lutAppsAggregate: LutAppAggregateSelection;
  environmentConfigs: Array<EnvironmentConfigs>;
  environmentConfigsConnection: EnvironmentConfigsConnection;
  environmentConfigsAggregate: EnvironmentConfigsAggregateSelection;
};

export type QueryCountriesArgs = {
  where?: InputMaybe<CountryWhere>;
  options?: InputMaybe<CountryOptions>;
};

export type QueryCountriesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<CountryWhere>;
  sort?: InputMaybe<Array<InputMaybe<CountrySort>>>;
};

export type QueryCountriesAggregateArgs = {
  where?: InputMaybe<CountryWhere>;
};

export type QueryStatesArgs = {
  where?: InputMaybe<StateWhere>;
  options?: InputMaybe<StateOptions>;
};

export type QueryStatesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<StateWhere>;
  sort?: InputMaybe<Array<InputMaybe<StateSort>>>;
};

export type QueryStatesAggregateArgs = {
  where?: InputMaybe<StateWhere>;
};

export type QueryUsersArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
};

export type QueryUsersConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<UserWhere>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};

export type QueryUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};

export type QueryAccountsArgs = {
  where?: InputMaybe<AccountWhere>;
  options?: InputMaybe<AccountOptions>;
};

export type QueryAccountsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<AccountWhere>;
  sort?: InputMaybe<Array<InputMaybe<AccountSort>>>;
};

export type QueryAccountsAggregateArgs = {
  where?: InputMaybe<AccountWhere>;
};

export type QuerySessionsArgs = {
  where?: InputMaybe<SessionWhere>;
  options?: InputMaybe<SessionOptions>;
};

export type QuerySessionsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<SessionWhere>;
  sort?: InputMaybe<Array<InputMaybe<SessionSort>>>;
};

export type QuerySessionsAggregateArgs = {
  where?: InputMaybe<SessionWhere>;
};

export type QueryVerificationTokensArgs = {
  where?: InputMaybe<VerificationTokenWhere>;
  options?: InputMaybe<VerificationTokenOptions>;
};

export type QueryVerificationTokensConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<VerificationTokenWhere>;
  sort?: InputMaybe<Array<InputMaybe<VerificationTokenSort>>>;
};

export type QueryVerificationTokensAggregateArgs = {
  where?: InputMaybe<VerificationTokenWhere>;
};

export type QueryEnginesArgs = {
  where?: InputMaybe<EnginesWhere>;
  options?: InputMaybe<EnginesOptions>;
};

export type QueryEnginesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<EnginesWhere>;
  sort?: InputMaybe<Array<InputMaybe<EnginesSort>>>;
};

export type QueryEnginesAggregateArgs = {
  where?: InputMaybe<EnginesWhere>;
};

export type QueryLutAppsArgs = {
  where?: InputMaybe<LutAppWhere>;
  options?: InputMaybe<LutAppOptions>;
};

export type QueryLutAppsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<LutAppWhere>;
  sort?: InputMaybe<Array<InputMaybe<LutAppSort>>>;
};

export type QueryLutAppsAggregateArgs = {
  where?: InputMaybe<LutAppWhere>;
};

export type QueryEnvironmentConfigsArgs = {
  where?: InputMaybe<EnvironmentConfigsWhere>;
  options?: InputMaybe<EnvironmentConfigsOptions>;
};

export type QueryEnvironmentConfigsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<EnvironmentConfigsWhere>;
  sort?: InputMaybe<Array<InputMaybe<EnvironmentConfigsSort>>>;
};

export type QueryEnvironmentConfigsAggregateArgs = {
  where?: InputMaybe<EnvironmentConfigsWhere>;
};

export type Mutation = {
  __typename?: "Mutation";
  createCountries: CreateCountriesMutationResponse;
  deleteCountries: DeleteInfo;
  updateCountries: UpdateCountriesMutationResponse;
  createStates: CreateStatesMutationResponse;
  deleteStates: DeleteInfo;
  updateStates: UpdateStatesMutationResponse;
  createUsers: CreateUsersMutationResponse;
  deleteUsers: DeleteInfo;
  updateUsers: UpdateUsersMutationResponse;
  createAccounts: CreateAccountsMutationResponse;
  deleteAccounts: DeleteInfo;
  updateAccounts: UpdateAccountsMutationResponse;
  createSessions: CreateSessionsMutationResponse;
  deleteSessions: DeleteInfo;
  updateSessions: UpdateSessionsMutationResponse;
  createVerificationTokens: CreateVerificationTokensMutationResponse;
  deleteVerificationTokens: DeleteInfo;
  updateVerificationTokens: UpdateVerificationTokensMutationResponse;
  createEngines: CreateEnginesMutationResponse;
  deleteEngines: DeleteInfo;
  updateEngines: UpdateEnginesMutationResponse;
  createLutApps: CreateLutAppsMutationResponse;
  deleteLutApps: DeleteInfo;
  updateLutApps: UpdateLutAppsMutationResponse;
  createEnvironmentConfigs: CreateEnvironmentConfigsMutationResponse;
  deleteEnvironmentConfigs: DeleteInfo;
  updateEnvironmentConfigs: UpdateEnvironmentConfigsMutationResponse;
};

export type MutationCreateCountriesArgs = {
  input: Array<CountryCreateInput>;
};

export type MutationDeleteCountriesArgs = {
  where?: InputMaybe<CountryWhere>;
  delete?: InputMaybe<CountryDeleteInput>;
};

export type MutationUpdateCountriesArgs = {
  where?: InputMaybe<CountryWhere>;
  update?: InputMaybe<CountryUpdateInput>;
  connect?: InputMaybe<CountryConnectInput>;
  disconnect?: InputMaybe<CountryDisconnectInput>;
  create?: InputMaybe<CountryRelationInput>;
  delete?: InputMaybe<CountryDeleteInput>;
};

export type MutationCreateStatesArgs = {
  input: Array<StateCreateInput>;
};

export type MutationDeleteStatesArgs = {
  where?: InputMaybe<StateWhere>;
  delete?: InputMaybe<StateDeleteInput>;
};

export type MutationUpdateStatesArgs = {
  where?: InputMaybe<StateWhere>;
  update?: InputMaybe<StateUpdateInput>;
  connect?: InputMaybe<StateConnectInput>;
  disconnect?: InputMaybe<StateDisconnectInput>;
  create?: InputMaybe<StateRelationInput>;
  delete?: InputMaybe<StateDeleteInput>;
};

export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};

export type MutationDeleteUsersArgs = {
  where?: InputMaybe<UserWhere>;
};

export type MutationUpdateUsersArgs = {
  where?: InputMaybe<UserWhere>;
  update?: InputMaybe<UserUpdateInput>;
};

export type MutationCreateAccountsArgs = {
  input: Array<AccountCreateInput>;
};

export type MutationDeleteAccountsArgs = {
  where?: InputMaybe<AccountWhere>;
};

export type MutationUpdateAccountsArgs = {
  where?: InputMaybe<AccountWhere>;
  update?: InputMaybe<AccountUpdateInput>;
};

export type MutationCreateSessionsArgs = {
  input: Array<SessionCreateInput>;
};

export type MutationDeleteSessionsArgs = {
  where?: InputMaybe<SessionWhere>;
};

export type MutationUpdateSessionsArgs = {
  where?: InputMaybe<SessionWhere>;
  update?: InputMaybe<SessionUpdateInput>;
};

export type MutationCreateVerificationTokensArgs = {
  input: Array<VerificationTokenCreateInput>;
};

export type MutationDeleteVerificationTokensArgs = {
  where?: InputMaybe<VerificationTokenWhere>;
};

export type MutationUpdateVerificationTokensArgs = {
  where?: InputMaybe<VerificationTokenWhere>;
  update?: InputMaybe<VerificationTokenUpdateInput>;
};

export type MutationCreateEnginesArgs = {
  input: Array<EnginesCreateInput>;
};

export type MutationDeleteEnginesArgs = {
  where?: InputMaybe<EnginesWhere>;
  delete?: InputMaybe<EnginesDeleteInput>;
};

export type MutationUpdateEnginesArgs = {
  where?: InputMaybe<EnginesWhere>;
  update?: InputMaybe<EnginesUpdateInput>;
  connect?: InputMaybe<EnginesConnectInput>;
  disconnect?: InputMaybe<EnginesDisconnectInput>;
  create?: InputMaybe<EnginesRelationInput>;
  delete?: InputMaybe<EnginesDeleteInput>;
  connectOrCreate?: InputMaybe<EnginesConnectOrCreateInput>;
};

export type MutationCreateLutAppsArgs = {
  input: Array<LutAppCreateInput>;
};

export type MutationDeleteLutAppsArgs = {
  where?: InputMaybe<LutAppWhere>;
  delete?: InputMaybe<LutAppDeleteInput>;
};

export type MutationUpdateLutAppsArgs = {
  where?: InputMaybe<LutAppWhere>;
  update?: InputMaybe<LutAppUpdateInput>;
  connect?: InputMaybe<LutAppConnectInput>;
  disconnect?: InputMaybe<LutAppDisconnectInput>;
  create?: InputMaybe<LutAppRelationInput>;
  delete?: InputMaybe<LutAppDeleteInput>;
};

export type MutationCreateEnvironmentConfigsArgs = {
  input: Array<EnvironmentConfigsCreateInput>;
};

export type MutationDeleteEnvironmentConfigsArgs = {
  where?: InputMaybe<EnvironmentConfigsWhere>;
  delete?: InputMaybe<EnvironmentConfigsDeleteInput>;
};

export type MutationUpdateEnvironmentConfigsArgs = {
  where?: InputMaybe<EnvironmentConfigsWhere>;
  update?: InputMaybe<EnvironmentConfigsUpdateInput>;
  connect?: InputMaybe<EnvironmentConfigsConnectInput>;
  disconnect?: InputMaybe<EnvironmentConfigsDisconnectInput>;
  create?: InputMaybe<EnvironmentConfigsRelationInput>;
  delete?: InputMaybe<EnvironmentConfigsDeleteInput>;
};

export enum EngineType {
  SmartStadium = "SmartStadium",
  SmartFish = "SmartFish",
}

/** An enum for sorting in either ascending or descending order. */
export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = "ASC",
  /** Sort by field values in descending order. */
  Desc = "DESC",
}

export type Account = {
  __typename?: "Account";
  id: Scalars["String"]["output"];
  userId: Scalars["String"]["output"];
  type?: Maybe<Scalars["String"]["output"]>;
  provider?: Maybe<Scalars["String"]["output"]>;
  providerAccountId?: Maybe<Scalars["String"]["output"]>;
  refresh_token?: Maybe<Scalars["String"]["output"]>;
  access_token?: Maybe<Scalars["String"]["output"]>;
  expires_at?: Maybe<Scalars["String"]["output"]>;
  token_type?: Maybe<Scalars["String"]["output"]>;
  scope?: Maybe<Scalars["String"]["output"]>;
  id_token?: Maybe<Scalars["String"]["output"]>;
  session_state?: Maybe<Scalars["String"]["output"]>;
};

export type AccountAggregateSelection = {
  __typename?: "AccountAggregateSelection";
  count: Scalars["Int"]["output"];
  id: StringAggregateSelection;
  userId: StringAggregateSelection;
  type: StringAggregateSelection;
  provider: StringAggregateSelection;
  providerAccountId: StringAggregateSelection;
  refresh_token: StringAggregateSelection;
  access_token: StringAggregateSelection;
  expires_at: StringAggregateSelection;
  token_type: StringAggregateSelection;
  scope: StringAggregateSelection;
  id_token: StringAggregateSelection;
  session_state: StringAggregateSelection;
};

export type AccountEdge = {
  __typename?: "AccountEdge";
  cursor: Scalars["String"]["output"];
  node: Account;
};

export type AccountsConnection = {
  __typename?: "AccountsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<AccountEdge>;
};

export type CountriesConnection = {
  __typename?: "CountriesConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<CountryEdge>;
};

export type Country = {
  __typename?: "Country";
  id?: Maybe<Scalars["Int"]["output"]>;
  name: Scalars["String"]["output"];
  phoneCode: Scalars["String"]["output"];
  shortName: Scalars["String"]["output"];
  emojiU: Scalars["String"]["output"];
  statesAggregate?: Maybe<CountryStateStatesAggregationSelection>;
  states: Array<State>;
  statesConnection: CountryStatesConnection;
};

export type CountryStatesAggregateArgs = {
  where?: InputMaybe<StateWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CountryStatesArgs = {
  where?: InputMaybe<StateWhere>;
  options?: InputMaybe<StateOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CountryStatesConnectionArgs = {
  where?: InputMaybe<CountryStatesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<CountryStatesConnectionSort>>;
};

export type CountryAggregateSelection = {
  __typename?: "CountryAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IntAggregateSelection;
  name: StringAggregateSelection;
  phoneCode: StringAggregateSelection;
  shortName: StringAggregateSelection;
  emojiU: StringAggregateSelection;
};

export type CountryEdge = {
  __typename?: "CountryEdge";
  cursor: Scalars["String"]["output"];
  node: Country;
};

export type CountryStatesConnection = {
  __typename?: "CountryStatesConnection";
  edges: Array<CountryStatesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type CountryStatesRelationship = {
  __typename?: "CountryStatesRelationship";
  cursor: Scalars["String"]["output"];
  node: State;
};

export type CountryStateStatesAggregationSelection = {
  __typename?: "CountryStateStatesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<CountryStateStatesNodeAggregateSelection>;
};

export type CountryStateStatesNodeAggregateSelection = {
  __typename?: "CountryStateStatesNodeAggregateSelection";
  id: IntAggregateSelection;
  name: StringAggregateSelection;
};

export type CreateAccountsMutationResponse = {
  __typename?: "CreateAccountsMutationResponse";
  info: CreateInfo;
  accounts: Array<Account>;
};

export type CreateCountriesMutationResponse = {
  __typename?: "CreateCountriesMutationResponse";
  info: CreateInfo;
  countries: Array<Country>;
};

export type CreateEnginesMutationResponse = {
  __typename?: "CreateEnginesMutationResponse";
  info: CreateInfo;
  engines: Array<Engines>;
};

export type CreateEnvironmentConfigsMutationResponse = {
  __typename?: "CreateEnvironmentConfigsMutationResponse";
  info: CreateInfo;
  environmentConfigs: Array<EnvironmentConfigs>;
};

/** Information about the number of nodes and relationships created during a create mutation */
export type CreateInfo = {
  __typename?: "CreateInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesCreated: Scalars["Int"]["output"];
  relationshipsCreated: Scalars["Int"]["output"];
};

export type CreateLutAppsMutationResponse = {
  __typename?: "CreateLutAppsMutationResponse";
  info: CreateInfo;
  lutApps: Array<LutApp>;
};

export type CreateSessionsMutationResponse = {
  __typename?: "CreateSessionsMutationResponse";
  info: CreateInfo;
  sessions: Array<Session>;
};

export type CreateStatesMutationResponse = {
  __typename?: "CreateStatesMutationResponse";
  info: CreateInfo;
  states: Array<State>;
};

export type CreateUsersMutationResponse = {
  __typename?: "CreateUsersMutationResponse";
  info: CreateInfo;
  users: Array<User>;
};

export type CreateVerificationTokensMutationResponse = {
  __typename?: "CreateVerificationTokensMutationResponse";
  info: CreateInfo;
  verificationTokens: Array<VerificationToken>;
};

export type DateTimeAggregateSelection = {
  __typename?: "DateTimeAggregateSelection";
  min?: Maybe<Scalars["DateTime"]["output"]>;
  max?: Maybe<Scalars["DateTime"]["output"]>;
};

/** Information about the number of nodes and relationships deleted during a delete mutation */
export type DeleteInfo = {
  __typename?: "DeleteInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesDeleted: Scalars["Int"]["output"];
  relationshipsDeleted: Scalars["Int"]["output"];
};

export type Engines = {
  __typename?: "Engines";
  id: Scalars["String"]["output"];
  type: EngineType;
  name?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  location?: Maybe<Scalars["String"]["output"]>;
  config?: Maybe<Scalars["String"]["output"]>;
  cameras?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  hostname?: Maybe<Scalars["String"]["output"]>;
  nextEvent?: Maybe<Scalars["String"]["output"]>;
  venueId?: Maybe<Scalars["String"]["output"]>;
  externalId?: Maybe<Scalars["String"]["output"]>;
  venueName?: Maybe<Scalars["String"]["output"]>;
  venueNameInternational?: Maybe<Scalars["String"]["output"]>;
  graphicsSystemId?: Maybe<Scalars["String"]["output"]>;
  matchId?: Maybe<Scalars["String"]["output"]>;
  enableLive?: Maybe<Scalars["Boolean"]["output"]>;
  enabled?: Maybe<Scalars["Boolean"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  userAggregate?: Maybe<EnginesUserUserAggregationSelection>;
  user: Array<User>;
  userConnection: EnginesUserConnection;
};

export type EnginesUserAggregateArgs = {
  where?: InputMaybe<UserWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type EnginesUserArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type EnginesUserConnectionArgs = {
  where?: InputMaybe<EnginesUserConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<EnginesUserConnectionSort>>;
};

export type EnginesAggregateSelection = {
  __typename?: "EnginesAggregateSelection";
  count: Scalars["Int"]["output"];
  id: StringAggregateSelection;
  name: StringAggregateSelection;
  description: StringAggregateSelection;
  location: StringAggregateSelection;
  config: StringAggregateSelection;
  cameras: StringAggregateSelection;
  status: StringAggregateSelection;
  hostname: StringAggregateSelection;
  nextEvent: StringAggregateSelection;
  venueId: StringAggregateSelection;
  externalId: StringAggregateSelection;
  venueName: StringAggregateSelection;
  venueNameInternational: StringAggregateSelection;
  graphicsSystemId: StringAggregateSelection;
  matchId: StringAggregateSelection;
  createdAt: DateTimeAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
};

export type EnginesConnection = {
  __typename?: "EnginesConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<EnginesEdge>;
};

export type EnginesEdge = {
  __typename?: "EnginesEdge";
  cursor: Scalars["String"]["output"];
  node: Engines;
};

export type EnginesUserConnection = {
  __typename?: "EnginesUserConnection";
  edges: Array<EnginesUserRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type EnginesUserRelationship = {
  __typename?: "EnginesUserRelationship";
  cursor: Scalars["String"]["output"];
  node: User;
};

export type EnginesUserUserAggregationSelection = {
  __typename?: "EnginesUserUserAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<EnginesUserUserNodeAggregateSelection>;
};

export type EnginesUserUserNodeAggregateSelection = {
  __typename?: "EnginesUserUserNodeAggregateSelection";
  id: StringAggregateSelection;
  firstName: StringAggregateSelection;
  lastName: StringAggregateSelection;
  email: StringAggregateSelection;
  emailVerified: StringAggregateSelection;
  image: StringAggregateSelection;
  role: StringAggregateSelection;
  phoneCode: StringAggregateSelection;
  phoneNumber: StringAggregateSelection;
  address: StringAggregateSelection;
  city: StringAggregateSelection;
  state: StringAggregateSelection;
  stateId: IntAggregateSelection;
  country: StringAggregateSelection;
  countryId: IntAggregateSelection;
  organization: StringAggregateSelection;
};

export type EnvironmentConfigs = {
  __typename?: "EnvironmentConfigs";
  id: Scalars["String"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  venue?: Maybe<Scalars["String"]["output"]>;
  configName?: Maybe<Scalars["String"]["output"]>;
  dateTime?: Maybe<Scalars["String"]["output"]>;
  original?: Maybe<Scalars["String"]["output"]>;
  edited?: Maybe<Scalars["String"]["output"]>;
  version?: Maybe<Scalars["String"]["output"]>;
  EnginesAggregate?: Maybe<EnvironmentConfigsEnginesEnginesAggregationSelection>;
  Engines: Array<Engines>;
  EnginesConnection: EnvironmentConfigsEnginesConnection;
};

export type EnvironmentConfigsEnginesAggregateArgs = {
  where?: InputMaybe<EnginesWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type EnvironmentConfigsEnginesArgs = {
  where?: InputMaybe<EnginesWhere>;
  options?: InputMaybe<EnginesOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type EnvironmentConfigsEnginesConnectionArgs = {
  where?: InputMaybe<EnvironmentConfigsEnginesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<EnvironmentConfigsEnginesConnectionSort>>;
};

export type EnvironmentConfigsAggregateSelection = {
  __typename?: "EnvironmentConfigsAggregateSelection";
  count: Scalars["Int"]["output"];
  id: StringAggregateSelection;
  name: StringAggregateSelection;
  venue: StringAggregateSelection;
  configName: StringAggregateSelection;
  dateTime: StringAggregateSelection;
  original: StringAggregateSelection;
  edited: StringAggregateSelection;
  version: StringAggregateSelection;
};

export type EnvironmentConfigsConnection = {
  __typename?: "EnvironmentConfigsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<EnvironmentConfigsEdge>;
};

export type EnvironmentConfigsEdge = {
  __typename?: "EnvironmentConfigsEdge";
  cursor: Scalars["String"]["output"];
  node: EnvironmentConfigs;
};

export type EnvironmentConfigsEnginesConnection = {
  __typename?: "EnvironmentConfigsEnginesConnection";
  edges: Array<EnvironmentConfigsEnginesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type EnvironmentConfigsEnginesEnginesAggregationSelection = {
  __typename?: "EnvironmentConfigsEnginesEnginesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<EnvironmentConfigsEnginesEnginesNodeAggregateSelection>;
};

export type EnvironmentConfigsEnginesEnginesNodeAggregateSelection = {
  __typename?: "EnvironmentConfigsEnginesEnginesNodeAggregateSelection";
  id: StringAggregateSelection;
  name: StringAggregateSelection;
  description: StringAggregateSelection;
  location: StringAggregateSelection;
  config: StringAggregateSelection;
  cameras: StringAggregateSelection;
  status: StringAggregateSelection;
  hostname: StringAggregateSelection;
  nextEvent: StringAggregateSelection;
  venueId: StringAggregateSelection;
  externalId: StringAggregateSelection;
  venueName: StringAggregateSelection;
  venueNameInternational: StringAggregateSelection;
  graphicsSystemId: StringAggregateSelection;
  matchId: StringAggregateSelection;
  createdAt: DateTimeAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
};

export type EnvironmentConfigsEnginesRelationship = {
  __typename?: "EnvironmentConfigsEnginesRelationship";
  cursor: Scalars["String"]["output"];
  node: Engines;
};

export type IntAggregateSelection = {
  __typename?: "IntAggregateSelection";
  max?: Maybe<Scalars["Int"]["output"]>;
  min?: Maybe<Scalars["Int"]["output"]>;
  average?: Maybe<Scalars["Float"]["output"]>;
  sum?: Maybe<Scalars["Int"]["output"]>;
};

export type LutApp = {
  __typename?: "LutApp";
  id: Scalars["String"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  genericName?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  fileUrl?: Maybe<Scalars["String"]["output"]>;
  fileName?: Maybe<Scalars["String"]["output"]>;
  active?: Maybe<Scalars["Boolean"]["output"]>;
  isProcessed?: Maybe<Scalars["Boolean"]["output"]>;
  EnginesAggregate?: Maybe<LutAppEnginesEnginesAggregationSelection>;
  Engines: Array<Engines>;
  EnginesConnection: LutAppEnginesConnection;
};

export type LutAppEnginesAggregateArgs = {
  where?: InputMaybe<EnginesWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type LutAppEnginesArgs = {
  where?: InputMaybe<EnginesWhere>;
  options?: InputMaybe<EnginesOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type LutAppEnginesConnectionArgs = {
  where?: InputMaybe<LutAppEnginesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<LutAppEnginesConnectionSort>>;
};

export type LutAppAggregateSelection = {
  __typename?: "LutAppAggregateSelection";
  count: Scalars["Int"]["output"];
  id: StringAggregateSelection;
  name: StringAggregateSelection;
  genericName: StringAggregateSelection;
  description: StringAggregateSelection;
  fileUrl: StringAggregateSelection;
  fileName: StringAggregateSelection;
};

export type LutAppEdge = {
  __typename?: "LutAppEdge";
  cursor: Scalars["String"]["output"];
  node: LutApp;
};

export type LutAppEnginesConnection = {
  __typename?: "LutAppEnginesConnection";
  edges: Array<LutAppEnginesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type LutAppEnginesEnginesAggregationSelection = {
  __typename?: "LutAppEnginesEnginesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<LutAppEnginesEnginesNodeAggregateSelection>;
};

export type LutAppEnginesEnginesNodeAggregateSelection = {
  __typename?: "LutAppEnginesEnginesNodeAggregateSelection";
  id: StringAggregateSelection;
  name: StringAggregateSelection;
  description: StringAggregateSelection;
  location: StringAggregateSelection;
  config: StringAggregateSelection;
  cameras: StringAggregateSelection;
  status: StringAggregateSelection;
  hostname: StringAggregateSelection;
  nextEvent: StringAggregateSelection;
  venueId: StringAggregateSelection;
  externalId: StringAggregateSelection;
  venueName: StringAggregateSelection;
  venueNameInternational: StringAggregateSelection;
  graphicsSystemId: StringAggregateSelection;
  matchId: StringAggregateSelection;
  createdAt: DateTimeAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
};

export type LutAppEnginesRelationship = {
  __typename?: "LutAppEnginesRelationship";
  cursor: Scalars["String"]["output"];
  node: Engines;
};

export type LutAppsConnection = {
  __typename?: "LutAppsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<LutAppEdge>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: "PageInfo";
  hasNextPage: Scalars["Boolean"]["output"];
  hasPreviousPage: Scalars["Boolean"]["output"];
  startCursor?: Maybe<Scalars["String"]["output"]>;
  endCursor?: Maybe<Scalars["String"]["output"]>;
};

export type Session = {
  __typename?: "Session";
  id: Scalars["String"]["output"];
  expires?: Maybe<Scalars["String"]["output"]>;
  sessionToken?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["String"]["output"]>;
};

export type SessionAggregateSelection = {
  __typename?: "SessionAggregateSelection";
  count: Scalars["Int"]["output"];
  id: StringAggregateSelection;
  expires: StringAggregateSelection;
  sessionToken: StringAggregateSelection;
  userId: StringAggregateSelection;
};

export type SessionEdge = {
  __typename?: "SessionEdge";
  cursor: Scalars["String"]["output"];
  node: Session;
};

export type SessionsConnection = {
  __typename?: "SessionsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<SessionEdge>;
};

export type State = {
  __typename?: "State";
  id?: Maybe<Scalars["Int"]["output"]>;
  name: Scalars["String"]["output"];
  countryAggregate?: Maybe<StateCountryCountryAggregationSelection>;
  country: Array<Country>;
  countryConnection: StateCountryConnection;
};

export type StateCountryAggregateArgs = {
  where?: InputMaybe<CountryWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type StateCountryArgs = {
  where?: InputMaybe<CountryWhere>;
  options?: InputMaybe<CountryOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type StateCountryConnectionArgs = {
  where?: InputMaybe<StateCountryConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<StateCountryConnectionSort>>;
};

export type StateAggregateSelection = {
  __typename?: "StateAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IntAggregateSelection;
  name: StringAggregateSelection;
};

export type StateCountryConnection = {
  __typename?: "StateCountryConnection";
  edges: Array<StateCountryRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type StateCountryCountryAggregationSelection = {
  __typename?: "StateCountryCountryAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<StateCountryCountryNodeAggregateSelection>;
};

export type StateCountryCountryNodeAggregateSelection = {
  __typename?: "StateCountryCountryNodeAggregateSelection";
  id: IntAggregateSelection;
  name: StringAggregateSelection;
  phoneCode: StringAggregateSelection;
  shortName: StringAggregateSelection;
  emojiU: StringAggregateSelection;
};

export type StateCountryRelationship = {
  __typename?: "StateCountryRelationship";
  cursor: Scalars["String"]["output"];
  node: Country;
};

export type StateEdge = {
  __typename?: "StateEdge";
  cursor: Scalars["String"]["output"];
  node: State;
};

export type StatesConnection = {
  __typename?: "StatesConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<StateEdge>;
};

export type StringAggregateSelection = {
  __typename?: "StringAggregateSelection";
  shortest?: Maybe<Scalars["String"]["output"]>;
  longest?: Maybe<Scalars["String"]["output"]>;
};

export type UpdateAccountsMutationResponse = {
  __typename?: "UpdateAccountsMutationResponse";
  info: UpdateInfo;
  accounts: Array<Account>;
};

export type UpdateCountriesMutationResponse = {
  __typename?: "UpdateCountriesMutationResponse";
  info: UpdateInfo;
  countries: Array<Country>;
};

export type UpdateEnginesMutationResponse = {
  __typename?: "UpdateEnginesMutationResponse";
  info: UpdateInfo;
  engines: Array<Engines>;
};

export type UpdateEnvironmentConfigsMutationResponse = {
  __typename?: "UpdateEnvironmentConfigsMutationResponse";
  info: UpdateInfo;
  environmentConfigs: Array<EnvironmentConfigs>;
};

/** Information about the number of nodes and relationships created and deleted during an update mutation */
export type UpdateInfo = {
  __typename?: "UpdateInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesCreated: Scalars["Int"]["output"];
  nodesDeleted: Scalars["Int"]["output"];
  relationshipsCreated: Scalars["Int"]["output"];
  relationshipsDeleted: Scalars["Int"]["output"];
};

export type UpdateLutAppsMutationResponse = {
  __typename?: "UpdateLutAppsMutationResponse";
  info: UpdateInfo;
  lutApps: Array<LutApp>;
};

export type UpdateSessionsMutationResponse = {
  __typename?: "UpdateSessionsMutationResponse";
  info: UpdateInfo;
  sessions: Array<Session>;
};

export type UpdateStatesMutationResponse = {
  __typename?: "UpdateStatesMutationResponse";
  info: UpdateInfo;
  states: Array<State>;
};

export type UpdateUsersMutationResponse = {
  __typename?: "UpdateUsersMutationResponse";
  info: UpdateInfo;
  users: Array<User>;
};

export type UpdateVerificationTokensMutationResponse = {
  __typename?: "UpdateVerificationTokensMutationResponse";
  info: UpdateInfo;
  verificationTokens: Array<VerificationToken>;
};

export type User = {
  __typename?: "User";
  id: Scalars["String"]["output"];
  firstName?: Maybe<Scalars["String"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
  email: Scalars["String"]["output"];
  emailVerified?: Maybe<Scalars["String"]["output"]>;
  image?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<Scalars["String"]["output"]>;
  phoneCode?: Maybe<Scalars["String"]["output"]>;
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
  address?: Maybe<Scalars["String"]["output"]>;
  city?: Maybe<Scalars["String"]["output"]>;
  state?: Maybe<Scalars["String"]["output"]>;
  stateId?: Maybe<Scalars["Int"]["output"]>;
  country?: Maybe<Scalars["String"]["output"]>;
  countryId?: Maybe<Scalars["Int"]["output"]>;
  organization?: Maybe<Scalars["String"]["output"]>;
};

export type UserAggregateSelection = {
  __typename?: "UserAggregateSelection";
  count: Scalars["Int"]["output"];
  id: StringAggregateSelection;
  firstName: StringAggregateSelection;
  lastName: StringAggregateSelection;
  email: StringAggregateSelection;
  emailVerified: StringAggregateSelection;
  image: StringAggregateSelection;
  role: StringAggregateSelection;
  phoneCode: StringAggregateSelection;
  phoneNumber: StringAggregateSelection;
  address: StringAggregateSelection;
  city: StringAggregateSelection;
  state: StringAggregateSelection;
  stateId: IntAggregateSelection;
  country: StringAggregateSelection;
  countryId: IntAggregateSelection;
  organization: StringAggregateSelection;
};

export type UserEdge = {
  __typename?: "UserEdge";
  cursor: Scalars["String"]["output"];
  node: User;
};

export type UsersConnection = {
  __typename?: "UsersConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<UserEdge>;
};

export type VerificationToken = {
  __typename?: "VerificationToken";
  identifier?: Maybe<Scalars["String"]["output"]>;
  token?: Maybe<Scalars["String"]["output"]>;
  expires?: Maybe<Scalars["String"]["output"]>;
};

export type VerificationTokenAggregateSelection = {
  __typename?: "VerificationTokenAggregateSelection";
  count: Scalars["Int"]["output"];
  identifier: StringAggregateSelection;
  token: StringAggregateSelection;
  expires: StringAggregateSelection;
};

export type VerificationTokenEdge = {
  __typename?: "VerificationTokenEdge";
  cursor: Scalars["String"]["output"];
  node: VerificationToken;
};

export type VerificationTokensConnection = {
  __typename?: "VerificationTokensConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<VerificationTokenEdge>;
};

export type AccountCreateInput = {
  id: Scalars["String"]["input"];
  userId: Scalars["String"]["input"];
  type?: InputMaybe<Scalars["String"]["input"]>;
  provider?: InputMaybe<Scalars["String"]["input"]>;
  providerAccountId?: InputMaybe<Scalars["String"]["input"]>;
  refresh_token?: InputMaybe<Scalars["String"]["input"]>;
  access_token?: InputMaybe<Scalars["String"]["input"]>;
  expires_at?: InputMaybe<Scalars["String"]["input"]>;
  token_type?: InputMaybe<Scalars["String"]["input"]>;
  scope?: InputMaybe<Scalars["String"]["input"]>;
  id_token?: InputMaybe<Scalars["String"]["input"]>;
  session_state?: InputMaybe<Scalars["String"]["input"]>;
};

export type AccountOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more AccountSort objects to sort Accounts by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<AccountSort>>;
};

/** Fields to sort Accounts by. The order in which sorts are applied is not guaranteed when specifying many fields in one AccountSort object. */
export type AccountSort = {
  id?: InputMaybe<SortDirection>;
  userId?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
  provider?: InputMaybe<SortDirection>;
  providerAccountId?: InputMaybe<SortDirection>;
  refresh_token?: InputMaybe<SortDirection>;
  access_token?: InputMaybe<SortDirection>;
  expires_at?: InputMaybe<SortDirection>;
  token_type?: InputMaybe<SortDirection>;
  scope?: InputMaybe<SortDirection>;
  id_token?: InputMaybe<SortDirection>;
  session_state?: InputMaybe<SortDirection>;
};

export type AccountUpdateInput = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  provider?: InputMaybe<Scalars["String"]["input"]>;
  providerAccountId?: InputMaybe<Scalars["String"]["input"]>;
  refresh_token?: InputMaybe<Scalars["String"]["input"]>;
  access_token?: InputMaybe<Scalars["String"]["input"]>;
  expires_at?: InputMaybe<Scalars["String"]["input"]>;
  token_type?: InputMaybe<Scalars["String"]["input"]>;
  scope?: InputMaybe<Scalars["String"]["input"]>;
  id_token?: InputMaybe<Scalars["String"]["input"]>;
  session_state?: InputMaybe<Scalars["String"]["input"]>;
};

export type AccountWhere = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["String"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  userId_NOT?: InputMaybe<Scalars["String"]["input"]>;
  userId_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  userId_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  userId_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  userId_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  userId_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  userId_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  userId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  userId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  type_NOT?: InputMaybe<Scalars["String"]["input"]>;
  type_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  type_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  type_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  type_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  type_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  type_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  type_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  type_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  provider?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  provider_NOT?: InputMaybe<Scalars["String"]["input"]>;
  provider_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  provider_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  provider_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  provider_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  provider_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  provider_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  provider_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  provider_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  providerAccountId?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  providerAccountId_NOT?: InputMaybe<Scalars["String"]["input"]>;
  providerAccountId_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  providerAccountId_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  providerAccountId_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  providerAccountId_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  providerAccountId_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  providerAccountId_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  providerAccountId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  providerAccountId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  refresh_token?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  refresh_token_NOT?: InputMaybe<Scalars["String"]["input"]>;
  refresh_token_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  refresh_token_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  refresh_token_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  refresh_token_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  refresh_token_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  refresh_token_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  refresh_token_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  refresh_token_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  access_token?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  access_token_NOT?: InputMaybe<Scalars["String"]["input"]>;
  access_token_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  access_token_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  access_token_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  access_token_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  access_token_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  access_token_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  access_token_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  access_token_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  expires_at?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  expires_at_NOT?: InputMaybe<Scalars["String"]["input"]>;
  expires_at_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  expires_at_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  expires_at_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  expires_at_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  expires_at_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  expires_at_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  expires_at_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  expires_at_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  token_type?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  token_type_NOT?: InputMaybe<Scalars["String"]["input"]>;
  token_type_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  token_type_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  token_type_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  token_type_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  token_type_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  token_type_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  token_type_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  token_type_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  scope?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  scope_NOT?: InputMaybe<Scalars["String"]["input"]>;
  scope_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  scope_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  scope_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  scope_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  scope_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  scope_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  scope_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  scope_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  id_token?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_token_NOT?: InputMaybe<Scalars["String"]["input"]>;
  id_token_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_token_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_token_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  id_token_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  id_token_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_token_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_token_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_token_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  session_state?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  session_state_NOT?: InputMaybe<Scalars["String"]["input"]>;
  session_state_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  session_state_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  session_state_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  session_state_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  session_state_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  session_state_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  session_state_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  session_state_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<AccountWhere>>;
  AND?: InputMaybe<Array<AccountWhere>>;
  NOT?: InputMaybe<AccountWhere>;
};

export type CountryConnectInput = {
  states?: InputMaybe<Array<CountryStatesConnectFieldInput>>;
};

export type CountryConnectWhere = {
  node: CountryWhere;
};

export type CountryCreateInput = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name: Scalars["String"]["input"];
  phoneCode: Scalars["String"]["input"];
  shortName: Scalars["String"]["input"];
  emojiU: Scalars["String"]["input"];
  states?: InputMaybe<CountryStatesFieldInput>;
};

export type CountryDeleteInput = {
  states?: InputMaybe<Array<CountryStatesDeleteFieldInput>>;
};

export type CountryDisconnectInput = {
  states?: InputMaybe<Array<CountryStatesDisconnectFieldInput>>;
};

export type CountryOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more CountrySort objects to sort Countries by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CountrySort>>;
};

export type CountryRelationInput = {
  states?: InputMaybe<Array<CountryStatesCreateFieldInput>>;
};

/** Fields to sort Countries by. The order in which sorts are applied is not guaranteed when specifying many fields in one CountrySort object. */
export type CountrySort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  phoneCode?: InputMaybe<SortDirection>;
  shortName?: InputMaybe<SortDirection>;
  emojiU?: InputMaybe<SortDirection>;
};

export type CountryStatesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<CountryStatesAggregateInput>>;
  OR?: InputMaybe<Array<CountryStatesAggregateInput>>;
  NOT?: InputMaybe<CountryStatesAggregateInput>;
  node?: InputMaybe<CountryStatesNodeAggregationWhereInput>;
};

export type CountryStatesConnectFieldInput = {
  where?: InputMaybe<StateConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<StateConnectInput>>;
};

export type CountryStatesConnectionSort = {
  node?: InputMaybe<StateSort>;
};

export type CountryStatesConnectionWhere = {
  AND?: InputMaybe<Array<CountryStatesConnectionWhere>>;
  OR?: InputMaybe<Array<CountryStatesConnectionWhere>>;
  NOT?: InputMaybe<CountryStatesConnectionWhere>;
  node?: InputMaybe<StateWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<StateWhere>;
};

export type CountryStatesCreateFieldInput = {
  node: StateCreateInput;
};

export type CountryStatesDeleteFieldInput = {
  where?: InputMaybe<CountryStatesConnectionWhere>;
  delete?: InputMaybe<StateDeleteInput>;
};

export type CountryStatesDisconnectFieldInput = {
  where?: InputMaybe<CountryStatesConnectionWhere>;
  disconnect?: InputMaybe<StateDisconnectInput>;
};

export type CountryStatesFieldInput = {
  connect?: InputMaybe<Array<CountryStatesConnectFieldInput>>;
  create?: InputMaybe<Array<CountryStatesCreateFieldInput>>;
};

export type CountryStatesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CountryStatesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CountryStatesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CountryStatesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CountryStatesUpdateConnectionInput = {
  node?: InputMaybe<StateUpdateInput>;
};

export type CountryStatesUpdateFieldInput = {
  where?: InputMaybe<CountryStatesConnectionWhere>;
  connect?: InputMaybe<Array<CountryStatesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<CountryStatesDisconnectFieldInput>>;
  create?: InputMaybe<Array<CountryStatesCreateFieldInput>>;
  update?: InputMaybe<CountryStatesUpdateConnectionInput>;
  delete?: InputMaybe<Array<CountryStatesDeleteFieldInput>>;
};

export type CountryUpdateInput = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  id_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  id_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  phoneCode?: InputMaybe<Scalars["String"]["input"]>;
  shortName?: InputMaybe<Scalars["String"]["input"]>;
  emojiU?: InputMaybe<Scalars["String"]["input"]>;
  states?: InputMaybe<Array<CountryStatesUpdateFieldInput>>;
};

export type CountryWhere = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  id_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  phoneCode?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  phoneCode_NOT?: InputMaybe<Scalars["String"]["input"]>;
  phoneCode_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  phoneCode_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  phoneCode_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  phoneCode_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  phoneCode_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  phoneCode_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  phoneCode_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  phoneCode_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  shortName?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  shortName_NOT?: InputMaybe<Scalars["String"]["input"]>;
  shortName_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  shortName_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  shortName_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  shortName_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  shortName_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  shortName_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  shortName_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  shortName_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  emojiU?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  emojiU_NOT?: InputMaybe<Scalars["String"]["input"]>;
  emojiU_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  emojiU_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  emojiU_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  emojiU_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  emojiU_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  emojiU_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  emojiU_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  emojiU_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<CountryWhere>>;
  AND?: InputMaybe<Array<CountryWhere>>;
  NOT?: InputMaybe<CountryWhere>;
  /** @deprecated Use `states_SOME` instead. */
  states?: InputMaybe<StateWhere>;
  /** @deprecated Use `states_NONE` instead. */
  states_NOT?: InputMaybe<StateWhere>;
  /** Return Countries where all of the related States match this filter */
  states_ALL?: InputMaybe<StateWhere>;
  /** Return Countries where none of the related States match this filter */
  states_NONE?: InputMaybe<StateWhere>;
  /** Return Countries where one of the related States match this filter */
  states_SINGLE?: InputMaybe<StateWhere>;
  /** Return Countries where some of the related States match this filter */
  states_SOME?: InputMaybe<StateWhere>;
  /** @deprecated Use `statesConnection_SOME` instead. */
  statesConnection?: InputMaybe<CountryStatesConnectionWhere>;
  /** @deprecated Use `statesConnection_NONE` instead. */
  statesConnection_NOT?: InputMaybe<CountryStatesConnectionWhere>;
  /** Return Countries where all of the related CountryStatesConnections match this filter */
  statesConnection_ALL?: InputMaybe<CountryStatesConnectionWhere>;
  /** Return Countries where none of the related CountryStatesConnections match this filter */
  statesConnection_NONE?: InputMaybe<CountryStatesConnectionWhere>;
  /** Return Countries where one of the related CountryStatesConnections match this filter */
  statesConnection_SINGLE?: InputMaybe<CountryStatesConnectionWhere>;
  /** Return Countries where some of the related CountryStatesConnections match this filter */
  statesConnection_SOME?: InputMaybe<CountryStatesConnectionWhere>;
  statesAggregate?: InputMaybe<CountryStatesAggregateInput>;
};

export type EnginesConnectInput = {
  user?: InputMaybe<Array<EnginesUserConnectFieldInput>>;
};

export type EnginesConnectOrCreateInput = {
  user?: InputMaybe<Array<EnginesUserConnectOrCreateFieldInput>>;
};

export type EnginesConnectWhere = {
  node: EnginesWhere;
};

export type EnginesCreateInput = {
  id: Scalars["String"]["input"];
  type: EngineType;
  name?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  config?: InputMaybe<Scalars["String"]["input"]>;
  cameras?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  hostname?: InputMaybe<Scalars["String"]["input"]>;
  nextEvent?: InputMaybe<Scalars["String"]["input"]>;
  venueId?: InputMaybe<Scalars["String"]["input"]>;
  externalId?: InputMaybe<Scalars["String"]["input"]>;
  venueName?: InputMaybe<Scalars["String"]["input"]>;
  venueNameInternational?: InputMaybe<Scalars["String"]["input"]>;
  graphicsSystemId?: InputMaybe<Scalars["String"]["input"]>;
  matchId?: InputMaybe<Scalars["String"]["input"]>;
  enableLive?: InputMaybe<Scalars["Boolean"]["input"]>;
  enabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  user?: InputMaybe<EnginesUserFieldInput>;
};

export type EnginesDeleteInput = {
  user?: InputMaybe<Array<EnginesUserDeleteFieldInput>>;
};

export type EnginesDisconnectInput = {
  user?: InputMaybe<Array<EnginesUserDisconnectFieldInput>>;
};

export type EnginesOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more EnginesSort objects to sort Engines by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<EnginesSort>>;
};

export type EnginesRelationInput = {
  user?: InputMaybe<Array<EnginesUserCreateFieldInput>>;
};

/** Fields to sort Engines by. The order in which sorts are applied is not guaranteed when specifying many fields in one EnginesSort object. */
export type EnginesSort = {
  id?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  location?: InputMaybe<SortDirection>;
  config?: InputMaybe<SortDirection>;
  cameras?: InputMaybe<SortDirection>;
  status?: InputMaybe<SortDirection>;
  hostname?: InputMaybe<SortDirection>;
  nextEvent?: InputMaybe<SortDirection>;
  venueId?: InputMaybe<SortDirection>;
  externalId?: InputMaybe<SortDirection>;
  venueName?: InputMaybe<SortDirection>;
  venueNameInternational?: InputMaybe<SortDirection>;
  graphicsSystemId?: InputMaybe<SortDirection>;
  matchId?: InputMaybe<SortDirection>;
  enableLive?: InputMaybe<SortDirection>;
  enabled?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type EnginesUpdateInput = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<EngineType>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  config?: InputMaybe<Scalars["String"]["input"]>;
  cameras?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  hostname?: InputMaybe<Scalars["String"]["input"]>;
  nextEvent?: InputMaybe<Scalars["String"]["input"]>;
  venueId?: InputMaybe<Scalars["String"]["input"]>;
  externalId?: InputMaybe<Scalars["String"]["input"]>;
  venueName?: InputMaybe<Scalars["String"]["input"]>;
  venueNameInternational?: InputMaybe<Scalars["String"]["input"]>;
  graphicsSystemId?: InputMaybe<Scalars["String"]["input"]>;
  matchId?: InputMaybe<Scalars["String"]["input"]>;
  enableLive?: InputMaybe<Scalars["Boolean"]["input"]>;
  enabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  user?: InputMaybe<Array<EnginesUserUpdateFieldInput>>;
};

export type EnginesUserAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<EnginesUserAggregateInput>>;
  OR?: InputMaybe<Array<EnginesUserAggregateInput>>;
  NOT?: InputMaybe<EnginesUserAggregateInput>;
  node?: InputMaybe<EnginesUserNodeAggregationWhereInput>;
};

export type EnginesUserConnectFieldInput = {
  where?: InputMaybe<UserConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type EnginesUserConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type EnginesUserConnectionWhere = {
  AND?: InputMaybe<Array<EnginesUserConnectionWhere>>;
  OR?: InputMaybe<Array<EnginesUserConnectionWhere>>;
  NOT?: InputMaybe<EnginesUserConnectionWhere>;
  node?: InputMaybe<UserWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<UserWhere>;
};

export type EnginesUserConnectOrCreateFieldInput = {
  where: UserConnectOrCreateWhere;
  onCreate: EnginesUserConnectOrCreateFieldInputOnCreate;
};

export type EnginesUserConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type EnginesUserCreateFieldInput = {
  node: UserCreateInput;
};

export type EnginesUserDeleteFieldInput = {
  where?: InputMaybe<EnginesUserConnectionWhere>;
};

export type EnginesUserDisconnectFieldInput = {
  where?: InputMaybe<EnginesUserConnectionWhere>;
};

export type EnginesUserFieldInput = {
  connectOrCreate?: InputMaybe<Array<EnginesUserConnectOrCreateFieldInput>>;
  connect?: InputMaybe<Array<EnginesUserConnectFieldInput>>;
  create?: InputMaybe<Array<EnginesUserCreateFieldInput>>;
};

export type EnginesUserNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<EnginesUserNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<EnginesUserNodeAggregationWhereInput>>;
  NOT?: InputMaybe<EnginesUserNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  firstName_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  firstName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  firstName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  firstName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  firstName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  firstName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  firstName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  firstName_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  firstName_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  firstName_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  firstName_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  firstName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  firstName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  firstName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  firstName_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  firstName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  firstName_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  firstName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  firstName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  firstName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  firstName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  firstName_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  firstName_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  firstName_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  firstName_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  firstName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  firstName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  firstName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  firstName_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  firstName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  firstName_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  firstName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  firstName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  firstName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  firstName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  lastName_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  lastName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  lastName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  lastName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  lastName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  lastName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  lastName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  lastName_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  lastName_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  lastName_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  lastName_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  lastName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  lastName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  lastName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  lastName_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  lastName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  lastName_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  lastName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  lastName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  lastName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  lastName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  lastName_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  lastName_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  lastName_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  lastName_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  lastName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  lastName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  lastName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  lastName_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  lastName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  lastName_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  lastName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  lastName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  lastName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  lastName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  emailVerified_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emailVerified_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emailVerified_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emailVerified_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  emailVerified_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  emailVerified_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  emailVerified_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  emailVerified_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emailVerified_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emailVerified_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emailVerified_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  emailVerified_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  emailVerified_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  emailVerified_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  emailVerified_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emailVerified_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emailVerified_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emailVerified_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  emailVerified_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  emailVerified_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  emailVerified_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  emailVerified_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emailVerified_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emailVerified_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emailVerified_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  emailVerified_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  emailVerified_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  emailVerified_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  emailVerified_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emailVerified_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emailVerified_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emailVerified_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  emailVerified_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  emailVerified_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  emailVerified_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  image_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  image_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  image_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  image_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  image_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  image_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  image_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  image_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  image_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  image_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  image_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  image_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  image_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  image_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  image_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  image_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  image_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  image_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  image_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  image_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  role_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  role_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  role_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  role_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  role_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  role_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  role_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  role_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  role_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  role_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  role_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  role_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  role_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  role_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  role_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  role_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  role_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  role_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  role_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  role_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  role_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  role_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  role_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  role_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  role_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  role_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  role_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  role_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  role_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  role_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  role_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  role_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  role_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  role_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  role_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  phoneCode_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneCode_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneCode_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneCode_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  phoneCode_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  phoneCode_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  phoneCode_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  phoneCode_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneCode_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneCode_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneCode_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  phoneCode_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  phoneCode_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  phoneCode_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  phoneCode_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneCode_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneCode_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneCode_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  phoneCode_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  phoneCode_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  phoneCode_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  phoneCode_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneCode_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneCode_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneCode_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  phoneCode_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  phoneCode_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  phoneCode_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  phoneCode_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneCode_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneCode_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneCode_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  phoneCode_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  phoneCode_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  phoneCode_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  phoneNumber_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneNumber_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneNumber_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneNumber_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  phoneNumber_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  phoneNumber_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  phoneNumber_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  phoneNumber_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneNumber_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneNumber_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneNumber_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  phoneNumber_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  phoneNumber_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  phoneNumber_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  phoneNumber_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneNumber_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneNumber_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneNumber_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  phoneNumber_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  phoneNumber_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  phoneNumber_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  phoneNumber_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneNumber_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneNumber_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneNumber_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  phoneNumber_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  phoneNumber_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  phoneNumber_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  phoneNumber_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneNumber_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneNumber_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneNumber_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  phoneNumber_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  phoneNumber_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  phoneNumber_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  address_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  address_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  address_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  address_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  address_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  address_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  address_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  address_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  address_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  address_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  address_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  address_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  address_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  address_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  address_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  address_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  address_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  address_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  address_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  address_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  address_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  address_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  address_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  address_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  address_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  address_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  address_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  address_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  address_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  address_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  address_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  address_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  address_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  address_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  address_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  city_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  city_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  city_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  city_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  city_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  city_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  city_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  city_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  city_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  city_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  city_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  city_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  city_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  city_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  city_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  city_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  city_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  city_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  city_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  city_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  city_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  city_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  city_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  city_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  city_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  city_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  city_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  city_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  city_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  city_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  city_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  city_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  city_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  city_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  city_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  state_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  state_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  state_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  state_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  state_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  state_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  state_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  state_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  state_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  state_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  state_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  state_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  state_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  state_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  state_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  state_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  state_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  state_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  state_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  state_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  state_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  state_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  state_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  state_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  state_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  state_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  state_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  state_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  state_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  state_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  state_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  state_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  state_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  state_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  state_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  stateId_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  stateId_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  stateId_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  stateId_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  stateId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  stateId_GT?: InputMaybe<Scalars["Int"]["input"]>;
  stateId_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  stateId_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  stateId_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  stateId_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  stateId_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  stateId_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  stateId_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  stateId_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  stateId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  stateId_LT?: InputMaybe<Scalars["Int"]["input"]>;
  stateId_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  stateId_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  stateId_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  stateId_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  stateId_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  stateId_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  stateId_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  stateId_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  stateId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  country_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  country_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  country_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  country_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  country_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  country_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  country_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  country_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  country_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  country_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  country_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  country_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  country_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  country_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  country_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  country_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  country_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  country_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  country_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  country_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  country_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  country_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  country_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  country_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  country_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  country_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  country_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  country_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  country_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  country_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  country_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  country_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  country_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  country_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  country_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  countryId_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  countryId_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  countryId_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  countryId_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  countryId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  countryId_GT?: InputMaybe<Scalars["Int"]["input"]>;
  countryId_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  countryId_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  countryId_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  countryId_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  countryId_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  countryId_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  countryId_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  countryId_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  countryId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  countryId_LT?: InputMaybe<Scalars["Int"]["input"]>;
  countryId_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  countryId_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  countryId_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  countryId_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  countryId_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  countryId_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  countryId_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  countryId_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  countryId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  organization_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  organization_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  organization_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  organization_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  organization_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  organization_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  organization_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  organization_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  organization_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  organization_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  organization_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  organization_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  organization_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  organization_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  organization_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  organization_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  organization_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  organization_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  organization_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  organization_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  organization_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  organization_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  organization_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  organization_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  organization_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  organization_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  organization_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  organization_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  organization_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  organization_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  organization_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  organization_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  organization_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  organization_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  organization_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type EnginesUserUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type EnginesUserUpdateFieldInput = {
  where?: InputMaybe<EnginesUserConnectionWhere>;
  connectOrCreate?: InputMaybe<Array<EnginesUserConnectOrCreateFieldInput>>;
  connect?: InputMaybe<Array<EnginesUserConnectFieldInput>>;
  disconnect?: InputMaybe<Array<EnginesUserDisconnectFieldInput>>;
  create?: InputMaybe<Array<EnginesUserCreateFieldInput>>;
  update?: InputMaybe<EnginesUserUpdateConnectionInput>;
  delete?: InputMaybe<Array<EnginesUserDeleteFieldInput>>;
};

export type EnginesWhere = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["String"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<EngineType>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  type_NOT?: InputMaybe<EngineType>;
  type_IN?: InputMaybe<Array<EngineType>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  type_NOT_IN?: InputMaybe<Array<EngineType>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT?: InputMaybe<Scalars["String"]["input"]>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  description_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  description_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  description_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  location_NOT?: InputMaybe<Scalars["String"]["input"]>;
  location_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  location_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  location_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  location_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  location_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  location_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  location_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  location_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  config?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  config_NOT?: InputMaybe<Scalars["String"]["input"]>;
  config_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  config_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  config_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  config_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  config_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  config_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  config_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  config_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  cameras?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  cameras_NOT?: InputMaybe<Scalars["String"]["input"]>;
  cameras_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  cameras_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  cameras_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  cameras_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  cameras_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  cameras_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  cameras_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  cameras_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  status_NOT?: InputMaybe<Scalars["String"]["input"]>;
  status_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  status_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  status_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  status_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  status_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  status_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  status_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  hostname?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  hostname_NOT?: InputMaybe<Scalars["String"]["input"]>;
  hostname_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  hostname_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  hostname_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  hostname_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  hostname_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  hostname_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  hostname_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  hostname_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  nextEvent?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  nextEvent_NOT?: InputMaybe<Scalars["String"]["input"]>;
  nextEvent_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  nextEvent_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  nextEvent_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  nextEvent_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  nextEvent_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  nextEvent_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  nextEvent_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  nextEvent_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  venueId?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  venueId_NOT?: InputMaybe<Scalars["String"]["input"]>;
  venueId_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  venueId_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  venueId_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  venueId_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  venueId_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  venueId_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  venueId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  venueId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  externalId?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  externalId_NOT?: InputMaybe<Scalars["String"]["input"]>;
  externalId_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  externalId_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  externalId_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  externalId_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  externalId_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  externalId_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  externalId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  externalId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  venueName?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  venueName_NOT?: InputMaybe<Scalars["String"]["input"]>;
  venueName_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  venueName_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  venueName_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  venueName_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  venueName_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  venueName_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  venueName_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  venueName_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  venueNameInternational?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  venueNameInternational_NOT?: InputMaybe<Scalars["String"]["input"]>;
  venueNameInternational_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  venueNameInternational_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  venueNameInternational_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  venueNameInternational_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  venueNameInternational_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  venueNameInternational_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  venueNameInternational_NOT_STARTS_WITH?: InputMaybe<
    Scalars["String"]["input"]
  >;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  venueNameInternational_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  graphicsSystemId?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  graphicsSystemId_NOT?: InputMaybe<Scalars["String"]["input"]>;
  graphicsSystemId_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  graphicsSystemId_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  graphicsSystemId_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  graphicsSystemId_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  graphicsSystemId_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  graphicsSystemId_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  graphicsSystemId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  graphicsSystemId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  matchId?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  matchId_NOT?: InputMaybe<Scalars["String"]["input"]>;
  matchId_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  matchId_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  matchId_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  matchId_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  matchId_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  matchId_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  matchId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  matchId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  enableLive?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  enableLive_NOT?: InputMaybe<Scalars["Boolean"]["input"]>;
  enabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  enabled_NOT?: InputMaybe<Scalars["Boolean"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  OR?: InputMaybe<Array<EnginesWhere>>;
  AND?: InputMaybe<Array<EnginesWhere>>;
  NOT?: InputMaybe<EnginesWhere>;
  /** @deprecated Use `user_SOME` instead. */
  user?: InputMaybe<UserWhere>;
  /** @deprecated Use `user_NONE` instead. */
  user_NOT?: InputMaybe<UserWhere>;
  /** Return Engines where all of the related Users match this filter */
  user_ALL?: InputMaybe<UserWhere>;
  /** Return Engines where none of the related Users match this filter */
  user_NONE?: InputMaybe<UserWhere>;
  /** Return Engines where one of the related Users match this filter */
  user_SINGLE?: InputMaybe<UserWhere>;
  /** Return Engines where some of the related Users match this filter */
  user_SOME?: InputMaybe<UserWhere>;
  /** @deprecated Use `userConnection_SOME` instead. */
  userConnection?: InputMaybe<EnginesUserConnectionWhere>;
  /** @deprecated Use `userConnection_NONE` instead. */
  userConnection_NOT?: InputMaybe<EnginesUserConnectionWhere>;
  /** Return Engines where all of the related EnginesUserConnections match this filter */
  userConnection_ALL?: InputMaybe<EnginesUserConnectionWhere>;
  /** Return Engines where none of the related EnginesUserConnections match this filter */
  userConnection_NONE?: InputMaybe<EnginesUserConnectionWhere>;
  /** Return Engines where one of the related EnginesUserConnections match this filter */
  userConnection_SINGLE?: InputMaybe<EnginesUserConnectionWhere>;
  /** Return Engines where some of the related EnginesUserConnections match this filter */
  userConnection_SOME?: InputMaybe<EnginesUserConnectionWhere>;
  userAggregate?: InputMaybe<EnginesUserAggregateInput>;
};

export type EnvironmentConfigsConnectInput = {
  Engines?: InputMaybe<Array<EnvironmentConfigsEnginesConnectFieldInput>>;
};

export type EnvironmentConfigsCreateInput = {
  id: Scalars["String"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  venue?: InputMaybe<Scalars["String"]["input"]>;
  configName?: InputMaybe<Scalars["String"]["input"]>;
  dateTime?: InputMaybe<Scalars["String"]["input"]>;
  original?: InputMaybe<Scalars["String"]["input"]>;
  edited?: InputMaybe<Scalars["String"]["input"]>;
  version?: InputMaybe<Scalars["String"]["input"]>;
  Engines?: InputMaybe<EnvironmentConfigsEnginesFieldInput>;
};

export type EnvironmentConfigsDeleteInput = {
  Engines?: InputMaybe<Array<EnvironmentConfigsEnginesDeleteFieldInput>>;
};

export type EnvironmentConfigsDisconnectInput = {
  Engines?: InputMaybe<Array<EnvironmentConfigsEnginesDisconnectFieldInput>>;
};

export type EnvironmentConfigsEnginesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<EnvironmentConfigsEnginesAggregateInput>>;
  OR?: InputMaybe<Array<EnvironmentConfigsEnginesAggregateInput>>;
  NOT?: InputMaybe<EnvironmentConfigsEnginesAggregateInput>;
  node?: InputMaybe<EnvironmentConfigsEnginesNodeAggregationWhereInput>;
};

export type EnvironmentConfigsEnginesConnectFieldInput = {
  where?: InputMaybe<EnginesConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<EnginesConnectInput>>;
};

export type EnvironmentConfigsEnginesConnectionSort = {
  node?: InputMaybe<EnginesSort>;
};

export type EnvironmentConfigsEnginesConnectionWhere = {
  AND?: InputMaybe<Array<EnvironmentConfigsEnginesConnectionWhere>>;
  OR?: InputMaybe<Array<EnvironmentConfigsEnginesConnectionWhere>>;
  NOT?: InputMaybe<EnvironmentConfigsEnginesConnectionWhere>;
  node?: InputMaybe<EnginesWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<EnginesWhere>;
};

export type EnvironmentConfigsEnginesCreateFieldInput = {
  node: EnginesCreateInput;
};

export type EnvironmentConfigsEnginesDeleteFieldInput = {
  where?: InputMaybe<EnvironmentConfigsEnginesConnectionWhere>;
  delete?: InputMaybe<EnginesDeleteInput>;
};

export type EnvironmentConfigsEnginesDisconnectFieldInput = {
  where?: InputMaybe<EnvironmentConfigsEnginesConnectionWhere>;
  disconnect?: InputMaybe<EnginesDisconnectInput>;
};

export type EnvironmentConfigsEnginesFieldInput = {
  connect?: InputMaybe<Array<EnvironmentConfigsEnginesConnectFieldInput>>;
  create?: InputMaybe<Array<EnvironmentConfigsEnginesCreateFieldInput>>;
};

export type EnvironmentConfigsEnginesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<EnvironmentConfigsEnginesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<EnvironmentConfigsEnginesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<EnvironmentConfigsEnginesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  location_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  location_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  location_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  location_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  location_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  location_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  location_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  location_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  location_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  location_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  location_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  location_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  location_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  location_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  location_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  location_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  location_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  location_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  location_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  location_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  location_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  location_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  location_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  location_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  location_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  location_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  location_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  location_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  location_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  location_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  location_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  location_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  location_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  location_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  location_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  config_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  config_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  config_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  config_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  config_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  config_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  config_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  config_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  config_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  config_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  config_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  config_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  config_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  config_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  config_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  config_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  config_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  config_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  config_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  config_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  config_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  config_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  config_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  config_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  config_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  config_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  config_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  config_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  config_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  config_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  config_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  config_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  config_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  config_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  config_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  cameras_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  cameras_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  cameras_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  cameras_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  cameras_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  cameras_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  cameras_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  cameras_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  cameras_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  cameras_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  cameras_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  cameras_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  cameras_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  cameras_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  cameras_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  cameras_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  cameras_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  cameras_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  cameras_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  cameras_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  cameras_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  cameras_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  cameras_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  cameras_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  cameras_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  cameras_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  cameras_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  cameras_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  cameras_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  cameras_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  cameras_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  cameras_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  cameras_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  cameras_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  cameras_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  status_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  status_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  status_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  status_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  status_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  status_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  status_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  status_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  status_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  status_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  status_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  status_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  status_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  status_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  status_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  status_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  status_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  status_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  status_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  status_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  status_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  status_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  status_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  status_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  status_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  status_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  status_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  status_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  status_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  status_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  status_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  status_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  status_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  status_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  status_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hostname_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hostname_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hostname_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hostname_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  hostname_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  hostname_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  hostname_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hostname_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hostname_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hostname_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hostname_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  hostname_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  hostname_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  hostname_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hostname_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hostname_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hostname_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hostname_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  hostname_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  hostname_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  hostname_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hostname_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hostname_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hostname_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hostname_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  hostname_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  hostname_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  hostname_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hostname_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hostname_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hostname_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hostname_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  hostname_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  hostname_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  hostname_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  nextEvent_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  nextEvent_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  nextEvent_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  nextEvent_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  nextEvent_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  nextEvent_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  nextEvent_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  nextEvent_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  nextEvent_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  nextEvent_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  nextEvent_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  nextEvent_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  nextEvent_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  nextEvent_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  nextEvent_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  nextEvent_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  nextEvent_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  nextEvent_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  nextEvent_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  nextEvent_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  nextEvent_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  nextEvent_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  nextEvent_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  nextEvent_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  nextEvent_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  nextEvent_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  nextEvent_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  nextEvent_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  nextEvent_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  nextEvent_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  nextEvent_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  nextEvent_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  nextEvent_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  nextEvent_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  nextEvent_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  venueId_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  venueId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  venueId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  venueId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  venueId_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueId_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueId_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueId_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  venueId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  venueId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  venueId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  venueId_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueId_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  venueId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  venueId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  venueId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  venueId_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueId_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueId_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueId_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  venueId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  venueId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  venueId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  venueId_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueId_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  venueId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  venueId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  venueId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalId_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  externalId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  externalId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  externalId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  externalId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  externalId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  externalId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalId_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  externalId_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  externalId_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  externalId_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  externalId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  externalId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  externalId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalId_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  externalId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  externalId_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  externalId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  externalId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  externalId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  externalId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalId_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  externalId_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  externalId_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  externalId_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  externalId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  externalId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  externalId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalId_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  externalId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  externalId_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  externalId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  externalId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  externalId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  externalId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  venueName_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  venueName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  venueName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  venueName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  venueName_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueName_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueName_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueName_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  venueName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  venueName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  venueName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  venueName_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueName_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  venueName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  venueName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  venueName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  venueName_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueName_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueName_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueName_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  venueName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  venueName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  venueName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  venueName_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueName_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  venueName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  venueName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  venueName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  venueNameInternational_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueNameInternational_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueNameInternational_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueNameInternational_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  venueNameInternational_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  venueNameInternational_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  venueNameInternational_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  venueNameInternational_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueNameInternational_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueNameInternational_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueNameInternational_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  venueNameInternational_AVERAGE_LENGTH_GT?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  venueNameInternational_LONGEST_LENGTH_GT?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  venueNameInternational_SHORTEST_LENGTH_GT?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  venueNameInternational_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueNameInternational_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueNameInternational_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueNameInternational_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  venueNameInternational_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  venueNameInternational_LONGEST_LENGTH_GTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  venueNameInternational_SHORTEST_LENGTH_GTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  venueNameInternational_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueNameInternational_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueNameInternational_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueNameInternational_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  venueNameInternational_AVERAGE_LENGTH_LT?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  venueNameInternational_LONGEST_LENGTH_LT?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  venueNameInternational_SHORTEST_LENGTH_LT?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  venueNameInternational_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueNameInternational_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueNameInternational_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueNameInternational_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  venueNameInternational_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  venueNameInternational_LONGEST_LENGTH_LTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  venueNameInternational_SHORTEST_LENGTH_LTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  graphicsSystemId_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  graphicsSystemId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  graphicsSystemId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  graphicsSystemId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  graphicsSystemId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  graphicsSystemId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  graphicsSystemId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  graphicsSystemId_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  graphicsSystemId_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  graphicsSystemId_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  graphicsSystemId_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  graphicsSystemId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  graphicsSystemId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  graphicsSystemId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  graphicsSystemId_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  graphicsSystemId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  graphicsSystemId_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  graphicsSystemId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  graphicsSystemId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  graphicsSystemId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  graphicsSystemId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  graphicsSystemId_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  graphicsSystemId_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  graphicsSystemId_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  graphicsSystemId_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  graphicsSystemId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  graphicsSystemId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  graphicsSystemId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  graphicsSystemId_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  graphicsSystemId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  graphicsSystemId_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  graphicsSystemId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  graphicsSystemId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  graphicsSystemId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  graphicsSystemId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  matchId_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  matchId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  matchId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  matchId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  matchId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  matchId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  matchId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  matchId_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  matchId_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  matchId_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  matchId_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  matchId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  matchId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  matchId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  matchId_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  matchId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  matchId_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  matchId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  matchId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  matchId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  matchId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  matchId_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  matchId_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  matchId_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  matchId_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  matchId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  matchId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  matchId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  matchId_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  matchId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  matchId_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  matchId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  matchId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  matchId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  matchId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type EnvironmentConfigsEnginesUpdateConnectionInput = {
  node?: InputMaybe<EnginesUpdateInput>;
};

export type EnvironmentConfigsEnginesUpdateFieldInput = {
  where?: InputMaybe<EnvironmentConfigsEnginesConnectionWhere>;
  connect?: InputMaybe<Array<EnvironmentConfigsEnginesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<EnvironmentConfigsEnginesDisconnectFieldInput>>;
  create?: InputMaybe<Array<EnvironmentConfigsEnginesCreateFieldInput>>;
  update?: InputMaybe<EnvironmentConfigsEnginesUpdateConnectionInput>;
  delete?: InputMaybe<Array<EnvironmentConfigsEnginesDeleteFieldInput>>;
};

export type EnvironmentConfigsOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more EnvironmentConfigsSort objects to sort EnvironmentConfigs by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<EnvironmentConfigsSort>>;
};

export type EnvironmentConfigsRelationInput = {
  Engines?: InputMaybe<Array<EnvironmentConfigsEnginesCreateFieldInput>>;
};

/** Fields to sort EnvironmentConfigs by. The order in which sorts are applied is not guaranteed when specifying many fields in one EnvironmentConfigsSort object. */
export type EnvironmentConfigsSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  venue?: InputMaybe<SortDirection>;
  configName?: InputMaybe<SortDirection>;
  dateTime?: InputMaybe<SortDirection>;
  original?: InputMaybe<SortDirection>;
  edited?: InputMaybe<SortDirection>;
  version?: InputMaybe<SortDirection>;
};

export type EnvironmentConfigsUpdateInput = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  venue?: InputMaybe<Scalars["String"]["input"]>;
  configName?: InputMaybe<Scalars["String"]["input"]>;
  dateTime?: InputMaybe<Scalars["String"]["input"]>;
  original?: InputMaybe<Scalars["String"]["input"]>;
  edited?: InputMaybe<Scalars["String"]["input"]>;
  version?: InputMaybe<Scalars["String"]["input"]>;
  Engines?: InputMaybe<Array<EnvironmentConfigsEnginesUpdateFieldInput>>;
};

export type EnvironmentConfigsWhere = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["String"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  venue?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  venue_NOT?: InputMaybe<Scalars["String"]["input"]>;
  venue_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  venue_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  venue_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  venue_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  venue_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  venue_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  venue_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  venue_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  configName?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  configName_NOT?: InputMaybe<Scalars["String"]["input"]>;
  configName_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  configName_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  configName_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  configName_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  configName_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  configName_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  configName_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  configName_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  dateTime?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  dateTime_NOT?: InputMaybe<Scalars["String"]["input"]>;
  dateTime_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  dateTime_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateTime_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  dateTime_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  dateTime_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  dateTime_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  dateTime_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  dateTime_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  original?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  original_NOT?: InputMaybe<Scalars["String"]["input"]>;
  original_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  original_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  original_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  original_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  original_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  original_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  original_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  original_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  edited?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edited_NOT?: InputMaybe<Scalars["String"]["input"]>;
  edited_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edited_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  edited_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  edited_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  edited_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edited_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edited_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edited_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  version?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  version_NOT?: InputMaybe<Scalars["String"]["input"]>;
  version_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  version_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  version_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  version_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  version_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  version_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  version_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  version_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<EnvironmentConfigsWhere>>;
  AND?: InputMaybe<Array<EnvironmentConfigsWhere>>;
  NOT?: InputMaybe<EnvironmentConfigsWhere>;
  /** @deprecated Use `Engines_SOME` instead. */
  Engines?: InputMaybe<EnginesWhere>;
  /** @deprecated Use `Engines_NONE` instead. */
  Engines_NOT?: InputMaybe<EnginesWhere>;
  /** Return EnvironmentConfigs where all of the related Engines match this filter */
  Engines_ALL?: InputMaybe<EnginesWhere>;
  /** Return EnvironmentConfigs where none of the related Engines match this filter */
  Engines_NONE?: InputMaybe<EnginesWhere>;
  /** Return EnvironmentConfigs where one of the related Engines match this filter */
  Engines_SINGLE?: InputMaybe<EnginesWhere>;
  /** Return EnvironmentConfigs where some of the related Engines match this filter */
  Engines_SOME?: InputMaybe<EnginesWhere>;
  /** @deprecated Use `EnginesConnection_SOME` instead. */
  EnginesConnection?: InputMaybe<EnvironmentConfigsEnginesConnectionWhere>;
  /** @deprecated Use `EnginesConnection_NONE` instead. */
  EnginesConnection_NOT?: InputMaybe<EnvironmentConfigsEnginesConnectionWhere>;
  /** Return EnvironmentConfigs where all of the related EnvironmentConfigsEnginesConnections match this filter */
  EnginesConnection_ALL?: InputMaybe<EnvironmentConfigsEnginesConnectionWhere>;
  /** Return EnvironmentConfigs where none of the related EnvironmentConfigsEnginesConnections match this filter */
  EnginesConnection_NONE?: InputMaybe<EnvironmentConfigsEnginesConnectionWhere>;
  /** Return EnvironmentConfigs where one of the related EnvironmentConfigsEnginesConnections match this filter */
  EnginesConnection_SINGLE?: InputMaybe<EnvironmentConfigsEnginesConnectionWhere>;
  /** Return EnvironmentConfigs where some of the related EnvironmentConfigsEnginesConnections match this filter */
  EnginesConnection_SOME?: InputMaybe<EnvironmentConfigsEnginesConnectionWhere>;
  EnginesAggregate?: InputMaybe<EnvironmentConfigsEnginesAggregateInput>;
};

export type LutAppConnectInput = {
  Engines?: InputMaybe<Array<LutAppEnginesConnectFieldInput>>;
};

export type LutAppCreateInput = {
  id: Scalars["String"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  genericName?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  fileUrl?: InputMaybe<Scalars["String"]["input"]>;
  fileName?: InputMaybe<Scalars["String"]["input"]>;
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  isProcessed?: InputMaybe<Scalars["Boolean"]["input"]>;
  Engines?: InputMaybe<LutAppEnginesFieldInput>;
};

export type LutAppDeleteInput = {
  Engines?: InputMaybe<Array<LutAppEnginesDeleteFieldInput>>;
};

export type LutAppDisconnectInput = {
  Engines?: InputMaybe<Array<LutAppEnginesDisconnectFieldInput>>;
};

export type LutAppEnginesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<LutAppEnginesAggregateInput>>;
  OR?: InputMaybe<Array<LutAppEnginesAggregateInput>>;
  NOT?: InputMaybe<LutAppEnginesAggregateInput>;
  node?: InputMaybe<LutAppEnginesNodeAggregationWhereInput>;
};

export type LutAppEnginesConnectFieldInput = {
  where?: InputMaybe<EnginesConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<EnginesConnectInput>>;
};

export type LutAppEnginesConnectionSort = {
  node?: InputMaybe<EnginesSort>;
};

export type LutAppEnginesConnectionWhere = {
  AND?: InputMaybe<Array<LutAppEnginesConnectionWhere>>;
  OR?: InputMaybe<Array<LutAppEnginesConnectionWhere>>;
  NOT?: InputMaybe<LutAppEnginesConnectionWhere>;
  node?: InputMaybe<EnginesWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<EnginesWhere>;
};

export type LutAppEnginesCreateFieldInput = {
  node: EnginesCreateInput;
};

export type LutAppEnginesDeleteFieldInput = {
  where?: InputMaybe<LutAppEnginesConnectionWhere>;
  delete?: InputMaybe<EnginesDeleteInput>;
};

export type LutAppEnginesDisconnectFieldInput = {
  where?: InputMaybe<LutAppEnginesConnectionWhere>;
  disconnect?: InputMaybe<EnginesDisconnectInput>;
};

export type LutAppEnginesFieldInput = {
  connect?: InputMaybe<Array<LutAppEnginesConnectFieldInput>>;
  create?: InputMaybe<Array<LutAppEnginesCreateFieldInput>>;
};

export type LutAppEnginesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<LutAppEnginesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<LutAppEnginesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<LutAppEnginesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  location_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  location_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  location_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  location_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  location_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  location_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  location_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  location_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  location_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  location_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  location_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  location_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  location_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  location_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  location_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  location_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  location_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  location_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  location_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  location_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  location_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  location_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  location_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  location_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  location_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  location_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  location_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  location_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  location_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  location_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  location_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  location_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  location_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  location_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  location_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  config_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  config_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  config_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  config_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  config_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  config_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  config_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  config_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  config_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  config_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  config_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  config_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  config_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  config_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  config_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  config_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  config_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  config_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  config_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  config_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  config_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  config_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  config_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  config_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  config_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  config_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  config_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  config_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  config_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  config_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  config_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  config_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  config_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  config_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  config_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  cameras_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  cameras_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  cameras_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  cameras_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  cameras_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  cameras_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  cameras_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  cameras_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  cameras_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  cameras_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  cameras_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  cameras_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  cameras_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  cameras_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  cameras_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  cameras_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  cameras_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  cameras_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  cameras_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  cameras_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  cameras_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  cameras_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  cameras_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  cameras_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  cameras_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  cameras_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  cameras_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  cameras_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  cameras_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  cameras_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  cameras_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  cameras_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  cameras_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  cameras_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  cameras_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  status_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  status_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  status_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  status_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  status_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  status_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  status_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  status_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  status_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  status_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  status_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  status_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  status_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  status_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  status_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  status_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  status_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  status_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  status_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  status_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  status_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  status_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  status_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  status_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  status_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  status_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  status_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  status_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  status_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  status_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  status_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  status_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  status_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  status_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  status_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hostname_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hostname_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hostname_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hostname_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  hostname_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  hostname_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  hostname_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hostname_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hostname_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hostname_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hostname_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  hostname_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  hostname_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  hostname_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hostname_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hostname_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hostname_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hostname_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  hostname_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  hostname_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  hostname_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hostname_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hostname_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hostname_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hostname_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  hostname_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  hostname_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  hostname_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hostname_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hostname_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hostname_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hostname_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  hostname_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  hostname_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  hostname_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  nextEvent_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  nextEvent_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  nextEvent_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  nextEvent_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  nextEvent_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  nextEvent_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  nextEvent_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  nextEvent_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  nextEvent_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  nextEvent_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  nextEvent_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  nextEvent_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  nextEvent_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  nextEvent_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  nextEvent_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  nextEvent_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  nextEvent_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  nextEvent_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  nextEvent_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  nextEvent_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  nextEvent_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  nextEvent_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  nextEvent_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  nextEvent_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  nextEvent_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  nextEvent_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  nextEvent_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  nextEvent_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  nextEvent_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  nextEvent_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  nextEvent_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  nextEvent_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  nextEvent_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  nextEvent_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  nextEvent_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  venueId_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  venueId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  venueId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  venueId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  venueId_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueId_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueId_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueId_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  venueId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  venueId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  venueId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  venueId_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueId_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  venueId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  venueId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  venueId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  venueId_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueId_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueId_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueId_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  venueId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  venueId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  venueId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  venueId_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueId_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  venueId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  venueId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  venueId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalId_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  externalId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  externalId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  externalId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  externalId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  externalId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  externalId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalId_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  externalId_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  externalId_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  externalId_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  externalId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  externalId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  externalId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalId_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  externalId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  externalId_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  externalId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  externalId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  externalId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  externalId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalId_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  externalId_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  externalId_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  externalId_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  externalId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  externalId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  externalId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalId_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  externalId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  externalId_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  externalId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  externalId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  externalId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  externalId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  venueName_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  venueName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  venueName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  venueName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  venueName_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueName_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueName_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueName_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  venueName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  venueName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  venueName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  venueName_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueName_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  venueName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  venueName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  venueName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  venueName_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueName_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueName_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueName_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  venueName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  venueName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  venueName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  venueName_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueName_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  venueName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  venueName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  venueName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  venueNameInternational_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueNameInternational_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueNameInternational_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueNameInternational_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  venueNameInternational_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  venueNameInternational_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  venueNameInternational_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  venueNameInternational_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueNameInternational_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueNameInternational_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueNameInternational_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  venueNameInternational_AVERAGE_LENGTH_GT?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  venueNameInternational_LONGEST_LENGTH_GT?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  venueNameInternational_SHORTEST_LENGTH_GT?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  venueNameInternational_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueNameInternational_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueNameInternational_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueNameInternational_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  venueNameInternational_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  venueNameInternational_LONGEST_LENGTH_GTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  venueNameInternational_SHORTEST_LENGTH_GTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  venueNameInternational_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueNameInternational_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueNameInternational_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueNameInternational_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  venueNameInternational_AVERAGE_LENGTH_LT?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  venueNameInternational_LONGEST_LENGTH_LT?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  venueNameInternational_SHORTEST_LENGTH_LT?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  venueNameInternational_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueNameInternational_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueNameInternational_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  venueNameInternational_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  venueNameInternational_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  venueNameInternational_LONGEST_LENGTH_LTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  venueNameInternational_SHORTEST_LENGTH_LTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  graphicsSystemId_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  graphicsSystemId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  graphicsSystemId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  graphicsSystemId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  graphicsSystemId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  graphicsSystemId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  graphicsSystemId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  graphicsSystemId_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  graphicsSystemId_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  graphicsSystemId_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  graphicsSystemId_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  graphicsSystemId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  graphicsSystemId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  graphicsSystemId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  graphicsSystemId_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  graphicsSystemId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  graphicsSystemId_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  graphicsSystemId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  graphicsSystemId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  graphicsSystemId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  graphicsSystemId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  graphicsSystemId_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  graphicsSystemId_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  graphicsSystemId_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  graphicsSystemId_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  graphicsSystemId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  graphicsSystemId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  graphicsSystemId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  graphicsSystemId_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  graphicsSystemId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  graphicsSystemId_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  graphicsSystemId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  graphicsSystemId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  graphicsSystemId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  graphicsSystemId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  matchId_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  matchId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  matchId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  matchId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  matchId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  matchId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  matchId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  matchId_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  matchId_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  matchId_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  matchId_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  matchId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  matchId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  matchId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  matchId_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  matchId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  matchId_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  matchId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  matchId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  matchId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  matchId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  matchId_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  matchId_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  matchId_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  matchId_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  matchId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  matchId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  matchId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  matchId_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  matchId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  matchId_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  matchId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  matchId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  matchId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  matchId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type LutAppEnginesUpdateConnectionInput = {
  node?: InputMaybe<EnginesUpdateInput>;
};

export type LutAppEnginesUpdateFieldInput = {
  where?: InputMaybe<LutAppEnginesConnectionWhere>;
  connect?: InputMaybe<Array<LutAppEnginesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<LutAppEnginesDisconnectFieldInput>>;
  create?: InputMaybe<Array<LutAppEnginesCreateFieldInput>>;
  update?: InputMaybe<LutAppEnginesUpdateConnectionInput>;
  delete?: InputMaybe<Array<LutAppEnginesDeleteFieldInput>>;
};

export type LutAppOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more LutAppSort objects to sort LutApps by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<LutAppSort>>;
};

export type LutAppRelationInput = {
  Engines?: InputMaybe<Array<LutAppEnginesCreateFieldInput>>;
};

/** Fields to sort LutApps by. The order in which sorts are applied is not guaranteed when specifying many fields in one LutAppSort object. */
export type LutAppSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  genericName?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  fileUrl?: InputMaybe<SortDirection>;
  fileName?: InputMaybe<SortDirection>;
  active?: InputMaybe<SortDirection>;
  isProcessed?: InputMaybe<SortDirection>;
};

export type LutAppUpdateInput = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  genericName?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  fileUrl?: InputMaybe<Scalars["String"]["input"]>;
  fileName?: InputMaybe<Scalars["String"]["input"]>;
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  isProcessed?: InputMaybe<Scalars["Boolean"]["input"]>;
  Engines?: InputMaybe<Array<LutAppEnginesUpdateFieldInput>>;
};

export type LutAppWhere = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["String"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  genericName?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  genericName_NOT?: InputMaybe<Scalars["String"]["input"]>;
  genericName_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  genericName_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  genericName_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  genericName_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  genericName_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  genericName_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  genericName_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  genericName_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT?: InputMaybe<Scalars["String"]["input"]>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  description_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  description_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  description_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  fileUrl?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  fileUrl_NOT?: InputMaybe<Scalars["String"]["input"]>;
  fileUrl_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  fileUrl_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fileUrl_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  fileUrl_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  fileUrl_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  fileUrl_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  fileUrl_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  fileUrl_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  fileName?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  fileName_NOT?: InputMaybe<Scalars["String"]["input"]>;
  fileName_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  fileName_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fileName_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  fileName_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  fileName_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  fileName_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  fileName_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  fileName_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  active_NOT?: InputMaybe<Scalars["Boolean"]["input"]>;
  isProcessed?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  isProcessed_NOT?: InputMaybe<Scalars["Boolean"]["input"]>;
  OR?: InputMaybe<Array<LutAppWhere>>;
  AND?: InputMaybe<Array<LutAppWhere>>;
  NOT?: InputMaybe<LutAppWhere>;
  /** @deprecated Use `Engines_SOME` instead. */
  Engines?: InputMaybe<EnginesWhere>;
  /** @deprecated Use `Engines_NONE` instead. */
  Engines_NOT?: InputMaybe<EnginesWhere>;
  /** Return LutApps where all of the related Engines match this filter */
  Engines_ALL?: InputMaybe<EnginesWhere>;
  /** Return LutApps where none of the related Engines match this filter */
  Engines_NONE?: InputMaybe<EnginesWhere>;
  /** Return LutApps where one of the related Engines match this filter */
  Engines_SINGLE?: InputMaybe<EnginesWhere>;
  /** Return LutApps where some of the related Engines match this filter */
  Engines_SOME?: InputMaybe<EnginesWhere>;
  /** @deprecated Use `EnginesConnection_SOME` instead. */
  EnginesConnection?: InputMaybe<LutAppEnginesConnectionWhere>;
  /** @deprecated Use `EnginesConnection_NONE` instead. */
  EnginesConnection_NOT?: InputMaybe<LutAppEnginesConnectionWhere>;
  /** Return LutApps where all of the related LutAppEnginesConnections match this filter */
  EnginesConnection_ALL?: InputMaybe<LutAppEnginesConnectionWhere>;
  /** Return LutApps where none of the related LutAppEnginesConnections match this filter */
  EnginesConnection_NONE?: InputMaybe<LutAppEnginesConnectionWhere>;
  /** Return LutApps where one of the related LutAppEnginesConnections match this filter */
  EnginesConnection_SINGLE?: InputMaybe<LutAppEnginesConnectionWhere>;
  /** Return LutApps where some of the related LutAppEnginesConnections match this filter */
  EnginesConnection_SOME?: InputMaybe<LutAppEnginesConnectionWhere>;
  EnginesAggregate?: InputMaybe<LutAppEnginesAggregateInput>;
};

export type SessionCreateInput = {
  id: Scalars["String"]["input"];
  expires?: InputMaybe<Scalars["String"]["input"]>;
  sessionToken?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["String"]["input"]>;
};

export type SessionOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more SessionSort objects to sort Sessions by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<SessionSort>>;
};

/** Fields to sort Sessions by. The order in which sorts are applied is not guaranteed when specifying many fields in one SessionSort object. */
export type SessionSort = {
  id?: InputMaybe<SortDirection>;
  expires?: InputMaybe<SortDirection>;
  sessionToken?: InputMaybe<SortDirection>;
  userId?: InputMaybe<SortDirection>;
};

export type SessionUpdateInput = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  expires?: InputMaybe<Scalars["String"]["input"]>;
  sessionToken?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["String"]["input"]>;
};

export type SessionWhere = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["String"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  expires?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  expires_NOT?: InputMaybe<Scalars["String"]["input"]>;
  expires_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  expires_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  expires_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  expires_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  expires_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  expires_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  expires_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  expires_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  sessionToken?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  sessionToken_NOT?: InputMaybe<Scalars["String"]["input"]>;
  sessionToken_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  sessionToken_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  sessionToken_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  sessionToken_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  sessionToken_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  sessionToken_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  sessionToken_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  sessionToken_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  userId_NOT?: InputMaybe<Scalars["String"]["input"]>;
  userId_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  userId_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  userId_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  userId_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  userId_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  userId_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  userId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  userId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<SessionWhere>>;
  AND?: InputMaybe<Array<SessionWhere>>;
  NOT?: InputMaybe<SessionWhere>;
};

export type StateConnectInput = {
  country?: InputMaybe<Array<StateCountryConnectFieldInput>>;
};

export type StateConnectWhere = {
  node: StateWhere;
};

export type StateCountryAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<StateCountryAggregateInput>>;
  OR?: InputMaybe<Array<StateCountryAggregateInput>>;
  NOT?: InputMaybe<StateCountryAggregateInput>;
  node?: InputMaybe<StateCountryNodeAggregationWhereInput>;
};

export type StateCountryConnectFieldInput = {
  where?: InputMaybe<CountryConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<CountryConnectInput>>;
};

export type StateCountryConnectionSort = {
  node?: InputMaybe<CountrySort>;
};

export type StateCountryConnectionWhere = {
  AND?: InputMaybe<Array<StateCountryConnectionWhere>>;
  OR?: InputMaybe<Array<StateCountryConnectionWhere>>;
  NOT?: InputMaybe<StateCountryConnectionWhere>;
  node?: InputMaybe<CountryWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<CountryWhere>;
};

export type StateCountryCreateFieldInput = {
  node: CountryCreateInput;
};

export type StateCountryDeleteFieldInput = {
  where?: InputMaybe<StateCountryConnectionWhere>;
  delete?: InputMaybe<CountryDeleteInput>;
};

export type StateCountryDisconnectFieldInput = {
  where?: InputMaybe<StateCountryConnectionWhere>;
  disconnect?: InputMaybe<CountryDisconnectInput>;
};

export type StateCountryFieldInput = {
  connect?: InputMaybe<Array<StateCountryConnectFieldInput>>;
  create?: InputMaybe<Array<StateCountryCreateFieldInput>>;
};

export type StateCountryNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<StateCountryNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<StateCountryNodeAggregationWhereInput>>;
  NOT?: InputMaybe<StateCountryNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  phoneCode_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneCode_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneCode_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneCode_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  phoneCode_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  phoneCode_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  phoneCode_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  phoneCode_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneCode_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneCode_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneCode_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  phoneCode_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  phoneCode_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  phoneCode_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  phoneCode_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneCode_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneCode_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneCode_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  phoneCode_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  phoneCode_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  phoneCode_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  phoneCode_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneCode_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneCode_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneCode_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  phoneCode_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  phoneCode_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  phoneCode_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  phoneCode_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneCode_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneCode_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  phoneCode_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  phoneCode_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  phoneCode_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  phoneCode_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  shortName_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  shortName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  shortName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  shortName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  shortName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  shortName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  shortName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  shortName_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  shortName_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  shortName_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  shortName_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  shortName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  shortName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  shortName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  shortName_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  shortName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  shortName_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  shortName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  shortName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  shortName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  shortName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  shortName_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  shortName_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  shortName_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  shortName_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  shortName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  shortName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  shortName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  shortName_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  shortName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  shortName_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  shortName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  shortName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  shortName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  shortName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  emojiU_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emojiU_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emojiU_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emojiU_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  emojiU_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  emojiU_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  emojiU_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  emojiU_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emojiU_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emojiU_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emojiU_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  emojiU_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  emojiU_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  emojiU_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  emojiU_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emojiU_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emojiU_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emojiU_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  emojiU_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  emojiU_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  emojiU_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  emojiU_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emojiU_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emojiU_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emojiU_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  emojiU_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  emojiU_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  emojiU_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  emojiU_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emojiU_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emojiU_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emojiU_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  emojiU_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  emojiU_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  emojiU_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type StateCountryUpdateConnectionInput = {
  node?: InputMaybe<CountryUpdateInput>;
};

export type StateCountryUpdateFieldInput = {
  where?: InputMaybe<StateCountryConnectionWhere>;
  connect?: InputMaybe<Array<StateCountryConnectFieldInput>>;
  disconnect?: InputMaybe<Array<StateCountryDisconnectFieldInput>>;
  create?: InputMaybe<Array<StateCountryCreateFieldInput>>;
  update?: InputMaybe<StateCountryUpdateConnectionInput>;
  delete?: InputMaybe<Array<StateCountryDeleteFieldInput>>;
};

export type StateCreateInput = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name: Scalars["String"]["input"];
  country?: InputMaybe<StateCountryFieldInput>;
};

export type StateDeleteInput = {
  country?: InputMaybe<Array<StateCountryDeleteFieldInput>>;
};

export type StateDisconnectInput = {
  country?: InputMaybe<Array<StateCountryDisconnectFieldInput>>;
};

export type StateOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more StateSort objects to sort States by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<StateSort>>;
};

export type StateRelationInput = {
  country?: InputMaybe<Array<StateCountryCreateFieldInput>>;
};

/** Fields to sort States by. The order in which sorts are applied is not guaranteed when specifying many fields in one StateSort object. */
export type StateSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type StateUpdateInput = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  id_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  id_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  country?: InputMaybe<Array<StateCountryUpdateFieldInput>>;
};

export type StateWhere = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  id_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<StateWhere>>;
  AND?: InputMaybe<Array<StateWhere>>;
  NOT?: InputMaybe<StateWhere>;
  /** @deprecated Use `country_SOME` instead. */
  country?: InputMaybe<CountryWhere>;
  /** @deprecated Use `country_NONE` instead. */
  country_NOT?: InputMaybe<CountryWhere>;
  /** Return States where all of the related Countries match this filter */
  country_ALL?: InputMaybe<CountryWhere>;
  /** Return States where none of the related Countries match this filter */
  country_NONE?: InputMaybe<CountryWhere>;
  /** Return States where one of the related Countries match this filter */
  country_SINGLE?: InputMaybe<CountryWhere>;
  /** Return States where some of the related Countries match this filter */
  country_SOME?: InputMaybe<CountryWhere>;
  /** @deprecated Use `countryConnection_SOME` instead. */
  countryConnection?: InputMaybe<StateCountryConnectionWhere>;
  /** @deprecated Use `countryConnection_NONE` instead. */
  countryConnection_NOT?: InputMaybe<StateCountryConnectionWhere>;
  /** Return States where all of the related StateCountryConnections match this filter */
  countryConnection_ALL?: InputMaybe<StateCountryConnectionWhere>;
  /** Return States where none of the related StateCountryConnections match this filter */
  countryConnection_NONE?: InputMaybe<StateCountryConnectionWhere>;
  /** Return States where one of the related StateCountryConnections match this filter */
  countryConnection_SINGLE?: InputMaybe<StateCountryConnectionWhere>;
  /** Return States where some of the related StateCountryConnections match this filter */
  countryConnection_SOME?: InputMaybe<StateCountryConnectionWhere>;
  countryAggregate?: InputMaybe<StateCountryAggregateInput>;
};

export type UserConnectOrCreateWhere = {
  node: UserUniqueWhere;
};

export type UserConnectWhere = {
  node: UserWhere;
};

export type UserCreateInput = {
  id: Scalars["String"]["input"];
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  emailVerified?: InputMaybe<Scalars["String"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<Scalars["String"]["input"]>;
  phoneCode?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  address?: InputMaybe<Scalars["String"]["input"]>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  state?: InputMaybe<Scalars["String"]["input"]>;
  stateId?: InputMaybe<Scalars["Int"]["input"]>;
  country?: InputMaybe<Scalars["String"]["input"]>;
  countryId?: InputMaybe<Scalars["Int"]["input"]>;
  organization?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserOnCreateInput = {
  id: Scalars["String"]["input"];
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  emailVerified?: InputMaybe<Scalars["String"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<Scalars["String"]["input"]>;
  phoneCode?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  address?: InputMaybe<Scalars["String"]["input"]>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  state?: InputMaybe<Scalars["String"]["input"]>;
  stateId?: InputMaybe<Scalars["Int"]["input"]>;
  country?: InputMaybe<Scalars["String"]["input"]>;
  countryId?: InputMaybe<Scalars["Int"]["input"]>;
  organization?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  id?: InputMaybe<SortDirection>;
  firstName?: InputMaybe<SortDirection>;
  lastName?: InputMaybe<SortDirection>;
  email?: InputMaybe<SortDirection>;
  emailVerified?: InputMaybe<SortDirection>;
  image?: InputMaybe<SortDirection>;
  role?: InputMaybe<SortDirection>;
  phoneCode?: InputMaybe<SortDirection>;
  phoneNumber?: InputMaybe<SortDirection>;
  address?: InputMaybe<SortDirection>;
  city?: InputMaybe<SortDirection>;
  state?: InputMaybe<SortDirection>;
  stateId?: InputMaybe<SortDirection>;
  country?: InputMaybe<SortDirection>;
  countryId?: InputMaybe<SortDirection>;
  organization?: InputMaybe<SortDirection>;
};

export type UserUniqueWhere = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserUpdateInput = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  emailVerified?: InputMaybe<Scalars["String"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<Scalars["String"]["input"]>;
  phoneCode?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  address?: InputMaybe<Scalars["String"]["input"]>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  state?: InputMaybe<Scalars["String"]["input"]>;
  stateId?: InputMaybe<Scalars["Int"]["input"]>;
  stateId_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  stateId_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  country?: InputMaybe<Scalars["String"]["input"]>;
  countryId?: InputMaybe<Scalars["Int"]["input"]>;
  countryId_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  countryId_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  organization?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserWhere = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["String"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  firstName_NOT?: InputMaybe<Scalars["String"]["input"]>;
  firstName_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  firstName_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  firstName_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  firstName_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  firstName_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  firstName_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  firstName_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  firstName_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  lastName_NOT?: InputMaybe<Scalars["String"]["input"]>;
  lastName_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  lastName_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  lastName_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  lastName_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  lastName_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  lastName_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  lastName_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  lastName_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT?: InputMaybe<Scalars["String"]["input"]>;
  email_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  email_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  email_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  email_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  emailVerified?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  emailVerified_NOT?: InputMaybe<Scalars["String"]["input"]>;
  emailVerified_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  emailVerified_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  emailVerified_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  emailVerified_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  emailVerified_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  emailVerified_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  emailVerified_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  emailVerified_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  image_NOT?: InputMaybe<Scalars["String"]["input"]>;
  image_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  image_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  image_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  image_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  image_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  image_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  image_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  image_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  role_NOT?: InputMaybe<Scalars["String"]["input"]>;
  role_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  role_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  role_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  role_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  role_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  role_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  role_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  role_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  phoneCode?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  phoneCode_NOT?: InputMaybe<Scalars["String"]["input"]>;
  phoneCode_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  phoneCode_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  phoneCode_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  phoneCode_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  phoneCode_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  phoneCode_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  phoneCode_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  phoneCode_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  phoneNumber_NOT?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  phoneNumber_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  phoneNumber_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  phoneNumber_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  phoneNumber_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  phoneNumber_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  address?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  address_NOT?: InputMaybe<Scalars["String"]["input"]>;
  address_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  address_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  address_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  address_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  address_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  address_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  address_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  address_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  city_NOT?: InputMaybe<Scalars["String"]["input"]>;
  city_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  city_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  city_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  city_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  city_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  city_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  city_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  city_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  state?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  state_NOT?: InputMaybe<Scalars["String"]["input"]>;
  state_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  state_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  state_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  state_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  state_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  state_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  state_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  state_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  stateId?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  stateId_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  stateId_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  stateId_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  stateId_LT?: InputMaybe<Scalars["Int"]["input"]>;
  stateId_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  stateId_GT?: InputMaybe<Scalars["Int"]["input"]>;
  stateId_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  country?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  country_NOT?: InputMaybe<Scalars["String"]["input"]>;
  country_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  country_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  country_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  country_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  country_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  country_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  country_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  country_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  countryId?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  countryId_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  countryId_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  countryId_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  countryId_LT?: InputMaybe<Scalars["Int"]["input"]>;
  countryId_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  countryId_GT?: InputMaybe<Scalars["Int"]["input"]>;
  countryId_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  organization?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  organization_NOT?: InputMaybe<Scalars["String"]["input"]>;
  organization_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  organization_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  organization_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  organization_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  organization_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  organization_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  organization_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  organization_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<UserWhere>>;
  AND?: InputMaybe<Array<UserWhere>>;
  NOT?: InputMaybe<UserWhere>;
};

export type VerificationTokenCreateInput = {
  identifier?: InputMaybe<Scalars["String"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  expires?: InputMaybe<Scalars["String"]["input"]>;
};

export type VerificationTokenOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more VerificationTokenSort objects to sort VerificationTokens by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<VerificationTokenSort>>;
};

/** Fields to sort VerificationTokens by. The order in which sorts are applied is not guaranteed when specifying many fields in one VerificationTokenSort object. */
export type VerificationTokenSort = {
  identifier?: InputMaybe<SortDirection>;
  token?: InputMaybe<SortDirection>;
  expires?: InputMaybe<SortDirection>;
};

export type VerificationTokenUpdateInput = {
  identifier?: InputMaybe<Scalars["String"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  expires?: InputMaybe<Scalars["String"]["input"]>;
};

export type VerificationTokenWhere = {
  identifier?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  identifier_NOT?: InputMaybe<Scalars["String"]["input"]>;
  identifier_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  identifier_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  identifier_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  identifier_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  identifier_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  identifier_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  identifier_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  identifier_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  token_NOT?: InputMaybe<Scalars["String"]["input"]>;
  token_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  token_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  token_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  token_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  token_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  token_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  token_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  token_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  expires?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  expires_NOT?: InputMaybe<Scalars["String"]["input"]>;
  expires_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  expires_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  expires_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  expires_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  expires_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  expires_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  expires_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  expires_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<VerificationTokenWhere>>;
  AND?: InputMaybe<Array<VerificationTokenWhere>>;
  NOT?: InputMaybe<VerificationTokenWhere>;
};

export interface CountryAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  name?: boolean;
  phoneCode?: boolean;
  shortName?: boolean;
  emojiU?: boolean;
}

export declare class CountryModel {
  public find(args?: {
    where?: CountryWhere;

    options?: CountryOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Country[]>;
  public create(args: {
    input: CountryCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateCountriesMutationResponse>;
  public update(args: {
    where?: CountryWhere;
    update?: CountryUpdateInput;
    connect?: CountryConnectInput;
    disconnect?: CountryDisconnectInput;
    create?: CountryCreateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateCountriesMutationResponse>;
  public delete(args: {
    where?: CountryWhere;
    delete?: CountryDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: CountryWhere;

    aggregate: CountryAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<CountryAggregateSelection>;
}

export interface StateAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  name?: boolean;
}

export declare class StateModel {
  public find(args?: {
    where?: StateWhere;

    options?: StateOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<State[]>;
  public create(args: {
    input: StateCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateStatesMutationResponse>;
  public update(args: {
    where?: StateWhere;
    update?: StateUpdateInput;
    connect?: StateConnectInput;
    disconnect?: StateDisconnectInput;
    create?: StateCreateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateStatesMutationResponse>;
  public delete(args: {
    where?: StateWhere;
    delete?: StateDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: StateWhere;

    aggregate: StateAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<StateAggregateSelection>;
}

export interface UserAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  firstName?: boolean;
  lastName?: boolean;
  email?: boolean;
  emailVerified?: boolean;
  image?: boolean;
  role?: boolean;
  phoneCode?: boolean;
  phoneNumber?: boolean;
  address?: boolean;
  city?: boolean;
  state?: boolean;
  stateId?: boolean;
  country?: boolean;
  countryId?: boolean;
  organization?: boolean;
}

export declare class UserModel {
  public find(args?: {
    where?: UserWhere;

    options?: UserOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<User[]>;
  public create(args: {
    input: UserCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateUsersMutationResponse>;
  public update(args: {
    where?: UserWhere;
    update?: UserUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateUsersMutationResponse>;
  public delete(args: {
    where?: UserWhere;

    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: UserWhere;

    aggregate: UserAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<UserAggregateSelection>;
}

export interface AccountAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  userId?: boolean;
  type?: boolean;
  provider?: boolean;
  providerAccountId?: boolean;
  refresh_token?: boolean;
  access_token?: boolean;
  expires_at?: boolean;
  token_type?: boolean;
  scope?: boolean;
  id_token?: boolean;
  session_state?: boolean;
}

export declare class AccountModel {
  public find(args?: {
    where?: AccountWhere;

    options?: AccountOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Account[]>;
  public create(args: {
    input: AccountCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateAccountsMutationResponse>;
  public update(args: {
    where?: AccountWhere;
    update?: AccountUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateAccountsMutationResponse>;
  public delete(args: {
    where?: AccountWhere;

    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: AccountWhere;

    aggregate: AccountAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<AccountAggregateSelection>;
}

export interface SessionAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  expires?: boolean;
  sessionToken?: boolean;
  userId?: boolean;
}

export declare class SessionModel {
  public find(args?: {
    where?: SessionWhere;

    options?: SessionOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Session[]>;
  public create(args: {
    input: SessionCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateSessionsMutationResponse>;
  public update(args: {
    where?: SessionWhere;
    update?: SessionUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateSessionsMutationResponse>;
  public delete(args: {
    where?: SessionWhere;

    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: SessionWhere;

    aggregate: SessionAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<SessionAggregateSelection>;
}

export interface VerificationTokenAggregateSelectionInput {
  count?: boolean;
  identifier?: boolean;
  token?: boolean;
  expires?: boolean;
}

export declare class VerificationTokenModel {
  public find(args?: {
    where?: VerificationTokenWhere;

    options?: VerificationTokenOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<VerificationToken[]>;
  public create(args: {
    input: VerificationTokenCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateVerificationTokensMutationResponse>;
  public update(args: {
    where?: VerificationTokenWhere;
    update?: VerificationTokenUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateVerificationTokensMutationResponse>;
  public delete(args: {
    where?: VerificationTokenWhere;

    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: VerificationTokenWhere;

    aggregate: VerificationTokenAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<VerificationTokenAggregateSelection>;
}

export interface EnginesAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  name?: boolean;
  description?: boolean;
  location?: boolean;
  config?: boolean;
  cameras?: boolean;
  status?: boolean;
  hostname?: boolean;
  nextEvent?: boolean;
  venueId?: boolean;
  externalId?: boolean;
  venueName?: boolean;
  venueNameInternational?: boolean;
  graphicsSystemId?: boolean;
  matchId?: boolean;
  createdAt?: boolean;
  updatedAt?: boolean;
}

export declare class EnginesModel {
  public find(args?: {
    where?: EnginesWhere;

    options?: EnginesOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Engines[]>;
  public create(args: {
    input: EnginesCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateEnginesMutationResponse>;
  public update(args: {
    where?: EnginesWhere;
    update?: EnginesUpdateInput;
    connect?: EnginesConnectInput;
    disconnect?: EnginesDisconnectInput;
    create?: EnginesCreateInput;
    connectOrCreate?: EnginesConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateEnginesMutationResponse>;
  public delete(args: {
    where?: EnginesWhere;
    delete?: EnginesDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: EnginesWhere;

    aggregate: EnginesAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<EnginesAggregateSelection>;
}

export interface LutAppAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  name?: boolean;
  genericName?: boolean;
  description?: boolean;
  fileUrl?: boolean;
  fileName?: boolean;
}

export declare class LutAppModel {
  public find(args?: {
    where?: LutAppWhere;

    options?: LutAppOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<LutApp[]>;
  public create(args: {
    input: LutAppCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateLutAppsMutationResponse>;
  public update(args: {
    where?: LutAppWhere;
    update?: LutAppUpdateInput;
    connect?: LutAppConnectInput;
    disconnect?: LutAppDisconnectInput;
    create?: LutAppCreateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateLutAppsMutationResponse>;
  public delete(args: {
    where?: LutAppWhere;
    delete?: LutAppDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: LutAppWhere;

    aggregate: LutAppAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<LutAppAggregateSelection>;
}

export interface EnvironmentConfigsAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  name?: boolean;
  venue?: boolean;
  configName?: boolean;
  dateTime?: boolean;
  original?: boolean;
  edited?: boolean;
  version?: boolean;
}

export declare class EnvironmentConfigsModel {
  public find(args?: {
    where?: EnvironmentConfigsWhere;

    options?: EnvironmentConfigsOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<EnvironmentConfigs[]>;
  public create(args: {
    input: EnvironmentConfigsCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateEnvironmentConfigsMutationResponse>;
  public update(args: {
    where?: EnvironmentConfigsWhere;
    update?: EnvironmentConfigsUpdateInput;
    connect?: EnvironmentConfigsConnectInput;
    disconnect?: EnvironmentConfigsDisconnectInput;
    create?: EnvironmentConfigsCreateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateEnvironmentConfigsMutationResponse>;
  public delete(args: {
    where?: EnvironmentConfigsWhere;
    delete?: EnvironmentConfigsDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: EnvironmentConfigsWhere;

    aggregate: EnvironmentConfigsAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<EnvironmentConfigsAggregateSelection>;
}

export interface ModelMap {
  Country: CountryModel;
  State: StateModel;
  User: UserModel;
  Account: AccountModel;
  Session: SessionModel;
  VerificationToken: VerificationTokenModel;
  Engines: EnginesModel;
  LutApp: LutAppModel;
  EnvironmentConfigs: EnvironmentConfigsModel;
}
