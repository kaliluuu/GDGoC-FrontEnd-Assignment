import { apiGet } from '../lib/api'
import type { InquiryCategory } from '../types/api'

export const getInquiryCategories = () =>
  apiGet<InquiryCategory[]>('/inquiry-categories')