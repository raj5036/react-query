import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import Demo from './Demo/Demo'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Demo />
    </QueryClientProvider>
  )
}

export default App
