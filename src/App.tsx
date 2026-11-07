
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Landing from './pages/landing'
import Contact from './pages/contact'
import Header from './components/header'
import Footer from './components/footer'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="flex min-h-screen flex-col bg-white">
          {/* Shared Header */}
          <Header />

          {/* Page Content */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          {/* Shared Footer */}
          <Footer />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
