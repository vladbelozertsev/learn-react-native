/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Car = {
  __typename?: 'Car';
  brand: Scalars['String']['output'];
  color: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  model: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateCarInput = {
  brand: Scalars['String']['input'];
  color: Scalars['String']['input'];
  model: Scalars['String']['input'];
  price: Scalars['Float']['input'];
};

export type GetCarInput = {
  id: Scalars['Int']['input'];
};

export type GetCarsInput = {
  skip?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCar: Car;
};


export type MutationCreateCarArgs = {
  input: CreateCarInput;
};

export type Query = {
  __typename?: 'Query';
  car: Car;
  cars: Array<Car>;
};


export type QueryCarArgs = {
  input: GetCarInput;
};


export type QueryCarsArgs = {
  input?: InputMaybe<GetCarsInput>;
};

export type CreateCarMutationVariables = Exact<{
  input: CreateCarInput;
}>;


export type CreateCarMutation = { __typename?: 'Mutation', createCar: { __typename?: 'Car', id: number, createdAt: any } };

export type GetCarQueryVariables = Exact<{
  input: GetCarInput;
}>;


export type GetCarQuery = { __typename?: 'Query', car: { __typename?: 'Car', brand: string, color: string, createdAt: any, id: number, model: string, price: number, updatedAt: any } };

export type GetCarsQueryVariables = Exact<{
  input?: InputMaybe<GetCarsInput>;
}>;


export type GetCarsQuery = { __typename?: 'Query', cars: Array<{ __typename?: 'Car', id: number, brand: string }> };


export const CreateCarDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCar"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCarInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCar"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<CreateCarMutation, CreateCarMutationVariables>;
export const GetCarDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCar"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetCarInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"car"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"model"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetCarQuery, GetCarQueryVariables>;
export const GetCarsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCars"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GetCarsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cars"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}}]}}]}}]} as unknown as DocumentNode<GetCarsQuery, GetCarsQueryVariables>;