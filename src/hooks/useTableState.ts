import { useState } from 'react'
import type { SortConfig } from '@/components/DataTable'

export interface UseTableStateOptions {
  defaultPageSize?: number
  defaultSort?: SortConfig | null
}

export interface TableState<TFilters = Record<string, any>> {
  // Current state values
  page: number
  search: string
  filters: TFilters
  sort: SortConfig | null
  
  // State setters
  setPage: (page: number) => void
  setSearch: (search: string) => void
  setFilters: (filters: TFilters) => void
  setSort: (sort: SortConfig | null) => void
  
  // Utility methods
  resetFilters: () => void
  resetAll: () => void
  
  // Combined params object for API calls
  params: {
    page: number
    pageSize: number
    search: string
    filters: TFilters
    sort: SortConfig | null
  }
}

/**
 * Custom hook to manage table state (pagination, search, filters, sorting)
 * 
 * @example
 * ```tsx
 * const table = useTableState({ defaultPageSize: 10 })
 * const { data, isLoading } = useVehiclesQuery(table.params)
 * 
 * <DataTable
 *   data={data?.data}
 *   onSearchChange={table.setSearch}
 *   onFilterChange={table.setFilters}
 *   onSortChange={table.setSort}
 *   onPageChange={table.setPage}
 * />
 * ```
 */
export function useTableState<TFilters = Record<string, any>>(
  options: UseTableStateOptions = {}
): TableState<TFilters> {
  const { defaultPageSize = 10, defaultSort = null } = options
  
  // State
  const [page, setPageState] = useState(1)
  const [search, setSearchState] = useState('')
  const [filters, setFiltersState] = useState<TFilters>({} as TFilters)
  const [sort, setSortState] = useState<SortConfig | null>(defaultSort)
  
  // Smart setters that auto-reset page when needed
  const setSearch = (newSearch: string) => {
    setSearchState(newSearch)
    setPageState(1) // Reset to first page on search
  }
  
  const setFilters = (newFilters: TFilters) => {
    setFiltersState(newFilters)
    setPageState(1) // Reset to first page on filter change
  }
  
  const setSort = (newSort: SortConfig | null) => {
    setSortState(newSort)
    // Don't reset page on sort - just re-order current page
  }
  
  const setPage = (newPage: number) => {
    setPageState(newPage)
  }
  
  // Utility methods
  const resetFilters = () => {
    setSearchState('')
    setFiltersState({} as TFilters)
    setSortState(defaultSort)
    setPageState(1)
  }
  
  const resetAll = () => {
    resetFilters()
  }
  
  // Combined params for API calls
  const params = {
    page,
    pageSize: defaultPageSize,
    search,
    filters,
    sort,
  }
  
  return {
    // State
    page,
    search,
    filters,
    sort,
    
    // Setters
    setPage,
    setSearch,
    setFilters,
    setSort,
    
    // Utilities
    resetFilters,
    resetAll,
    
    // For API
    params,
  }
}
