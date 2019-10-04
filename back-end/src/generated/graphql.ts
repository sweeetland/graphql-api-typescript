import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};


export type Actor = {
   __typename?: 'Actor',
  id: Scalars['ID'],
  name: Scalars['String'],
  birthday?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  directors?: Maybe<Array<Maybe<Director>>>,
  movies?: Maybe<Array<Maybe<Movie>>>,
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Director = {
   __typename?: 'Director',
  id: Scalars['ID'],
  name: Scalars['String'],
  birthday?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  moviesDirected?: Maybe<Array<Maybe<Movie>>>,
};

export type Movie = {
   __typename?: 'Movie',
  id: Scalars['ID'],
  title: Scalars['String'],
  year?: Maybe<Scalars['String']>,
  rating?: Maybe<Scalars['Float']>,
  actors?: Maybe<Array<Maybe<Actor>>>,
  directors?: Maybe<Array<Maybe<Director>>>,
};

export type Mutation = {
   __typename?: 'Mutation',
  createUser?: Maybe<Session>,
};


export type MutationCreateUserArgs = {
  username?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>
};

export type Query = {
   __typename?: 'Query',
  movies?: Maybe<Array<Maybe<Movie>>>,
};

export type Session = {
   __typename?: 'Session',
  token: Scalars['String'],
  user: User,
};


export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  username: Scalars['String'],
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  Movie: ResolverTypeWrapper<Movie>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  Actor: ResolverTypeWrapper<Actor>,
  Director: ResolverTypeWrapper<Director>,
  Mutation: ResolverTypeWrapper<{}>,
  Session: ResolverTypeWrapper<Session>,
  User: ResolverTypeWrapper<User>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  CacheControlScope: CacheControlScope,
  Upload: ResolverTypeWrapper<Scalars['Upload']>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  Movie: Movie,
  ID: Scalars['ID'],
  String: Scalars['String'],
  Float: Scalars['Float'],
  Actor: Actor,
  Director: Director,
  Mutation: {},
  Session: Session,
  User: User,
  Boolean: Scalars['Boolean'],
  CacheControlScope: CacheControlScope,
  Upload: Scalars['Upload'],
  Int: Scalars['Int'],
};

export type CacheControlDirectiveResolver<Result, Parent, ContextType = any, Args = {   maxAge?: Maybe<Maybe<Scalars['Int']>>,
  scope?: Maybe<Maybe<CacheControlScope>> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ActorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Actor'] = ResolversParentTypes['Actor']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  birthday?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  directors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Director']>>>, ParentType, ContextType>,
  movies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Movie']>>>, ParentType, ContextType>,
};

export type DirectorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Director'] = ResolversParentTypes['Director']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  birthday?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  moviesDirected?: Resolver<Maybe<Array<Maybe<ResolversTypes['Movie']>>>, ParentType, ContextType>,
};

export type MovieResolvers<ContextType = any, ParentType extends ResolversParentTypes['Movie'] = ResolversParentTypes['Movie']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  year?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  actors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Actor']>>>, ParentType, ContextType>,
  directors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Director']>>>, ParentType, ContextType>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createUser?: Resolver<Maybe<ResolversTypes['Session']>, ParentType, ContextType, MutationCreateUserArgs>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  movies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Movie']>>>, ParentType, ContextType>,
};

export type SessionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Session'] = ResolversParentTypes['Session']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload'
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  Actor?: ActorResolvers<ContextType>,
  Director?: DirectorResolvers<ContextType>,
  Movie?: MovieResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Session?: SessionResolvers<ContextType>,
  Upload?: GraphQLScalarType,
  User?: UserResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>,
};


/**
* @deprecated
* Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
*/
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;