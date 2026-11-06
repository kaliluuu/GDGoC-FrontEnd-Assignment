import { useQuery } from '@tanstack/react-query'
import { getInquiryCategories } from '../api/inquiryCategories'

export const useInquiryCategories = () =>
  useQuery({ queryKey: ['inquiry-categories'], queryFn: getInquiryCategories })