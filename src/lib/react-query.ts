import { QueryClient } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 30000,
      refetchOnWindowFocus: false,
    },
  },
})

export default queryClient
