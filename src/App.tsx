import { useQuery } from '@tanstack/react-query'
import { getInquiryCategories, getNavigation, getStats } from './api'

function App() {
  const nav = useQuery({ queryKey: ['navigation'], queryFn: getNavigation })
  const categories = useQuery({
    queryKey: ['inquiry-categories'],
    queryFn: getInquiryCategories,
  })
  const stats = useQuery({ queryKey: ['stats'], queryFn: getStats })

  if (nav.isLoading || categories.isLoading || stats.isLoading) {
    return <p className="p-8">Loading...</p>
  }

  if (nav.error || categories.error || stats.error) {
    return <p className="p-8 text-red-600">Something went wrong</p>
  }

  return (
    <div className="p-8 space-y-4">
      <p>Nav: {nav.data?.map((n) => n.label).join(', ')}</p>
      <p>Categories: {categories.data?.map((c) => c.label).join(', ')}</p>
      <p>Instagram: {stats.data?.social.instagram}</p>
    </div>
  )
}

export default App