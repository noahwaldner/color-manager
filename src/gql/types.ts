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
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Color = {
  __typename?: "Color";
  id: Scalars["Int"]["output"];
  name: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  addColor?: Maybe<Color>;
  removeColor?: Maybe<Success>;
  updateColor?: Maybe<Color>;
};

export type MutationAddColorArgs = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  value?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationRemoveColorArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationUpdateColorArgs = {
  id: Scalars["Int"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  value?: InputMaybe<Scalars["String"]["input"]>;
};

export type Query = {
  __typename?: "Query";
  color?: Maybe<Color>;
  colors?: Maybe<Array<Maybe<Color>>>;
};

export type QueryColorArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryColorsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Success = {
  __typename?: "Success";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};
