import { keepPreviousData, useQuery } from '@tanstack/react-query';
import type { FetchProductsParams } from '../types/product';
import { api } from '../services/api';

export const useProducts = (params: FetchProductsParams) => {
  return useQuery({
    queryKey: ['products', params],
    queryFn: () => api.fetchProducts(params),

    retry: 5,
    retryDelay: attempt => Math.min(1000 * 2 ** attempt, 5000),

    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });
};