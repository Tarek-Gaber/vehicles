import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface QueryProviderProps {
  children: React.ReactNode;
}

/**
 * TanStack Query Provider with optimized defaults
 */
export function QueryProvider({ children }: QueryProviderProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // Stale time: 1 minute (data considered fresh for 1 min)
            staleTime: 1 * 60 * 1000,
            
            // Cache time: 5 minutes (unused data kept in cache for 5 min)
            gcTime: 5 * 60 * 1000,
            
            // Retry failed requests 2 times
            retry: 2,
            
            // Retry delay: exponential backoff
            retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
            
            // Refetch on window focus in production
            refetchOnWindowFocus: import.meta.env.PROD,
            
            // Don't refetch on mount if data is fresh
            refetchOnMount: false,
            
            // Refetch on reconnect
            refetchOnReconnect: true,
          },
          mutations: {
            // Retry failed mutations once
            retry: 1,
            
            // Retry delay for mutations
            retryDelay: 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* React Query Devtools: Install @tanstack/react-query-devtools to enable */}
    </QueryClientProvider>
  );
}
