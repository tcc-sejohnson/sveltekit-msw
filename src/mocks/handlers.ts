import { rest, RestHandler } from 'msw';

// Define your mock handlers in here
export const handlers: Array<RestHandler> = [
  rest.get('/user', (_, res, ctx) => {
    return res(ctx.status(200));
  }),
];
