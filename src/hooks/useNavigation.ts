import { useQuery } from '@tanstack/react-query'
import { getNavigation } from '../api/navigation'

export const useNavigation = () =>
  useQuery({ queryKey: ['navigation'], queryFn: getNavigation })