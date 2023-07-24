import * as Types from "../../gql/types";

import { gql } from "@apollo/client";
import { BasicColorInfoWithIdFragmentDoc } from "../../gql/Color.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type AddColorMutationVariables = Types.Exact<{
  name: Types.Scalars["String"]["input"];
  value: Types.Scalars["String"]["input"];
}>;

export type AddColorMutation = {
  __typename?: "Mutation";
  addColor?: {
    __typename?: "Color";
    id: number;
    name: string;
    value: string;
  } | null;
};

export const AddColorDocument = gql`
  mutation ADD_COLOR($name: String!, $value: String!) {
    addColor(name: $name, value: $value) {
      ...BasicColorInfoWithId
    }
  }
  ${BasicColorInfoWithIdFragmentDoc}
`;
export type AddColorMutationFn = Apollo.MutationFunction<
  AddColorMutation,
  AddColorMutationVariables
>;

/**
 * __useAddColorMutation__
 *
 * To run a mutation, you first call `useAddColorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddColorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addColorMutation, { data, loading, error }] = useAddColorMutation({
 *   variables: {
 *      name: // value for 'name'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useAddColorMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddColorMutation,
    AddColorMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddColorMutation, AddColorMutationVariables>(
    AddColorDocument,
    options,
  );
}
export type AddColorMutationHookResult = ReturnType<typeof useAddColorMutation>;
export type AddColorMutationResult = Apollo.MutationResult<AddColorMutation>;
export type AddColorMutationOptions = Apollo.BaseMutationOptions<
  AddColorMutation,
  AddColorMutationVariables
>;
