import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        colors: {
          // Don't cache separate results based on
          // any of this field's arguments.
          keyArgs: false,

          // Concatenate the incoming list items with
          // the existing list items.
          merge(existing = [], incoming) {
            return [...existing, ...incoming];
            //write merge function that does not duplicate colors
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "https://color-api-nnxacpp5eq-uc.a.run.app",
  cache: cache,
  connectToDevTools: true,
});

export default client;
