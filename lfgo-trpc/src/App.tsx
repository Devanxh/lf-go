import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '../server/router';
import { z } from 'zod';

const trpc = createTRPCReact<AppRouter>();

const queryClient = new QueryClient();

const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: '/trpc',
      transformer: undefined,
    }),
  ],
});

function AppContent() {
  const [name, setName] = useState('Ada');
  const hello = trpc.hello.useQuery({ name });

  const createTodo = trpc.createTodo.useMutation({
    onSuccess: () => {
      setName('Updated');
    },
  });

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 560, margin: '3rem auto', padding: '1rem' }}>
      <h1>tRPC + React starter</h1>
      <p>Fetch from the API through a shared router.</p>

      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        style={{ width: '100%', padding: '0.75rem', marginBottom: '1rem' }}
      />

      <button
        onClick={() => createTodo.mutate({ title: `Hello ${name}` })}
        style={{ padding: '0.75rem 1rem' }}
      >
        Create todo
      </button>

      <div style={{ marginTop: '1.5rem' }}>
        {hello.isLoading && <p>Loading…</p>}
        {hello.error && <p>{hello.error.message}</p>}
        {hello.data && <p>{hello.data.greeting}</p>}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <AppContent />
      </QueryClientProvider>
    </trpc.Provider>
  );
}
