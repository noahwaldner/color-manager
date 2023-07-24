import { gql } from "@apollo/client";
export type BasicColorInfoFragment = {
  __typename?: "Color";
  name: string;
  value: string;
};

export type BasicColorInfoWithIdFragment = {
  __typename?: "Color";
  id: number;
  name: string;
  value: string;
};

export const BasicColorInfoFragmentDoc = gql`
  fragment BasicColorInfo on Color {
    name
    value
  }
`;
export const BasicColorInfoWithIdFragmentDoc = gql`
  fragment BasicColorInfoWithId on Color {
    id
    ...BasicColorInfo
  }
  ${BasicColorInfoFragmentDoc}
`;
