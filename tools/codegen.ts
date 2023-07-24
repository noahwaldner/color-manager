import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://color-api-nnxacpp5eq-uc.a.run.app",
  documents: "src/**/*.graphql",
  generates: {
    "src/gql/graphql.schema.json": {
      plugins: ["introspection"],
    },
    "src/gql/types.ts": { plugins: ["typescript"] },
    "src/": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.tsx",
        baseTypesPath: "gql/types.ts",
      },
      plugins: ["typescript-operations", "typescript-react-apollo"],
      config: {
        namingConvention: {
          transformUnderscore: true,
        },
      },
    },
  },
};

export default config;
