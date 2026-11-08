import type { ApiResponse, InquiryCategory, NavItem, Stats, Track } from './types'

const BASE_URL = 'https://gdgoc-ugm-api.vercel.app/api'

async function apiGet<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`)

  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`)
  }

  const json = (await res.json()) as ApiResponse<T>

  if (!json.success) {
    throw new Error('The API returned an unsuccessful response')
  }

  return json.data
}

export const getNavigation = () => apiGet<NavItem[]>('/navigation')
export const getInquiryCategories = () =>
  apiGet<InquiryCategory[]>('/inquiry-categories')
export const getStats = () => apiGet<Stats>('/stats')
export const getTracks = () =>
  apiGet<Track[]>('/tracks')
export const getFormats = () =>
  apiGet<LearningFormat[]>('/formats')