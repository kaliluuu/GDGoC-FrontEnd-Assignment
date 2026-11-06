import { apiGet } from '../lib/api'
import type { Stats } from '../types/api'

export const getStats = () => apiGet<Stats>('/stats')