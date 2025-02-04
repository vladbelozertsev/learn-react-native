import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:3000/graphql',
  documents: ['**/*.ts?(x)'],
  ignoreNoDocuments: true,
  generates: {
    './src/_libs_/apollo/__gen__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
    './src/_libs_/types/api.d.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
  },
};

export default config;

/**
 * Useful links:
 * https://www.apollographql.com/tutorials/lift-off-part1/09-codegen - basic setup
 * https://www.apollographql.com/docs/react/development-testing/static-typing - basic setup
 **/
