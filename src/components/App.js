import '../styles/App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Router from './routes/Router';


function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false
      },
    },
  })
  return <QueryClientProvider client={queryClient}><Router /></QueryClientProvider>
}

export default App;
