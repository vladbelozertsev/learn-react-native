import { CodegenConfig } from '@graphql-codegen/cli';

const RNUpload = `
type RNUpload =  {
  uri: string;
  name: string;
  type: string;
};`;

const config: CodegenConfig = {
  schema: 'http://localhost:3000/graphql',
  documents: ['**/*.ts?(x)'],
  config: {
    scalars: {
      Upload: 'RNUpload',
    },
  },
  ignoreNoDocuments: true,
  generates: {
    './src/libs/apollo/__gen__/': {
      preset: 'client',
      plugins: [{ add: { content: RNUpload } }],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
    './src/libs/types/api.d.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
  },
};

export default config;

/**
 * Useful links:
 * https://www.apollographql.com/tutorials/lift-off-part1/09-codegen - basic setup
 * https://www.apollographql.com/docs/react/development-testing/static-typing - basic setup
 * https://the-guild.dev/graphql/codegen/plugins/other/add
 * https://github.com/dotansimha/graphql-code-generator/discussions/4320
 **/
