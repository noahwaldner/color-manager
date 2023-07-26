import * as Types from '../../gql/types';

import { gql } from '@apollo/client';
import { BasicColorInfoWithIdFragmentDoc } from '../../gql/Color.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetColorQueryVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;


export type GetColorQuery = { __typename?: 'Query', color?: { __typename?: 'Color', id: number, name: string, value: string } | null };

export type EditColorMutationVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
  name: Types.Scalars['String']['input'];
  value: Types.Scalars['String']['input'];
}>;


export type EditColorMutation = { __typename?: 'Mutation', updateColor?: { __typename?: 'Color', id: number, name: string, value: string } | null };

export type RemoveColorMutationVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;


export type RemoveColorMutation = { __typename?: 'Mutation', removeColor?: { __typename?: 'Success', success?: boolean | null } | null };


export const GetColorDocument = gql`
    query GET_COLOR($id: Int!) {
  color(id: $id) {
    ...BasicColorInfoWithId
  }
}
    ${BasicColorInfoWithIdFragmentDoc}`;

/**
 * __useGetColorQuery__
 *
 * To run a query within a React component, call `useGetColorQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetColorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetColorQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetColorQuery(baseOptions: Apollo.QueryHookOptions<GetColorQuery, GetColorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetColorQuery, GetColorQueryVariables>(GetColorDocument, options);
      }
export function useGetColorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetColorQuery, GetColorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetColorQuery, GetColorQueryVariables>(GetColorDocument, options);
        }
export type GetColorQueryHookResult = ReturnType<typeof useGetColorQuery>;
export type GetColorLazyQueryHookResult = ReturnType<typeof useGetColorLazyQuery>;
export type GetColorQueryResult = Apollo.QueryResult<GetColorQuery, GetColorQueryVariables>;
export const EditColorDocument = gql`
    mutation EDIT_COLOR($id: Int!, $name: String!, $value: String!) {
  updateColor(id: $id, name: $name, value: $value) {
    ...BasicColorInfoWithId
  }
}
    ${BasicColorInfoWithIdFragmentDoc}`;
export type EditColorMutationFn = Apollo.MutationFunction<EditColorMutation, EditColorMutationVariables>;

/**
 * __useEditColorMutation__
 *
 * To run a mutation, you first call `useEditColorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditColorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editColorMutation, { data, loading, error }] = useEditColorMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useEditColorMutation(baseOptions?: Apollo.MutationHookOptions<EditColorMutation, EditColorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditColorMutation, EditColorMutationVariables>(EditColorDocument, options);
      }
export type EditColorMutationHookResult = ReturnType<typeof useEditColorMutation>;
export type EditColorMutationResult = Apollo.MutationResult<EditColorMutation>;
export type EditColorMutationOptions = Apollo.BaseMutationOptions<EditColorMutation, EditColorMutationVariables>;
export const RemoveColorDocument = gql`
    mutation REMOVE_COLOR($id: Int!) {
  removeColor(id: $id) {
    success
  }
}
    `;
export type RemoveColorMutationFn = Apollo.MutationFunction<RemoveColorMutation, RemoveColorMutationVariables>;

/**
 * __useRemoveColorMutation__
 *
 * To run a mutation, you first call `useRemoveColorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveColorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeColorMutation, { data, loading, error }] = useRemoveColorMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveColorMutation(baseOptions?: Apollo.MutationHookOptions<RemoveColorMutation, RemoveColorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveColorMutation, RemoveColorMutationVariables>(RemoveColorDocument, options);
      }
export type RemoveColorMutationHookResult = ReturnType<typeof useRemoveColorMutation>;
export type RemoveColorMutationResult = Apollo.MutationResult<RemoveColorMutation>;
export type RemoveColorMutationOptions = Apollo.BaseMutationOptions<RemoveColorMutation, RemoveColorMutationVariables>;