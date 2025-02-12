/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  mutation CreateCar($input: CreateCarInput!) {\n    createCar(input: $input) {\n      id\n      createdAt\n    }\n  }\n": types.CreateCarDocument,
    "\n  query GetCar($input: GetCarInput!) {\n    car(input: $input) {\n      brand\n      color\n      createdAt\n      id\n      model\n      price\n      updatedAt\n    }\n  }\n": types.GetCarDocument,
    "\n  query GetCars($input: GetCarsInput) {\n    cars(input: $input) {\n      id\n      brand\n    }\n  }\n": types.GetCarsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateCar($input: CreateCarInput!) {\n    createCar(input: $input) {\n      id\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  mutation CreateCar($input: CreateCarInput!) {\n    createCar(input: $input) {\n      id\n      createdAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCar($input: GetCarInput!) {\n    car(input: $input) {\n      brand\n      color\n      createdAt\n      id\n      model\n      price\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query GetCar($input: GetCarInput!) {\n    car(input: $input) {\n      brand\n      color\n      createdAt\n      id\n      model\n      price\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCars($input: GetCarsInput) {\n    cars(input: $input) {\n      id\n      brand\n    }\n  }\n"): (typeof documents)["\n  query GetCars($input: GetCarsInput) {\n    cars(input: $input) {\n      id\n      brand\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;