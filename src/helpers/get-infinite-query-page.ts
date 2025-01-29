import { QueryFunctionContext } from '@tanstack/react-query';

type Ctx = QueryFunctionContext<any, any>;
type Input = ((input: string) => string) | string;

export const getInfiniteQueryPage = <T>(input: Input, results?: number) => {
  return async (ctx: Ctx) => {
    const startPage = ctx.pageParam === undefined && 1;
    const page = startPage || ctx.pageParam;
    if (!page) return { data: [], page, nextPage: false };

    const query = `?page=${page}&results=${results || 10}`;
    const url = typeof input === 'function' ? input(query) : `${input}${query}`;
    const data = await axios.get<{ data: T[] }>(url).then(r => r?.data?.data);
    const nextPage = data.length === (results || 10) && page + 1;

    return { data, page, nextPage };
  };
};
