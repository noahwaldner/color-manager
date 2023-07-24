import * as Types from "../../gql/types";

import { gql } from "@apollo/client";
import { BasicColorInfoWithIdFragmentDoc } from "../../gql/Color.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GetAllColorsQueryVariables = Types.Exact<{
  offset?: Types.InputMaybe<Types.Scalars["Int"]["input"]>;
  limit?: Types.InputMaybe<Types.Scalars["Int"]["input"]>;
}>;

export type GetAllColorsQuery = {
  __typename?: "Query";
  colors?: Array<{
    __typename?: "Color";
    id: number;
    name: string;
    value: string;
  } | null> | null;
};

export const GetAllColorsDocument = gql`
  query GET_ALL_COLORS($offset: Int, $limit: Int) {
    colors(offset: $offset, limit: $limit) {
      ...BasicColorInfoWithId
    }
  }
  ${BasicColorInfoWithIdFragmentDoc}
`;

/**
 * __useGetAllColorsQuery__
 *
 * To run a query within a React component, call `useGetAllColorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllColorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllColorsQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetAllColorsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllColorsQuery,
    GetAllColorsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllColorsQuery, GetAllColorsQueryVariables>(
    GetAllColorsDocument,
    options,
  );
}
export function useGetAllColorsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllColorsQuery,
    GetAllColorsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllColorsQuery, GetAllColorsQueryVariables>(
    GetAllColorsDocument,
    options,
  );
}
export type GetAllColorsQueryHookResult = ReturnType<
  typeof useGetAllColorsQuery
>;
export type GetAllColorsLazyQueryHookResult = ReturnType<
  typeof useGetAllColorsLazyQuery
>;
export type GetAllColorsQueryResult = Apollo.QueryResult<
  GetAllColorsQuery,
  GetAllColorsQueryVariables
>;
