import type { ApiResponse } from '../types/api'

const BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? 'https://gdgoc-ugm-api.vercel.app/api'

export async function apiGet<T>(path: string): Promise<T> {
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