/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
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
  id?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  addColor?: Maybe<Color>;
  removeColor?: Maybe<Scalars["Boolean"]["output"]>;
  updateColor?: Maybe<Color>;
};

export type MutationAddColorArgs = {
  name: Scalars["String"]["input"];
  value: Scalars["String"]["input"];
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
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Get_All_ColorsQueryVariables = Exact<{ [key: string]: never }>;

export type Get_All_ColorsQuery = {
  __typename?: "Query";
  colors?: Array<{
    __typename?: "Color";
    id?: number | null;
    name?: string | null;
    value?: string | null;
  } | null> | null;
};

export type Get_ColorQueryVariables = Exact<{
  id: Scalars["Int"]["input"];
}>;

export type Get_ColorQuery = {
  __typename?: "Query";
  color?: {
    __typename?: "Color";
    id?: number | null;
    name?: string | null;
    value?: string | null;
  } | null;
};

export const Get_All_ColorsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GET_ALL_COLORS" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "colors" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "value" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<Get_All_ColorsQuery, Get_All_ColorsQueryVariables>;
export const Get_ColorDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GET_COLOR" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "color" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "value" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<Get_ColorQuery, Get_ColorQueryVariables>;
