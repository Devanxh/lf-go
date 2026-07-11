import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const trpc = initTRPC.create();

const todos: Array<{ id: number; title: string }> = [];

export const appRouter = trpc.router({
  hello: trpc.procedure
    .input(z.object({ name: z.string().optional() }).optional())
    .query(({ input }) => ({
      greeting: `Hello, ${input?.name ?? 'world'}!`,
    })),
  createTodo: trpc.procedure
    .input(z.object({ title: z.string() }))
    .mutation(({ input }) => {
      const todo = { id: todos.length + 1, title: input.title };
      todos.push(todo);
      return todo;
    }),
  listTodos: trpc.procedure.query(() => todos),
});

export type AppRouter = typeof appRouter;
