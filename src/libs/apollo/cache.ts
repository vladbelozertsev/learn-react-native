import { InMemoryCache } from '@apollo/client';

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cars: { keyArgs: false },
      },
    },
  },
});

/**
 * KeyArgs - указывает по какому полю определять уникальность списка.
 * К примеру если у нас есть квери запрос который принимает в себя инпут
 * только skip и take, то мы не хотим чтобы на основании этих данных (skip, take)
 * формировались  отдельные списки при каждом изменение skip и take. Те список
 * со skip = 0 и со skip = 5 - это один и тот-же список, с одинаковыми по логике
 * данными, только дополненный через fetchMore
 *
 * Useful links:
 * https://stackoverflow.com/questions/63123558/apollo-graphql-merge-cached-data
 * https://www.apollographql.com/docs/react/pagination/core-api
 **/
