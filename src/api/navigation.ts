import { apiGet } from '../lib/api'
import type { NavItem } from '../types/api'

export const getNavigation = () => apiGet<NavItem[]>('/navigation')