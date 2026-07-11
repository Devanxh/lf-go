import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { appRouter } from './router';

const server = createHTTPServer({
  router: appRouter,
  createContext() {
    return {};
  },
});

server.listen(3000);
console.log('tRPC server listening on http://127.0.0.1:3000');
