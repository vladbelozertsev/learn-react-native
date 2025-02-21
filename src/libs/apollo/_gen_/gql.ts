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
type Documents = {
    "\n  mutation CreateCar($input: CarCreateInput!) {\n    createCar(input: $input) {\n      id\n      createdAt\n    }\n  }\n": typeof types.CreateCarDocument,
    "\n  query GetCar($where: CarWhereUniqueInput!) {\n    car(where: $where) {\n      brand\n      color\n      createdAt\n      id\n      model\n      price\n      updatedAt\n    }\n  }\n": typeof types.GetCarDocument,
    "\n  query GetCars($take: Int $skip: Int) {\n    cars(skip: $skip take: $take) {\n      id\n      brand\n    }\n  }\n": typeof types.GetCarsDocument,
    "\n  mutation UpdateCar($data: CarUpdateInput!, $where: CarWhereUniqueInput!) {\n    updateCar(data: $data, where: $where) {\n      id\n      createdAt\n    }\n  }\n": typeof types.UpdateCarDocument,
    "\n  mutation AddCarImg($input: FileInput!) {\n    addCarImg(input: $input) {\n      id\n    }\n  }\n": typeof types.AddCarImgDocument,
    "\n  mutation AddCarImgs($input: FilesInput!) {\n    addCarImgs(input: $input) {\n      id\n    }\n  }\n": typeof types.AddCarImgsDocument,
    "\n  mutation CreateUser($input: CreateUserInput!) {\n    createUser(input: $input) {\n      id\n    }\n  }\n": typeof types.CreateUserDocument,
};
const documents: Documents = {
    "\n  mutation CreateCar($input: CarCreateInput!) {\n    createCar(input: $input) {\n      id\n      createdAt\n    }\n  }\n": types.CreateCarDocument,
    "\n  query GetCar($where: CarWhereUniqueInput!) {\n    car(where: $where) {\n      brand\n      color\n      createdAt\n      id\n      model\n      price\n      updatedAt\n    }\n  }\n": types.GetCarDocument,
    "\n  query GetCars($take: Int $skip: Int) {\n    cars(skip: $skip take: $take) {\n      id\n      brand\n    }\n  }\n": types.GetCarsDocument,
    "\n  mutation UpdateCar($data: CarUpdateInput!, $where: CarWhereUniqueInput!) {\n    updateCar(data: $data, where: $where) {\n      id\n      createdAt\n    }\n  }\n": types.UpdateCarDocument,
    "\n  mutation AddCarImg($input: FileInput!) {\n    addCarImg(input: $input) {\n      id\n    }\n  }\n": types.AddCarImgDocument,
    "\n  mutation AddCarImgs($input: FilesInput!) {\n    addCarImgs(input: $input) {\n      id\n    }\n  }\n": types.AddCarImgsDocument,
    "\n  mutation CreateUser($input: CreateUserInput!) {\n    createUser(input: $input) {\n      id\n    }\n  }\n": types.CreateUserDocument,
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
export function gql(source: "\n  mutation CreateCar($input: CarCreateInput!) {\n    createCar(input: $input) {\n      id\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  mutation CreateCar($input: CarCreateInput!) {\n    createCar(input: $input) {\n      id\n      createdAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCar($where: CarWhereUniqueInput!) {\n    car(where: $where) {\n      brand\n      color\n      createdAt\n      id\n      model\n      price\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query GetCar($where: CarWhereUniqueInput!) {\n    car(where: $where) {\n      brand\n      color\n      createdAt\n      id\n      model\n      price\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCars($take: Int $skip: Int) {\n    cars(skip: $skip take: $take) {\n      id\n      brand\n    }\n  }\n"): (typeof documents)["\n  query GetCars($take: Int $skip: Int) {\n    cars(skip: $skip take: $take) {\n      id\n      brand\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateCar($data: CarUpdateInput!, $where: CarWhereUniqueInput!) {\n    updateCar(data: $data, where: $where) {\n      id\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateCar($data: CarUpdateInput!, $where: CarWhereUniqueInput!) {\n    updateCar(data: $data, where: $where) {\n      id\n      createdAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddCarImg($input: FileInput!) {\n    addCarImg(input: $input) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation AddCarImg($input: FileInput!) {\n    addCarImg(input: $input) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddCarImgs($input: FilesInput!) {\n    addCarImgs(input: $input) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation AddCarImgs($input: FilesInput!) {\n    addCarImgs(input: $input) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateUser($input: CreateUserInput!) {\n    createUser(input: $input) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUser($input: CreateUserInput!) {\n    createUser(input: $input) {\n      id\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;