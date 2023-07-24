# Running the App

Run the App in dev mode:

```
yarn start
```

Build the App:

```
yarn build
```

# Technologies used

The App was bootstrapped with _create-react-app_ + typescript and uses the following following additional libraries:

- [wouter](https://github.com/molefrog/wouter) for routing
- [styled-components](https://styled-components.com/) for styling
- [apollo-client](https://www.apollographql.com/docs/react/) for GraphQL
- [cypress](https://www.cypress.io/) for testing
- [helmet](https://helmetjs.github.io/) for web headers
- [graphql-codegen](https://graphql-code-generator.com/) for generating types from GraphQL queries

# Structure

The Components are divided into two main folders: _components_ and _pages_.
Pages are the main routes of the App, while components are reusable pieces of UI.

The _pages_ folder contains the following pages:

- `Overview`: the main page of the App, showing the list of colors. Route `/`.
- `DetailView`: the page that shows the details of a color and allows for editing or deleting it. Route `/color:id`.
- `AddColor`: the page that allows for adding a new color. Route `/add`.

# GraphQL

All GraphQL queries and mutations are defined in a file next to the component that uses them. This allows for easy access to the queries and mutations that are used in a component.
For reusability and optimized type generation fields are maintained as GraphQL Fragments. These fragments are then used in the queries and mutations.

## Type generation

The command `yarn generate:types` triggers two different actions:

- The GraphQL schema is automatically downloaded from the server and saved to ensure that the types are always up to date.
- The types and hooks for all queries and mutations are generated. These can then be imported in components to ensure a completely type-safe usage of the GraphQL data in all components.

configuration for the type generation can be found in the `tools/codegen.ts` file.

# Styling

The App uses styled-components for styling. The styles are defined in the same file as the component that uses them. This allows for easy access to the styles that are used in a component.

## Theming

The App uses a theme that is defined in the `theme.ts` file. This theme is then used in the `GlobalStyle` component to define the global styles of the App. The GlobalStyle component is then used in the `App` component to ensure that the global styles are applied to the entire App.

A parameter `light` or `dark` can be passed to the `GlobalStyle` component to switch between light and dark mode.

**Currently only the light theme variant is implemented, but it would be easy to add the dark theme or even more variants and themes.**

## Colors

There is a script wich can be executed with the commend `yarn generate:colors`. This script will download the colors from the graphql endpoint and makes them abailable to be used in themes. This allows for easy access to the colors that are used in the App.

**This may not make too much sense in this context, but it would be very useful in a larger App, when connected to a brand-color library**

# Testing

The App uses cypress for testing. The tests are located next to the component that they test. This allows for easy access to the tests that are used in a component.

**Only a few tests are implemented, many more can be implemented**
